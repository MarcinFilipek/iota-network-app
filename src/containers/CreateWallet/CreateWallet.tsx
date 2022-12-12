import { Outlet, Route, Routes } from "react-router-dom";
import { Dialog } from "../Dialog";
import { Step1 } from "./Steps";

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
        <Route index element={<Step1 />} />
        <Route path="/2" element={<p>Step 2</p>} />
      </Route>
    </Routes>
  </Dialog>
);
