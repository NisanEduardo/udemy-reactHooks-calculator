export const useCalculator = () => {
  const calcular = (num1: number, num2: number, op: string) => {
    return eval(`${num1}${op}${num2}`);
  };

  const numberConcat = (
    currNumber: string | null,
    concatNumber: null | string
  ) => {
    if (currNumber === "0" || currNumber === null) {
      currNumber = "";
    }

    if (concatNumber === "." && currNumber === "0") {
      return "0.";
    }

    if (concatNumber === "." && currNumber.indexOf(".") > -1) {
      return currNumber;
    }

    return currNumber + concatNumber;
  };

  return {
    calcular,
    numberConcat,
  };
};
