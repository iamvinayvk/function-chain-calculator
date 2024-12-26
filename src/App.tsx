import { useEffect, useMemo, useState } from "react";
import "./App.css";
import ConnectionLines from "./components/ConnectionLines/ConnectionLines";
import FunctionCard from "./components/FunctionCard/FunctionCard";
import ValueNode from "./components/ValueNode/ValueNode";
import { Edge, Node } from "./types";
import { calculateResult } from "./utils/common";

const functionCards = [
  {
    id: 1,
    name: "Function",
    prefixIcon: "default",
    nextFunction: 2,
    equation: "3x",
  },
  {
    id: 2,
    name: "Function 2",
    prefixIcon: "default",
    nextFunction: 4,
    equation: "x + 1",
  },
  {
    id: 3,
    name: "Function 3",
    prefixIcon: "default",
    nextFunction: null,
    equation: "x * 2",
  },
  {
    id: 4,
    name: "Function 4",
    prefixIcon: "default",
    nextFunction: 5,
    equation: "x / 2",
  },
  {
    id: 5,
    name: "Function 5",
    prefixIcon: "default",
    nextFunction: 3,
    equation: "x^2",
  },
];

const edges: Edge[] = [
  {
    from: "0",
    to: "1",
    type: "straight",
  },
  {
    from: "1",
    to: "2",
    type: "half-circular",
  },
  {
    from: "2",
    to: "4",
    type: "bezier",
  },
  {
    from: "4",
    to: "5",
    type: "parabolic",
  },
  {
    from: "5",
    to: "3",
    type: "bezier",
  },
  {
    from: "3",
    to: "6",
    type: "straight",
  },
];

const App = () => {
  const [nodes, setNodes] = useState<Node[]>([]);

  const drawEdges = () => {
    const currNodes = [];
    let cardElement = document.getElementById("0");
    currNodes.push({
      id: "0",
      label: "Input",
      x: cardElement ? cardElement.getBoundingClientRect().x : 0,
      y: cardElement ? cardElement.getBoundingClientRect().y : 0,
    });
    functionCards.forEach((card) => {
      cardElement = document.getElementById(card.id.toString());
      if (cardElement) {
        const rect = cardElement.getBoundingClientRect();
        currNodes.push({
          id: card.id.toString(),
          label: card.name,
          x: rect.x,
          y: rect.y,
          equation: card.equation,
        });
      }
    });
    cardElement = document.getElementById("0");
    currNodes.push({
      id: "6",
      label: "Output",
      x: cardElement ? cardElement.getBoundingClientRect().x : 0,
      y: cardElement ? cardElement.getBoundingClientRect().y : 0,
    });
    setNodes(currNodes);
  };

  useEffect(() => {
    drawEdges();
    window.addEventListener("resize", drawEdges);
    return () => {
      window.removeEventListener("resize", drawEdges);
    };
  }, []);

  const [inputValue, setInputValue] = useState(0);

  const handleInputNodeChange = (value: string) => {
    setInputValue(Number(value));
  };

  const onEquationChange = (id: string, value: string) => {
    const updatedNodes = [...nodes];
    const nodeIndex = updatedNodes.findIndex((node) => node.id === id);
    if (nodeIndex >= 0) {
      updatedNodes[nodeIndex].equation = value;
    }
    setNodes(updatedNodes);
  };

  const result = useMemo(() => {
    try {
      return calculateResult(edges, nodes, inputValue);
    } catch (_) {
      return 0;
    }
  }, [nodes, inputValue]);

  return (
    <>
      <ConnectionLines nodes={nodes} edges={edges} />
      <ValueNode
        key={0}
        node="0"
        type="input"
        value={inputValue}
        handleChange={handleInputNodeChange}
      />
      <div className="h-full w-[960px] mx-auto flex flex-wrap gap-4 items-center justify-center">
        {functionCards.map(({ id, equation, nextFunction }) => {
          return (
            <FunctionCard
              key={id}
              functionNumber={id}
              equation={equation}
              nextFunction={nextFunction}
              onEquationChange={onEquationChange}
            />
          );
        })}
      </div>
      <ValueNode key={6} node="6" type="output" value={result} />
    </>
  );
};

export default App;
