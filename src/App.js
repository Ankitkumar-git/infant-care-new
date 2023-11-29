import './App.css';
import Home from "./Components/Home";
import Login  from "./Components/Login";
import Contact  from "./Components/Contact";
import About from "C:/Users/Ankit Singh/Downloads/infant_care_webapp-main/infant_care_webapp-main/src/Components/About.js"
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
    
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
