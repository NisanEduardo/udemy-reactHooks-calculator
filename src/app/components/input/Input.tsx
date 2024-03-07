type InputProps = {
  type: string;
  value: string | number;
};

export const Input = ({ type, value }: InputProps) => {
  return (
    <input
      type={type}
      value={value}
      className="rounded h-[100%] text-black text-right p-4"
    />
  );
};
