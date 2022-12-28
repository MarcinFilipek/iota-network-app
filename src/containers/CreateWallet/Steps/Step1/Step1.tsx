import { Checkbox } from "../../../../stories";

export const Step1 = () => (
  <div className="p-4 flex flex-col gap-4">
    <p className="text-base">
      In the next step we will show you 24 words,, your recovery phrase, with
      which you can restore your wallet.
    </p>
    <div className="flex flex-row gap-4">
      <Checkbox />
      <p className="text-sm">
        If I lose my recovery phrase, there is no way to recovery my wallet.
      </p>
    </div>
  </div>
);
