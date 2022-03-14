import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home"


function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>
      </header>

      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
