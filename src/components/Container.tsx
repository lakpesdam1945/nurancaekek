enum backgroundList {
  "primary" = "bg-primary",
  "dark" = "bg-dark",
  "neutral" = "bg-neutral",
}

interface ContainerProps {
  padding?: string;
  background?: backgroundList;
  children?: React.ReactNode;
}

const defaultContainerProps = {
  children: <div>Container</div>,
  padding: "",
};

function Container(propsIn: ContainerProps) {
  const props = { ...defaultContainerProps, ...propsIn };

  return (
    <>
      <div
        className={`mx-auto  w-full max-w-mobile ${props.padding} ${
          props.background ?? ""
        }`}
      >
        {props.children}
      </div>
    </>
  );
}

export { Container, backgroundList };
