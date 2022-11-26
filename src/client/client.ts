import { Client, initLogger } from "@iota/client";

initLogger();

export const client = new Client({
  nodes: ["https://api.testnet.shimmer.network"],
  localPow: true,
});
