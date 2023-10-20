import { Link, NavLink } from "react-router-dom";
import logo from './../../assets/logo.gif'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { BiSolidUser } from 'react-icons/bi';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/addProduct"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Add Product
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/myCart"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                My Cart
            </NavLink>
        </li>


    </>

    return (
        <div className="navbar bg-[#dbdbdb]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    <img src={logo} className="w-12 h-12" alt="" />
                    <p className="text-xl font-bold">TechVine</p>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar bg-gray-400">
                        <div className="w-10 rounded-full">

                            {
                                user ?
                                    <img className="w-20 h-20" src={user.photoURL} alt="" />
                                    :
                                    <BiSolidUser className="text-white text-4xl"></BiSolidUser>

                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">
                                    {
                                        user ?
                                            <p>{user.displayName || 'user'}</p>
                                            :
                                            <p>New</p>
                                    }
                                </span>
                            </a>
                        </li>

                        <li>
                            {
                                user ?
                                    <button onClick={handleLogOut}>LogOut</button>
                                    :
                                    <Link to='/login'> <button>LogIn</button></Link>
                            }
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;