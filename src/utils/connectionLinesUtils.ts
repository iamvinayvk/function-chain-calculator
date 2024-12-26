import { Node } from "../types";

export const getPath = (fromNode: Node, toNode: Node, type: string): string => {
  const isInputValueNode = fromNode.label==="Input";
  const isOutputValueNode = toNode.label==="Output";
    const fromX = fromNode.x +( isInputValueNode ? 118:208);
    const fromY = fromNode.y +  (isInputValueNode?29:227);
    const toX = toNode.x +  (isOutputValueNode ? 1250:42);
    const toY = toNode.y +  (isOutputValueNode ? 29:227);

    switch (type) {
      case "straight":
        return `M ${fromX} ${fromY} L ${toX} ${toY}`;
      case "parabolic": {
        const controlYParabolic = Math.min(fromY, toY) - 100;
        return `M ${fromX} ${fromY} Q ${
          (fromX + toX) / 2
        } ${controlYParabolic} ${toX} ${toY}`;
      }
      case "bezier": {
        const controlXBezier = (fromX + toX) / 2;
        const controlYBezier = Math.min(fromY, toY) - 50;
        return `M ${fromX} ${fromY} Q ${controlXBezier} ${controlYBezier} ${toX} ${toY}`;
      }
      case "half-circular": {
        const radius = Math.sqrt((toX - fromX) ** 2 + (toY - fromY) ** 2) / 2;
        return `M ${fromX} ${fromY} A ${radius} ${radius} 0 0 0 ${toX} ${toY}`;
      }
      default:
        return "";
    }
  };