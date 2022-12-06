import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
};

export const Dialog = ({ children }: Props) => {
  const overlayRootEl = document.getElementById("dialog_root");

  return overlayRootEl
    ? createPortal(
        <div className="w-screen h-screen top-0 left-0 absolute backdrop-blur-lg flex flex-col justify-center items-center">
          <div className="border-2 border-cyan-800 w-full max-w-sm">
            {children}
          </div>
        </div>,
        overlayRootEl
      )
    : null;
};
