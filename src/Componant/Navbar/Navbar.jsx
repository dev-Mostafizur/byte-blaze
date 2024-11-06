import LightDarkMode from "../LightDarkMode/LightDarkMode";

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100 shadow-lg px-4 fixed z-10">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">ByteBlaze</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Blog</a></li>
      <li><a>Bookmarks</a></li>
    </ul>
    <LightDarkMode/>
  </div>
</div>
        </>
    );
};

export default Navbar;