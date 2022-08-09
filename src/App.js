import Reacts from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import HeadandTail from "./pages/HeadandTail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/head" element={<HeadandTail />} />
      </Routes>
    </>
  );
}

export default App;
