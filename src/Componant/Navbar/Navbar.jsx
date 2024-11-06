import LightDarkMode from "../LightDarkMode/LightDarkMode";

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100 shadow-lg px-4 fixed z-10">
  <div className="flex-1">
    <a className="btn btn-ghost gap-0 normal-case text-secondary text-2xl">Byte<span className="text-primary">Blaze</span></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 font-bold">
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