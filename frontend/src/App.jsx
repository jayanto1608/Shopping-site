import "./styles/navbar.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import CreateProduct from "./pages/CreateProduct";

function App() {
  return  (
    <div>
      <Navbar />
    <main>
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/CreateProduct" element={<CreateProduct />}></Route>
         <Route path="/Shop" element={<Shop />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          
      </Routes>
    </main>
      <Footer /> 
    </div>
  ); 
}

export default App
