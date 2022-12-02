import { Route, Routes } from "react-router-dom";
import { CreateWallet, Layout } from "./containers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<p>Home</p>} />
        <Route path="create-wallet/*" element={<CreateWallet />} />
      </Route>
    </Routes>
  );
}

export default App;
