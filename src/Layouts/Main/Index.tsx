type Props = {
  children?: React.ReactNode;
};

const defaultProps = {
  children: <div>Main</div>,
};

function Main(propsIn: Props) {
  const props = { ...defaultProps, ...propsIn };
  return (
    <div
      className={`px-4 py-20 w-full min-h-screen dark:bg-dark bg-light text-dark dark:text-light`}
    >
      {props.children}
    </div>
  );
}

export default Main;
