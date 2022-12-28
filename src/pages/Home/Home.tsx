import { Box, Loader } from "../../stories";

export const Home = () => (
  <Box>
    <div className="flex flex-col justify-center items-center w-full h-full p-4">
      <Loader />
      <p>Pobieranie satusu sieci...</p>
    </div>
  </Box>
);
