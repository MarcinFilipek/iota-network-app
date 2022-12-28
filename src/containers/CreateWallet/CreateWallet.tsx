import { Outlet, Route, Routes } from "react-router-dom";
import { Dialog } from "../Dialog";
import { Step1, Step2 } from "./Steps";

export const CreateWallet = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Dialog
          header={
            <div className="w-full text-center my-6">
              <p className="text-2xl text-[#0085FF]">Create a new wallet</p>
            </div>
          }
          footer={
            <div className="w-full text-center my-6">
              <p className="text-2xl">Buttons</p>
            </div>
          }
        >
          <Outlet />
        </Dialog>
      }
    >
      <Route index element={<Step1 />} />
      <Route path="/2" element={<Step2 />} />
    </Route>
  </Routes>
);
