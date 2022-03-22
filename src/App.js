import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/signin" element ={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
