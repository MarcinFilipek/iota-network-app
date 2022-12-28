import { NavLink } from "react-router-dom";
import { COLOR_ACTIVE_LINK, COLOR_LINK } from "./constants";

type Props = {
  to: string;
  children: React.ReactNode;
};
export const Link = ({ to, children }: Props) => (
  <NavLink
    to={to}
    className="text-2xl"
    style={({ isActive }: { isActive: boolean }) => ({
      color: isActive ? COLOR_ACTIVE_LINK : COLOR_LINK,
    })}
  >
    {children}
  </NavLink>
);
