import {
  IoAperture,
  IoBag,
  IoHome,
  IoPersonCircle,
  IoSearchSharp,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Theme } from "../Theme";

type Props = {
  theme?: Theme;
};

const defaultProps = {
  theme: Theme.neutral,
};

function Footer(propsIn: Props) {
  const props = { ...defaultProps, ...propsIn };
  return (
    <div className="flex items-center justify-between max-w-tablet w-full">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-dark dark:text-light " : "text-slate-500"
        }
      >
        <IoHome className="h-5 w-5" />
      </NavLink>
      <NavLink
        to="/explore"
        className={({ isActive }) =>
          isActive ? "text-dark dark:text-light " : "text-slate-500"
        }
      >
        <IoSearchSharp className="h-5 w-5" />
      </NavLink>
      <NavLink
        to="/gallery"
        className={({ isActive }) =>
          isActive ? "text-dark dark:text-light " : "text-slate-500"
        }
      >
        <IoAperture className="h-5 w-5" />
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive }) =>
          isActive ? "text-dark dark:text-light " : "text-slate-500"
        }
      >
        <IoBag className="h-5 w-5" />
      </NavLink>
      <NavLink
        to="/users"
        className={({ isActive }) =>
          isActive ? "text-dark dark:text-light " : "text-slate-500"
        }
      >
        <IoPersonCircle className="h-5 w-5" />
      </NavLink>
    </div>
  );
}

export default Footer;
