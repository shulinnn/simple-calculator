import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [formula, setFormula] = useState("");
  const [result, setResult] = useState("");

  const btnValues = [
    ["C", ".", "%", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, "="],
  ];

  const handleClick = (btn) => {
    if (btn === "=") {
      if (validate(formula)) setResult(eval(formula));
    }
    if (btn === "C") {
      setFormula("");
      setResult("");
    }
    if (btn != "C" && btn != "=") setFormula(formula + btn);
  };

  const validate = (formula) => {
    try {
      var ret = eval(formula);
      if (ret && ret != "NaN") {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div id="upperSide" className="w-full h-1/3 relative">
        <div className="absolute bottom-32 right-12 text-2xl">{formula}</div>
        <div className="absolute bottom-16 right-12 text-5xl">{result}</div>
      </div>
      <div
        id="controls"
        className="w-full flex-1 rounded-xl bg-[#E1E1E1] h-auto p-8"
      >
        <div className="grid grid-cols-12 gap-y-4 ">
          {btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                isLong={btn === "=" ? true : false}
                onClick={() => {
                  handleClick(btn);
                }}
              >
                {btn}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
