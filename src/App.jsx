import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      React Tailwind
      <Home />
      <Home>
        <img src="/vectors/forward-arrow.svg" alt="arrow" />
      </Home>
      <Home>
        <span>back</span>
      </Home>
    </div>
  );
}

export default App;
