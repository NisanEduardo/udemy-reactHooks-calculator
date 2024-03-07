type ButtonProps = {
  content: string | number;
  isNumber: boolean;
  isEqualSimbol: boolean;
  onclick?: () => void;
};

export const Button = ({
  content,
  isNumber,
  isEqualSimbol,
  onclick,
}: ButtonProps) => {
  return (
    <button
      onClick={onclick}
      className={`${isNumber ? "bg-slate-50" : "bg-yellow-600"} ${
        isEqualSimbol && "bg-green-700 text-white"
      } ${
        content == "C" && "bg-red-600 text-white"
      } flex flex-col items-center justify-center w-16 h-16 text-black rounded`}
    >
      {content}
    </button>
  );
};
