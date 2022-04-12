import { devourErrorsDecorator } from "./use-error-devourer.hook";
import { useStuff as errorProneUseStuff } from "./use-stuff.hook";

export const useStuff = devourErrorsDecorator(errorProneUseStuff);
