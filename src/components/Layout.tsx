import { Theme } from "./Theme";

type LayputsProps = {
  children: any;
  theme?: Theme;
};

const defaultLayoutProps = {
  theme: Theme.neutral,
};

function Layout(propsIn: LayputsProps) {
  const props = { ...defaultLayoutProps, ...propsIn };
  return (
    <>
      <div className="min-h-screen w-full mx-auto flex bg-slate-300">
        {props.children}
      </div>
    </>
  );
}

export default Layout;
