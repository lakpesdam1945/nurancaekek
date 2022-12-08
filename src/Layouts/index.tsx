import { useState } from "react";
import { Theme } from "./Theme";

interface Props {
  children?: React.ReactNode;
  theme?: Theme;
}

const defaultProps = {
  children: <div>Layouts Components</div>,
  theme: Theme.neutral,
};

export default function Layout(propsIn: Props) {
  const props = { ...defaultProps, ...propsIn };
  return (
    <>
      <div
        className={`w-full min-h-screen max-w-tablet mx-auto bg-light dark:bg-dark text-light dark:text-dark`}
      >
        {props.children}
      </div>
    </>
  );
}
