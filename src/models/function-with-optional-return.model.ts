import { FunctionWithArguments } from "./function-with-arguments.model";
import { Optional } from "./optional.model";

export type FunctionWithOptionalReturn<F extends FunctionWithArguments> = (
  ...args: Parameters<F>
) => ReturnType<F> extends Promise<infer P>
  ? Promise<Optional<P>>
  : Optional<ReturnType<F>>;
