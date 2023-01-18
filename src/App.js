import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Home from './Home'
import Portfolio from './Portfolio'
import Projects from './Projects'
import Study from './Study'
import About from './About'
import Error from './Error'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio/:title" element={<Study />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
