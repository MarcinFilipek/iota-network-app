import { client } from "./client/client";

const getNodeInfo = async () => {
  const nodeInfo = await client.getInfo();
  return nodeInfo;
};

function App() {
  getNodeInfo().then((data) => console.log(data));
  return (
    <div>
      <span>Iota network app</span>
    </div>
  );
}

export default App;
