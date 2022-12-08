interface ContainerProps {
  padding?: string;
  margin?: string;
  children?: React.ReactNode;
  fixed?: boolean;
  borderBottom?: boolean;
  borderTop?: boolean;
  position?: "top" | "bottom";
}

const defaultContainerProps = {
  children: <div>Container</div>,
  padding: null,
  margin: null,
  fixed: false,
  borderBottom: false,
  borderTop: false,
  position: null,
};

function Container(propsIn: ContainerProps) {
  const props = { ...defaultContainerProps, ...propsIn };
  return (
    <>
      <div
        className={`mx-auto w-full max-w-tablet h-auto ${props.padding} ${
          props.margin
        } ${props.fixed ? "z-50 fixed" : null} ${
          props.borderTop ? "border-t-[1px] border-dark dark:border-light" : ""
        } ${
          props.borderBottom
            ? "border-b-[1px] border-dark dark:border-light"
            : ""
        } ${
          props.position ? props.position + "-0" : ""
        } bg-light text-dark dark:bg-dark dark:text-light`}
      >
        {props.children}
      </div>
    </>
  );
}

export default Container;
