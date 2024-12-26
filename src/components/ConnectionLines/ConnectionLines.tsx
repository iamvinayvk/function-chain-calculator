import { Edge, Node } from "../../types";
import { getPath } from "../../utils";

type ConnectionLineProps = {
  nodes: Node[];
  edges: Edge[];
};

const ConnectionLines = (props: ConnectionLineProps) => {
  const { nodes, edges } = props;

  return (
    <svg className="pointer-events-none absolute top-0 left-0 w-full h-full z-10">
      {edges.map((edge, index) => {
        const fromNode = nodes.find((node) => node.id === edge.from);
        const toNode = nodes.find((node) => node.id === edge.to);
        if (fromNode && toNode) {
          return (
            <path
              key={index}
              d={getPath(fromNode, toNode, edge.type)}
              stroke="#0066FF4D"
              strokeWidth="4"
              fill="none"
            />
          );
        }
        return null;
      })}
    </svg>
  );
};

export default ConnectionLines;
