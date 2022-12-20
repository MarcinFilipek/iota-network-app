import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
};

export const Dialog = ({ children }: Props) => {
  const overlayRootEl = document.getElementById("dialog_root");

  return overlayRootEl
    ? createPortal(
        <div className="w-screen h-screen top-0 left-0 absolute bg-[#E6E7EE] flex flex-col justify-center items-center">
          {children}
        </div>,
        overlayRootEl
      )
    : null;
};
