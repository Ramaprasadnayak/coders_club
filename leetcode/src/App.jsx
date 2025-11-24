import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/homePage";
import Loginpage from "./Pages/loginPage";
import NavBar from "./components/nav_bar";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

function MainLayout() {
  const location = useLocation();
  const hideHeader = location.pathname === "/loginpage";

  return (
    <>
      {
        hideHeader?<></>:<NavBar />
      }

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginpage" element={<Loginpage />} />
      </Routes>
    </>
  );
}


export default App;