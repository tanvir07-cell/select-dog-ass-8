import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Animal from "./components/Animal/Animal";

function App() {
  return (
    <div className="App">
      {/* heading component: */}

      <Header></Header>

      {/* animal component: */}
      <Animal></Animal>
    </div>
  );
}

export default App;
