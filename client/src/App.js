import RegisterLoginPage from "./screens/RegisterLoginPage.jsx";
import Home from "./screens/Home.jsx";
import Nav from "./components/Nav.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Dashboard from "./screens/Dashboard.jsx";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/" ? (
        <RegisterLoginPage />
      ) : (
        <>
          <Nav />
          <Routes>
            <Route path="/" element={<RegisterLoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/db" element={<Dashboard />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
