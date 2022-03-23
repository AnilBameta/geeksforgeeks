import "./App.css";
import HomeContainer from "./containers/HomeContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeContainer />} />
          <Route path="/signin" element ={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
