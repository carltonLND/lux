import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Construction, Signup, SignIn } from "./routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Construction />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
