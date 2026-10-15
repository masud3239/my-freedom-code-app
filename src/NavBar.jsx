

const NavBar = () => {
    return (
        <div>
          <div className="navbar bg-blue-300 shadow-sm text-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-2xl">
        <li><a>About Us</a></li>
          <li><a>Contact</a></li>
          <li><a>Jobs</a></li>
          <li><a>Press Kit</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl">Logo Here</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-2xl">
      <li><a>About Us</a></li>
          <li><a>Contact</a></li>
          <li><a>Jobs</a></li>
          <li><a>Press Kit</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-primary">Button</a>
  </div>
</div>
            
        </div>
    );
};

export default NavBar;