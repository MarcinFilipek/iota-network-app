import { useNodeInfo } from "./services";

function App() {
  const { isLoading, data } = useNodeInfo();

  return (
    <div>
      <p className="font-bold">Iota network app</p>
      {isLoading && <p>Loading...</p>}
      {data && (
        <>
          <p>Name: {data.name}</p>
          <p>Varsion: {data.version}</p>
        </>
      )}
    </div>
  );
}

export default App;
