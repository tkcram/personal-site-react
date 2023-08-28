import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Portfolio from './Portfolio'
import Archive from './Archive'
import Study from './Study'
import Article from './Article'
import About from './About'
import Error from './Error'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio/:title" element={<Study />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/article/:title" element={<Article />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<Error />} />
        <Route path="/" element={<Portfolio />} />
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
