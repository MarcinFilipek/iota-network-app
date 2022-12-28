import { Outlet } from "react-router-dom";
import { Box } from "../../stories/Box";
import { Link } from "../Link";

export const Layout = () => (
  <div className="flex flex-row bg-[#E6E7EE] px-10 py-8 h-full w-full gap-8">
    <div className="w-96 h-full">
      <Box>
        <div className=" flex flex-col w-full h-full p-5">
          <Link to="/">Dashboard</Link>
          <Link to="/wallet">Wallet</Link>
        </div>
      </Box>
    </div>
    <div className="flex flex-col w-full gap-8">
      <Outlet />
    </div>
  </div>
);
