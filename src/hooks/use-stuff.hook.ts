import { useCallback, useState } from "react";

export const useStuff = (startValue: number) => {
  const [counter, setCount] = useState(startValue);

  const getStuffSync = useCallback((s: string) => "got some stuff sync", []);
  const getStuffAsync = useCallback(
    async (s: string, n: number) => Promise.resolve("got some stuff sync"),
    []
  );
  const failtToGetSomeStuffSync: () => string = useCallback(() => {
    throw new Error("no you dont");
  }, []);

  const failtToGetSomeStuffAsync: () => Promise<string> = useCallback(
    () => Promise.reject("no async for you"),
    []
  );

  return {
    getStuffSync,
    getStuffAsync,
    failtToGetSomeStuffSync,
    failtToGetSomeStuffAsync,
    setCount,
    counter,
  };
};
