import './App.css'
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./pages/NavBar";
import Project from "./pages/Project";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar />
            <div className="container mt-2" style = {{marginTop: 40}}>
                <Routes>
                    <Route path="/" element = {<Home/>} />
                    <Route path="/projects" element = {<Project/>} />
                </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
