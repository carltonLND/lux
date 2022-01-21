import "./sass/main.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Construction } from "./routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Construction />} />
      </Routes>
    </Router>
  );
}

export default App;
