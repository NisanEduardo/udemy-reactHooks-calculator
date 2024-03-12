"use client";

import React, { Dispatch, useState } from "react";
import { Button } from "./button/Button";
import { Input } from "./input/Input";

import { useCalculator } from "../classes/CalculadoraService";

const rows = {
  firstRow: ["7", "8", "9", "/"],
  secondRow: ["4", "5", "6", "*"],
  thirdRow: ["1", "2", "3", "-"],
  fourthRow: ["0", ".", "=", "+"],
};

export const Calculator = () => {
  const { numberConcat, calcular } = useCalculator();

  const [txtNumbers, setTxtNumbers] = useState("0");
  const [number1, setNumber1] = useState<string | null>("0");
  const [number2, setNumber2] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);

  const possiblesOperations = ["+", "-", "*", "/"];

  function handleOperation(op: string) {
    if (operation === null) {
      setOperation(op);
      return;
    }

    if (number2 !== null) {
      const resultado = calcular(number1, number2, operation);
      setOperation(op);
      setNumber1(resultado.toString());
      setNumber2(null);
      setTxtNumbers(resultado.toString());
    }
  }

  function handleButton(currBtnValue: string) {
    let result;

    if (possiblesOperations.includes(currBtnValue as string)) {
      handleOperation(currBtnValue);
    } else {
      if (operation === null) {
        result = numberConcat(number1, currBtnValue);
        setNumber1(result);
      } else {
        result = numberConcat(number2, currBtnValue);
        setNumber2(result);
      }

      setTxtNumbers(result);
    }
  }

  return (
    <div className="container w-[400px] bg-blue-500 p-5 rounded">
      <div className="flex justify-between gap-2 my-2">
        <Button content="C" isNumber={false} isEqualSimbol={false} />
        <form>
          <Input type="text" value={txtNumbers} />
        </form>
      </div>
      {Object.entries(rows).map((row) => {
        return (
          <div key={row[0]} className="flex justify-between gap-2 my-2">
            {row[1].map((item) => (
              <Button
                key={item}
                content={item}
                isNumber={!isNaN(+item)}
                isEqualSimbol={item == "="}
                onclick={() => handleButton(item)}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};
