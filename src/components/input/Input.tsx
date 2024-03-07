type InputProps = {
  type: string;
};

export const Input = ({ type }: InputProps) => {
  return (
    <input type={type} className="rounded h-[100%] text-black text-right p-4" />
  );
};
