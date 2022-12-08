import { useState } from "react";
import { IoMoon, IoOptionsSharp, IoSunnySharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Theme } from "../Theme";
import Brands from "./Brands";

type Props = {
  children?: React.ReactNode;
  theme?: Theme | null;
};
const defaultProps = {
  children: <div>Header Components</div>,
  theme: Theme.neutral,
};
const Header = (propsIn: Props) => {
  const props = { ...defaultProps, ...propsIn };
  const [toggle, setToggle] = useState(false);
  const [toggleTheme, setToggleTheme] = useState(false);
  function handleTheme() {
    setToggleTheme(!toggleTheme);
    if (
      toggleTheme === false &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
  // Handle Navigasi
  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <>
      <div className={`w-full flex items-center justify-between max-w-tablet`}>
        <Brands brands="NU Rancaekek" />
        <div className="flex items-center gap-4">
          <IoSunnySharp
            className={`h-5 w-5 ${toggleTheme ? "block" : "hidden"} `}
            onClick={handleTheme}
          />
          <IoMoon
            className={`h-5 w-5 ${toggleTheme ? "hidden" : "block"}`}
            onClick={handleTheme}
          />
          <IoOptionsSharp className="h-5 w-5" onClick={handleToggle} />
        </div>
      </div>
      {/* Nav Menu */}
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } flex-col items-start justify-between mt-4 w-full`}
      >
        <ul className="flex flex-col w-full gap-4">
          <li className="text-xs p-1" onClick={handleToggle}>
            <NavLink
              to="/warta"
              className={({ isActive }) =>
                isActive ? "font-semibold" : "font-light"
              }
            >
              Warta
            </NavLink>
          </li>
          <li className="text-xs p-1" onClick={handleToggle}>
            <NavLink
              to="/a"
              className={({ isActive }) =>
                isActive ? "font-semibold" : "font-light"
              }
            >
              Tokoh
            </NavLink>
          </li>
          <li className="text-xs p-1" onClick={handleToggle}>
            <NavLink
              to="/b"
              className={({ isActive }) =>
                isActive ? "font-semibold" : "font-light"
              }
            >
              Menu
            </NavLink>
          </li>
          <li className="text-xs p-1" onClick={handleToggle}>
            <NavLink
              to="/c"
              className={({ isActive }) =>
                isActive ? "font-semibold" : "font-light"
              }
            >
              Menu
            </NavLink>
          </li>
          <li className="text-xs p-1" onClick={handleToggle}>
            <NavLink
              to="/d"
              className={({ isActive }) =>
                isActive ? "font-semibold" : "font-light"
              }
            >
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
