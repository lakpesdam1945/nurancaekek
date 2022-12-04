import {
  IoAperture,
  IoBag,
  IoHome,
  IoPersonCircle,
  IoSearchOutline,
} from "react-icons/io5";
import { backgroundList, Container } from "../Container";
import { NavLink } from "react-router-dom";
type Props = {};

function BottomNavigation(props: Props) {
  return (
    <>
      <div className="flex bottom-0 max-w-mobile bg-dark fixed z-50 w-full">
        <Container padding="p-4" background={backgroundList.dark}>
          <ul className="flex gap-4 items-center justify-between">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-yellow-600 font-medium" : "text-neutral"
                }
              >
                <IoHome className="h-5 w-5" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  isActive ? "text-yellow-600 font-medium" : "text-neutral"
                }
              >
                <IoSearchOutline className="h-5 w-5" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="explore"
                className={({ isActive }) =>
                  isActive ? "text-yellow-600 font-medium" : "text-neutral"
                }
              >
                <IoAperture className="h-5 w-5" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? "text-yellow-600 font-medium" : "text-neutral"
                }
              >
                <IoBag className="h-5 w-5" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive ? "text-yellow-600 font-medium" : "text-neutral"
                }
              >
                <IoPersonCircle className="h-5 w-5" />
              </NavLink>
            </li>
          </ul>
        </Container>
      </div>
    </>
  );
}

export default BottomNavigation;
