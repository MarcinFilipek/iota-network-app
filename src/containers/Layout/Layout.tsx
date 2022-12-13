import { Link, Outlet } from "react-router-dom";
import { Box } from "../../components/Box";

export const Layout = () => (
  <div className="flex flex-row bg-stone-200 gap-4">
    <div className="w-96">
      <Box p={4}>
        <Link to="/">Home</Link>
        <Link to="/create-wallet">Create wallet</Link>
      </Box>
    </div>
    <Outlet />
  </div>
);
