import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from './components/Header';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
