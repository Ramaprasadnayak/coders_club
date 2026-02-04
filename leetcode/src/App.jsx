import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/homePage";
import Loginpage from "./Pages/loginPage";
import NavBar from "./components/nav_bar";
import "./App.css";
import ProblemSet from "./Pages/problemSet";
import ProblemPage from "./Pages/problempage";
import Profile from "./Pages/profilePage";
import DownNav from "./components/down_nav";

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

function MainLayout() {
  const location = useLocation();
  const hideHeader = location.pathname === "/loginpage" || location.pathname.startsWith("/problemset/");

  return (
    <>
      {
        hideHeader?<></>:<NavBar />
      }

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/problemset" element={<ProblemSet/>}/>
        <Route path="/problemset/:slug" element={<ProblemPage />} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      {
        hideHeader?<></>:<DownNav/>
      }
    </>
  );
}


export default App;