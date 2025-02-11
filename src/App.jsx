import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Orders from "./Orders";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import VegItems from "./VegItems";
import NonVegItems from "./NonVegItems";
import { useDispatch, useSelector } from "react-redux";
import MilkItems from "./MilkItems";
import "./App.css"; // Import the CSS file
import NotFound from "./NotFound";
import Login from "./Login";
import { logout } from "./Store";
import'fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
let {isAuthenticated,user}=useSelector(state=>state.auth);
let dispatch=useDispatch();

  return (
    <>
      <BrowserRouter>
        <nav className="navbar">
          <div className="logo">🛒 MyShop</div>
          <ul className="nav-links">
            <li><Link to="/Home"><i className="fa-duotone fa-solid fa-house"></i>Home</Link></li>
            <li><Link to="/VegItems">Veg Items</Link></li>
            <li><Link to="/NonVegItems">Non-Veg Items</Link></li>
            <li><Link to="/MilkItems">Milk Items</Link></li>
            <li>
              <Link to="/Cart" className="cart-link">
              <i className="fa-solid fa-cart-shopping"></i>Cart {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
              </Link>
            </li>
            <li><Link to="/Orders"><i className="fa-solid fa-clock-rotate-left"></i>Orders</Link></li>
            <li><Link to="/AboutUs"><i className="fa-regular fa-address-card"></i>About Us</Link></li>
            <li><Link to="/ContactUs"><i className="fa-solid fa-address-book"></i>Contact Us</Link></li>
            {isAuthenticated?(
              <li>
  <div className="auth-section">
    <span className="user-welcome">welcome,{user}</span>
    <button className="logout" onClick={()=>dispatch(logout())}>logout</button>
  </div>
  </li>
):
(
<li><Link to="/login"><i className="fa-solid fa-arrow-right-from-bracket"></i>Login</Link></li>
)}
          </ul>
        </nav>


        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/VegItems" element={<VegItems />} />
            <Route path="/NonVegItems" element={<NonVegItems />} />@
            <Route path="/MilkItems" element={<MilkItems />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NotFound/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
