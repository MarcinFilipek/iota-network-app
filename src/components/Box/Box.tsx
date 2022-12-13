type Props = {
  children: React.ReactNode;
  p?: number;
};

export const Box = ({ children, p = 0 }: Props) => {
  return (
    <div
      className={`bg-stone-200 rounded-3xl shadow-[20px_20px_60px_0_rgba(190,190,190,1),-20px_-20px_60px_0_rgba(255,255,255,1)] flex flex-col w-full p-${p} h-full`}
    >
      {children}
    </div>
  );
};
