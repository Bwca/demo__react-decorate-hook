import { useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";
import { useStuff } from "./hooks/no-error-use-stuff.hook";

function App() {
  const {
    failtToGetSomeStuffAsync,
    failtToGetSomeStuffSync,
    getStuffAsync,
    getStuffSync,
    counter,
    setCount,
  } = useStuff(15);

  useEffect(() => {
    failtToGetSomeStuffAsync().then((r) =>
      console.log(`I got ${r} from failtToGetSomeStuffAsync`)
    );
    console.log(
      `I got ${failtToGetSomeStuffSync()} from failtToGetSomeStuffSync`
    );
    getStuffAsync("some-string", 2).then((r) =>
      console.log(`I got ${r} from getStuffAsync`)
    );
    console.log(`I got ${getStuffSync("str")} from getStuffSync`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{counter}</p>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          increase by 1
        </button>
      </header>
    </div>
  );
}

export default App;
