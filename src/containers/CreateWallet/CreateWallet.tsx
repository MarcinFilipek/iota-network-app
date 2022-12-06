import { Outlet, Route, Routes } from "react-router-dom";
import { Dialog } from "../Dialog";

export const CreateWallet = () => (
  <Dialog>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <p>Create wallet</p>
            <Outlet />
          </>
        }
      >
        <Route index element={<p>Step 1</p>} />
        <Route path="/2" element={<p>Step 2</p>} />
      </Route>
    </Routes>
  </Dialog>
);
