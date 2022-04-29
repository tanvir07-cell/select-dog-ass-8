import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Animal from "./components/Animal/Animal";
import QNA from "./components/QNA/QNA";

function App() {
  return (
    <div className="App">
      {/* heading component: */}

      <Header></Header>

      {/* animal component: */}
      <Animal></Animal>

      <QNA></QNA>
    </div>
  );
}

export default App;
