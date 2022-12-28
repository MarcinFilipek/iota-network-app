import { Bip39 } from "@iota/crypto.js";
import { useEffect, useState } from "react";

export const Step2 = () => {
  const [mnemonic, setMnemonic] = useState<string[] | null>(null);

  useEffect(() => {
    const randomMnemonic = Bip39.randomMnemonic();
    setMnemonic(randomMnemonic.split(" "));
  }, []);

  return (
    <div>{mnemonic && mnemonic.map((word) => <p key={word}>{word}</p>)}</div>
  );
};
