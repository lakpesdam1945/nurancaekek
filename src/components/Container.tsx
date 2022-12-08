import { Theme } from "./Theme";

interface ContainerProps {
  padding?: string;
  margin?: string;
  children?: React.ReactNode;
  background?: Theme;
}

const defaultContainerProps = {
  children: <div>Container</div>,
  padding: null,
  margin: null,
};

function Container(propsIn: ContainerProps) {
  const props = { ...defaultContainerProps, ...propsIn };
  return (
    <>
      <div
        className={`mx-auto w-full max-w-tablet h-auto   ${props.padding} ${props.margin} bg-light text-dark dark:bg-dark dark:text-light`}
      >
        {props.children}
      </div>
    </>
  );
}

export { Container };
