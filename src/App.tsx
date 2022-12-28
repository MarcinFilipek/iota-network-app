import "./icons";
import { Route, Routes } from "react-router-dom";
import { CreateWallet, Layout } from "./containers";
import { Home, Wallet } from "./pages";

function App() {
  return (
    <div className="h-screen w-screen bg-stone-200">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="wallet/add-wallet/*" element={<CreateWallet />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
