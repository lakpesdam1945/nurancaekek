import { IoChevronForward } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Theme } from "../components/Theme";
type SeparatorsContentProps = {
  title?: string;
  ButtonIconLink?: string;
};

const defaultSepatorsContentProps = {
  title: "NU Rancaekek",
  theme: Theme.primary,
  ButtonIconLink: "/",
};

const SepartorsContent = (propsIn: SeparatorsContentProps) => {
  const props = { ...defaultSepatorsContentProps, ...propsIn };
  return (
    <>
      <div
        className={`flex justify-between items-center w-full my-4 rounded-md p-3 ${props.theme}`}
      >
        <div className="text-neutral text-base">{props.title}</div>
        <div className="text-neutral text-base">
          <NavLink to={props.ButtonIconLink}>
            <IoChevronForward className="h-5 w-5 text-neutral" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SepartorsContent;
