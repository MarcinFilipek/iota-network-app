type Props = {
  children: React.ReactNode;
};

export const Box = ({ children }: Props) => {
  return (
    <div
      className={`bg-[#E6E7EE] rounded-3xl shadow-[20px_20px_36px_0_rgba(166,166,171,1),-20px_-20px_36px_0_rgba(255,255,255,1)] flex flex-col w-full h-full`}
    >
      {children}
    </div>
  );
};
