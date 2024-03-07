import { Button } from "./button/Button";
import { Input } from "./input/Input";

const rows = {
  firstRow: [7, 8, 9, "/"],
  secondRow: [4, 5, 6, "*"],
  thirdRow: [1, 2, 3, "-"],
  fourthRow: [0, ".", "=", "+"],
};

export const Calculator = () => {
  return (
    <div className="container w-[400px] bg-blue-500 p-5 rounded">
      <div className="flex justify-between gap-2 my-2">
        <Button content="C" isNumber={false} isEqualSimbol={false} />
        <form>
          <Input type="text" />
        </form>
      </div>
      {Object.entries(rows).map((row) => {
        return (
          <div key={row} className="flex justify-between gap-2 my-2">
            {row[1].map((item) => (
              <Button
                content={item}
                isNumber={!isNaN(+item)}
                isEqualSimbol={item == "="}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};
