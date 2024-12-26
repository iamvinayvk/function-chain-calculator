import React, { useState } from "react";
import doubleEllipsis from "../../assets/double-ellipsis.svg";
import ConnectionDot from "../ConnectionDot/ConnectionDot";

type FunctionCardProps = {
  functionNumber: number;
  equation: string;
  nextFunction: number | null;
  onEquationChange: (id: string, value: string) => void;
};

const FunctionCard: React.FC<FunctionCardProps> = ({
  functionNumber,
  equation,
  nextFunction,
  onEquationChange,
}) => {
  const [currentEquation, setCurrentEquation] = useState(equation);

  return (
    <div
      id={functionNumber.toString()}
      className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 max-w-72 ${
        functionNumber > 3 ? "col-span-3" : "col-span-2"
      }`}
    >
      <div className="flex items-center gap-2 text-gray-400 text-sm mb-4 font-semibold">
        <img
          src={doubleEllipsis}
          alt="Double Ellipsis"
          className="w-4 h-3 mt-[2px]"
        />
        <p className="leading-4">Function: {functionNumber}</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm text-gray-600 mb-2 font-medium">
          Equation
        </label>
        <input
          type="text"
          value={currentEquation}
          onChange={(e) => {
            setCurrentEquation(e.target.value);
            onEquationChange(functionNumber.toString(), e.target.value);
          }}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter equation"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm text-gray-600 mb-2 font-medium">
          Next function
        </label>
        <select
          disabled
          value={nextFunction || ""}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-100 cursor-not-allowed"
        >
          <option value={nextFunction || ""}>
            {nextFunction ? `Function: ${nextFunction}` : "-"}
          </option>
        </select>
      </div>
      <div className="w-full flex justify-between px-2">
        <div className="flex items-center gap-4">
          <ConnectionDot />
          <span className="text-xs text-gray-400">input</span>
        </div>
        <div className="flex items-center flex-row-reverse gap-4">
          <ConnectionDot />
          <span className="text-xs text-gray-400">output</span>
        </div>
      </div>
    </div>
  );
};

export default FunctionCard;
