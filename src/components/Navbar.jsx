import { NavLink } from "react-router-dom";
export default function Navbar() {
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/coffee">Coffee</NavLink>
      <NavLink to="/dashboard">DashBoard</NavLink>
    </>
  );
  return (
    <div className="flex justify-between items-center w-11/12 mx-auto pt-3">
      <div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3 text-base font-bold text-gray-500"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold text-amber-800">
          Coffee House
        </a>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-12 text-base font-bold text-gray-500">
          {links}
        </ul>
      </div>
    </div>
  );
}
