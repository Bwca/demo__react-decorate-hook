import { FunctionWithArguments } from "./function-with-arguments.model";
import { FunctionWithOptionalReturn } from "./function-with-optional-return.model";

export type HookMethodsOptionalizedReturns<T extends FunctionWithArguments> = {
  [k in keyof ReturnType<T>]: ReturnType<T>[k] extends FunctionWithArguments
    ? FunctionWithOptionalReturn<ReturnType<T>[k]>
    : ReturnType<T>[k];
};
