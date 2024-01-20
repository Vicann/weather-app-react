import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
      <footer>
        Open sourced code by{" "}
        <a href="https://github.com/Vicann">Victoria Okoro</a>
      </footer>
    </div>
  );
}

export default App;
