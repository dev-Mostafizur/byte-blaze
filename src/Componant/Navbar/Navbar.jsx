import { Link, NavLink } from "react-router-dom";
import LightDarkMode from "../LightDarkMode/LightDarkMode";

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100 shadow-lg px-4 sm:px-8 fixed z-10">
  <div className="flex-1 ">
    <Link to={'/'} className="btn btn-ghost gap-0 normal-case text-secondary text-2xl">Byte<span className="text-primary">Blaze</span></Link>
  </div>
  <div className="flex-none gap-2">
    <ul className="menu menu-horizontal px-1 sm:flex   gap-5">
    <NavLink
  to="/"
  className={({ isActive }) =>
    isActive ? "text-primary font-bold" : "font-bold"
  }
>
  Home
</NavLink>
<NavLink
  to="/blogs"
  className={({ isActive }) =>
    isActive ? "text-primary font-bold" : "font-bold"
  }
>
  Blogs
</NavLink>
<NavLink
  to="/bookmarks"
  className={({ isActive }) =>
    isActive ? "text-primary font-bold" : "font-bold"
  }
>
  Bookmarks
</NavLink>
    </ul>
    <LightDarkMode/>
  </div>
</div>
        </>
    );
};

export default Navbar;