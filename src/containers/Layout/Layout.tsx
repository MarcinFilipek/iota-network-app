import { Link, Outlet } from "react-router-dom";
import { Box } from "../../components/Box";

export const Layout = () => (
  <div className="flex flex-row bg-[#E6E7EE] px-10 py-8 h-full w-full gap-4">
    <div className="w-96 h-full">
      <Box>
        <div className=" flex flex-col w-full h-full p-4">
          <Link to="/" className="text-2xl">
            Home
          </Link>
          <Link to="/create-wallet" className="text-2xl">
            Create wallet
          </Link>
        </div>
      </Box>
    </div>
    <Outlet />
  </div>
);
