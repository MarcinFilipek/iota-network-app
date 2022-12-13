import { Route, Routes } from "react-router-dom";
import { CreateWallet, Layout } from "./containers";

function App() {
  return (
    <div className="h-screen w-screen bg-stone-200 px-4 py-8">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<p>Home</p>} />
          <Route path="create-wallet/*" element={<CreateWallet />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
