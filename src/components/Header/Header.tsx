import { backgroundList, Container } from "../Container";
import { Theme } from "../Theme";
import { NavLink } from "react-router-dom";
import { IoOptions, IoSearchOutline } from "react-icons/io5";
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
  return (
    <>
      <div
        className={`flex items-center justify-between w-full fixed z-50 max-w-mobile`}
      >
        <Container padding="px-4 py-4" background={backgroundList.dark}>
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
                    <span className="text-sm" onClick={handleToggle}>
                      Tokoh
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className={`py-2 w-full ${toggle ? "flex" : "hidden"}`}>
              <input type="text" className="w-full" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export { Header };
