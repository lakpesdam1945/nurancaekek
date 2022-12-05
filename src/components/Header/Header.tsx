import { backgroundList, Container } from "../Container";
import { Theme } from "../Theme";
import { NavLink } from "react-router-dom";
import { IoOptions, IoSearch, IoSearchOutline } from "react-icons/io5";
import { useState } from "react";

interface HeaderProps {
  theme?: Theme;
  children?: React.ReactNode;
}
const defaultHeaderProps = { children: <div>Hallo</div> };
function Header(propsIn: HeaderProps) {
  const props = { ...defaultHeaderProps, ...propsIn };
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle(!toggle);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("ITS WORK");
  }
  return (
    <>
      <div
        className={`flex items-center justify-between w-full fixed z-50 max-w-mobile`}
      >
        <Container padding="px-4 py-4" background={backgroundList.primary}>
          <div className="flex flex-col justify-start items-start">
            <div className="flex flex-row justify-between w-full">
              <div className="flex">
                <NavLink to="/">
                  <div className="text-lg font-normal font-display text-neutral">
                    Nu Rancaekek
                  </div>
                </NavLink>
              </div>
              <div className="flex items-center justify-between gap-4">
                <NavLink
                  to="/search"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-600 font-medium" : "text-neutral"
                  }
                >
                  <IoSearchOutline
                    className="h-5 w-5 text-neutral"
                    onClick={handleToggle}
                  />
                </NavLink>
                <IoOptions
                  className="h-5 w-5 text-neutral"
                  onClick={handleToggle}
                />
              </div>
            </div>
            <div className={`py-4 ${toggle ? "flex" : "hidden"}`}>
              <ul className="flex flex-col gap-4">
                <li>
                  <NavLink
                    to="/warta"
                    className={({ isActive }) =>
                      isActive ? "text-yellow-600 font-medium" : "text-neutral"
                    }
                  >
                    <span className="text-sm" onClick={handleToggle}>
                      Warta
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/tokoh"
                    className={({ isActive }) =>
                      isActive ? "text-yellow-600 font-medium" : "text-neutral"
                    }
                  >
                    <span className="text-sm">Tokoh</span>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className={`py-2 w-full ${toggle ? "flex" : "hidden"}`}>
              <form
                className="w-full flex items-center justify-between gap-2"
                onSubmit={handleSubmit}
              >
                <div className="w-10/12">
                  <input
                    type="text"
                    className="form-control w-full block px-3 py-1.5 text-base  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  />
                </div>
                <div className="w-2/12 h-full">
                  <button className="flex rounded-md bg-dark items-center h-full w-full justify-center">
                    <IoSearch className="text-neutral text-center" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export { Header };
