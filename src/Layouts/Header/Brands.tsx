import { NavLink } from "react-router-dom";

type Props = {
  brands?: string;
};

const defaultProps = {
  brands: "Universe",
};
function Brands(propsIn: Props) {
  const props = { ...defaultProps, ...propsIn };
  return (
    <div className="font-display text-base">
      <NavLink to="/">{props.brands}</NavLink>
    </div>
  );
}

export default Brands;
