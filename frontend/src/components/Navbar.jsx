import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between bg-black text-white text-[16px] p-4  font-medium ">
     <p  className=" md:text-yellow-300"><Link to="/">Home</Link></p>
     <nav>
      <ul className=" flex cursor-pointer">
         
         <li className=" mx-2"> <Link to="/shop">Shop</Link></li>
         <li className="mx-2"> <Link to ="/contact">Contact</Link></li>
         <li className="mx-2"><Link to="/about">About</Link> </li>
         <li className="mx-2"> <Link to="/cart">Cart</Link></li>
         <li className="mx-2"> <Link to="/CreateProduct">Add Products</Link></li>
      </ul>
     </nav>
    </header>
  )
}

export default Navbar