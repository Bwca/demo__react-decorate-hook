import { FunctionWithArguments } from "../models/function-with-arguments.model";
import { HookMethodsOptionalizedReturns } from "../models/hook-methods-optionazed-returns.model";

export const devourErrorsDecorator = <F extends FunctionWithArguments>(
  fn: F
) => {
  return (...args: Parameters<F>): HookMethodsOptionalizedReturns<F> => {
    const { ...result } = fn(...args);
    Object.entries<FunctionWithArguments>(result)
      // we've assumed only functions for typing purposes, so filter to safeguard
      .filter(([k, v]) => typeof v === "function")
      .forEach(([k, fn]) => {
        result[k] =
          fn.constructor.name === "AsyncFunction"
            ? async (...args: Parameters<typeof fn>) => {
                console.log("AsyncFunction called with ", ...args);
                try {
                  return await fn(...args);
                } catch (e) {
                  console.log("ASYNC failed");
                  return null;
                }
              }
            : (...args: Parameters<typeof fn>) => {
                console.log("Sync function called with ", ...args);
                try {
                  return fn(...args);
                } catch (e) {
                  console.log("SYNC failed");
                  return null;
                }
              };
      });
    return result;
  };
};
