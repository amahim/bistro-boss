import { Link, NavLink } from "react-router-dom";
import shopNav from '../../../assets/icon/shopNav.png'
import { FaUser } from "react-icons/fa";

const NavBar = () => {

    const navOptions =
        <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-yellow-400 font-bold text-lg" : "text-white text-xl"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/contact-us"
        className={({ isActive }) =>
          isActive ? "text-yellow-400 font-bold text-lg" : "text-white text-xl"
        }
      >
        Contact Us
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "text-yellow-400 font-bold text-lg" : "text-white text-xl"
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/our-menu"
        className={({ isActive }) =>
          isActive ? "text-yellow-400 font-bold text-lg" : "text-white text-xl"
        }
      >
        Our Menu
      </NavLink>
      <NavLink
        to="/Our-shop"
        className={({ isActive }) =>
          isActive ? "text-yellow-400 font-bold text-lg" : "text-white text-xl"
        }
      >
        <div className="flex gap-2">
            <p>Our Shop</p>
            <img src={shopNav} className="w-10" />
        </div>
      </NavLink>
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30  bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-white text-3xl">Bistro Boss</p>
                        <p className="text-xl text-white">R e s t a u r a n t</p>
                    </div>
                </div>
                <div className="navbar-end flex gap-10 items-center">
                <div className="hidden md:block">
                    <ul className="menu menu-horizontal px-1 flex gap-6">
                        {navOptions}
                    </ul>
                </div>
                <div className="flex gap-4 items-center">
                    <Link className="text-xl">Login</Link>
                    <p className="text-xl "><FaUser/></p>
                </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;