import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert1 from "./Components/Alert1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [, setAlert] = useState("null");
  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  const toggglemode = () => {
    if (mode === "light") {
      setMode("brown");
      document.body.style.backgroundColor = "grey";
      ShowAlert("dark mode has been enabled", "success");
      document.title = "textUtils-darkmode";
      setInterval(() => {
        document.title = "textutils is amazing";
      }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "light";
      ShowAlert("light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Alert1 />

      <Router>
        <Navbar
          title="textUtils"
          about="About"
          mode={mode}
          toggglemode={toggglemode}
        />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            path="/"
            element={<TextForm heading="enter text to analyze" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
