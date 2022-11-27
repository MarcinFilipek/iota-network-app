import { useEffect, useState } from "react";
import { client } from "./client/client";
import { INodeInfo } from "@iota/iota.js";

const getNodeInfo = async () => {
  const info = await client.info();
  return info;
};

function App() {
  const [nodeInfo, setNodeInfo] = useState<INodeInfo | null>(null);
  useEffect(() => {
    getNodeInfo().then((info) => {
      setNodeInfo(info);
    });
  }, []);

  return (
    <div>
      <p>Iota network app</p>
      {!nodeInfo && <p>Loading...</p>}
      {nodeInfo && (
        <>
          <p>Name: {nodeInfo.name}</p>
          <p>Varsion: {nodeInfo.version}</p>
        </>
      )}
    </div>
  );
}

export default App;
