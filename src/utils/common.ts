import { Edge, Node } from "../types";

export const calculateResult = (edges:Edge[],nodes:Node[],initialInput:number) => {
    
   let result:number = initialInput;
   let currentNode = nodes.find(node => node.label === "Input");
   const visitedNode = Array(nodes.length).fill(0);
   while(currentNode?.label!=="Output"&&currentNode?.id&&visitedNode[Number(currentNode.id)]==0){
         visitedNode[Number(currentNode.id)] = 1;
         const edgesFromCurrentNode = edges.filter(edge => edge.from === currentNode?.id);
         edgesFromCurrentNode.forEach(edge =>{
              const toNode = nodes.find(node => node.id === edge.to);
              if(toNode){
                if(toNode.label !== "Input" && toNode.label !== "Output"){
                     let equation = toNode.equation||"";
                     const value = parseFloat(result.toString());
                     equation = equation.replace(/(\d)([a-zA-Z])/g, "$1 * $2");
                     equation = equation.replace(/\^/g, "**");
                     const evaluatedValue = eval(equation.replace("x", value.toString()));
                     result = evaluatedValue;
                }
                currentNode = toNode;
              }
         });
   }


    return result;
};