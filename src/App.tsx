import { Route, Routes } from "react-router-dom";
import { Layout } from "./containers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<p>Home</p>} />
      </Route>
    </Routes>
  );
}

export default App;
