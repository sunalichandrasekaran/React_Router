import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Post from "./Components/Post";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/post/1">
            <li>Post</li>
          </Link>
          <Link to="/post/2">
            <li>Post2</li>
          </Link>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
