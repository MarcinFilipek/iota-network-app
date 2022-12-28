import { createPortal } from "react-dom";
import { Box } from "../../stories";

type Props = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
};

export const Dialog = ({ children, header, footer }: Props) => {
  const overlayRootEl = document.getElementById("dialog_root");

  return overlayRootEl
    ? createPortal(
        <div className="w-screen h-screen top-0 left-0 absolute bg-[#E6E7EE] flex flex-col justify-center items-center">
          <div className="w-[400px] max-h-[600px]">
            <Box>
              <div className="h-full flex-col flex">
                <div className="flex-none">{header && header}</div>
                <div className="flex-auto overflow-y-scroll">{children}</div>
                <div className="flex-none">{footer && footer}</div>
              </div>
            </Box>
          </div>
        </div>,
        overlayRootEl
      )
    : null;
};
