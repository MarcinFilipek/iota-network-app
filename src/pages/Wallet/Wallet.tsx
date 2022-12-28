import { Link } from "react-router-dom";
import { Box } from "../../stories";

export const Wallet = () => (
  <Box>
    <div className="p-4 h-full">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <p className="text-xl">You don't have a wallet yet.</p>
        <Link to="add-wallet">
          <p className="text-2xl text-[#0085FF]">Add</p>
        </Link>
      </div>
    </div>
  </Box>
);
