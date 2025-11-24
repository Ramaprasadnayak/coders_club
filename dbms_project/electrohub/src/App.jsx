import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Loginpage from "./Pages/login_signup";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/home_page";
import Header from "./Pages/header";
import CartPage from "./Pages/cart_Page";
import List_Page from "./Pages/list_page";
import ItemPage from "./Pages/item_page";

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
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/:category" element={<List_Page />} />
        <Route path="/itempage/:id" element={<ItemPage/>} />
        <Route path="/itempage/buy" element={<ItemPage/>} />
      </Routes>
    </>
  );
}
export default App;
