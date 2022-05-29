import logo from './logo.svg';
import './App.css';

function App() {
	const [result, setResult] = useState("");
useEffect(() => {
 fetch("/api/greeting").then((response) => {
  setResult(response.data);
 });
}, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
{result && <h1>{result}</h1>}
    </div>
  );
}

export default App;
