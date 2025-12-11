import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/homePage";
import Loginpage from "./Pages/loginPage";
import ProblemList from "./Pages/Problems/ProblemList";
import Leaderboard from "./Pages/Leaderboard/Leaderboard";
import AdminPanel from "./Pages/Admin/AdminPanel";
import Contest from "./Pages/Contest/Contest";
import NavBar from "./components/nav_bar";
import { DataProvider } from "./context/DataContext";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </DataProvider>
  );
}

import MyBackground from "./components/background";

// ... imports

function MainLayout() {
  const location = useLocation();
  const hideHeader = location.pathname === "/loginpage";

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
        <MyBackground count="60" />
      </div>

      {
        hideHeader ? <></> : <NavBar />
      }

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/problems" element={<ProblemList />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/contest" element={<Contest />} />
      </Routes>
    </>
  );
}

export default App;