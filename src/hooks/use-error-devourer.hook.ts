import { FunctionWithArguments } from "../models/function-with-arguments.model";
import { HookMethodsOptionalizedReturns } from "../models/hook-methods-optionazed-returns.model";

export const devourErrorsDecorator = <F extends FunctionWithArguments>(
  fn: F
) => {
  return (...args: Parameters<F>): HookMethodsOptionalizedReturns<F> => {
    const { ...result } = fn(args);
    Object.keys(result)
      .filter((i) => typeof result[i] === "function")
      .forEach((f) => {
        const originalFun: FunctionWithArguments = result[f];
        result[f] =
          originalFun.constructor.name === "AsyncFunction"
            ? async (...args: Parameters<typeof originalFun>) => {
                console.log("AsyncFunction called with ", args);
                try {
                  return await originalFun(args);
                } catch (e) {
                  console.log("ASYNC failed");
                  return null;
                }
              }
            : (...args: Parameters<typeof originalFun>) => {
                console.log("Sync function called with ", args);
                try {
                  return originalFun(args);
                } catch (e) {
                  console.log("SYNC failed");
                  return null;
                }
              };
      });
    return result;
  };
};
