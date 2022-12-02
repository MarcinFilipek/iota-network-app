import { Link, Outlet } from "react-router-dom";

export const Layout = () => (
  <div className="flex flex-col p-2 bg-slate-500">
    <div className="flex flex-row gap-4">
      <Link to="/">Home</Link>
      <Link to="/create-wallet">Create wallet</Link>
    </div>
    <Outlet />
  </div>
);
