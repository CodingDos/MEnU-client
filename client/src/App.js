import RegisterLoginPage from './screens/RegisterLoginPage.jsx';
import Home from './screens/Home.jsx';
import Nav from './components/Nav.jsx'
import { Routes, Route, useLocation} from 'react-router-dom';
import './App.css';





function App() {

  const location = useLocation()

  return (
    <div className="App">
      {
      location.pathname === "/"?
        <RegisterLoginPage />
         :
         <>
         <Nav />
     <Routes>
      <Route path="/feed" element={<Home />} />
      <Route path="/" element={<RegisterLoginPage />} />
    </Routes> 
    </>
}
    </div>
  );
}

export default App;
