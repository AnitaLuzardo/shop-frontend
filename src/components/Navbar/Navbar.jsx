import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import menu from '../utils/menu.png';
import login from '../utils/login.png';
import cart from '../utils/cartSolid.png';
import store from '../utils/store.png';


const Navbar = () => {

  let linking = [
    { name: "Login", 
      link:"/",
      url: login
    },
    { name: "Products", 
      link:"/products",
      url: store
    },
    { name: "Cart", 
      link:"/cart", 
      url: cart
    }
  ];

  let [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className={`flex items-center justify-between bg-[#262741] 
      py-4 px-7 shadow-md relative`}>
      <div className="font-bold text-2xl cursor-pointer flex items-center text-slate-300">
        <Link to="/">
          <span className="pt-2">Shopping Cart</span>
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <ul className="flex space-x-4">
          {linking.map((link) => (
            <li key={link.name} className="flex items-center text-slate-300">
              <div className="bg-[#f2f1f294] p-1 rounded-xl">
                <img src={link.url} alt={link.name} className="w-6 h-6" />
              </div>
              <Link to={link.link} className="text-xl ml-1">{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="text-xl cursor-pointer z-50 md:hidden"
      >
        <img src={menu} alt="Menu" className="w-5" />
      </div>
      {open && 
        <div 
          className="fixed inset-0 bg-black opacity-50 z-40" 
          onClick={() => setOpen(false)}
        ></div>
      }
      <ul
        className={`fixed top-0 left-0 w-full bg-[#262741] z-50 transition-transform 
        duration-500 ease-in-out transform ${open ? 'translate-y-0' : '-translate-y-full'
        } md:hidden`}
      >
        {linking.map((link) => (
          <li
            key={link.name}
            className="my-7 text-xl flex items-center w-full pl-8 text-slate-300"
            onClick={handleLinkClick}
          >
            <div className="bg-[#f2f1f294] p-2 rounded-xl">
              <img src={link.url} alt={link.name} className="w-6 h-6" />
            </div>
            <Link to={link.link} className="ml-1">{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar