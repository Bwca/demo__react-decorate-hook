import logo from "./logo.svg";
import "./App.css";
import { useStuff } from "./hooks/no-error-use-stuff.hook";

function App() {
  const {
    failtToGetSomeStuffAsync,
    failtToGetSomeStuffSync,
    getStuffAsync,
    getStuffSync,
  } = useStuff("some-url");

  failtToGetSomeStuffAsync().then((r) =>
    console.log(`I got ${r} from failtToGetSomeStuffAsync`)
  );
  console.log(
    `I got ${failtToGetSomeStuffSync()} from failtToGetSomeStuffSync`
  );
  getStuffAsync('some-string', 2).then((r) => console.log(`I got ${r} from getStuffAsync`));
  console.log(`I got ${getStuffSync('str')} from getStuffSync`);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
