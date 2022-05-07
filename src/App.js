import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <div>
      {/* <Login /> */}
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/detail/:name" element={<Detail/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
