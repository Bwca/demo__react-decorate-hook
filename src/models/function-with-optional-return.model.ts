import { FunctionWithArguments } from "./function-with-arguments.model";
import { Optional } from "./optional.model";

export type FunctionWithOptionalReturn<T extends FunctionWithArguments> = (
  ...args: Parameters<T>
) => ReturnType<T> extends Promise<infer P>
  ? Promise<Optional<P>>
  : Optional<ReturnType<T>>;
