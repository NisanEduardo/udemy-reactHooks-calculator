export const useCalculator = () => {
  const calcular = (num1: string, num2: string, op: string) => {
    switch (op) {
      case "+":
        return parseFloat(num1) + parseFloat(num2);
      case "-":
        return parseFloat(num1) - parseFloat(num2);
      case "*":
        return parseFloat(num1) * parseFloat(num2);
      case "/":
        return parseFloat(num1) / parseFloat(num2);
      default:
        return "0";
    }
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
