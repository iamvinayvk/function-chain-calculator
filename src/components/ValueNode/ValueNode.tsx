import ConnectionDot from "../ConnectionDot/ConnectionDot";

type ValueNodeProps = {
  node: string;
  type: "input" | "output";
  value: number;
  handleChange?: (value: string) => void;
};

const ValueNode = (props: ValueNodeProps) => {
  const { node, type, value, handleChange } = props;
  const isOutputNode = type === "output";

  return (
    <div
      id={node}
      className={`absolute z-0 top-[240px] ${
        isOutputNode ? "left-[1220px]" : ""
      } bg-white rounded-xl p-0 shadow-sm flex items-center gap-4 w-36 divide-x-2 divide-inherit border-4 ${
        type === "output"
          ? "border-green-400 flex-row-reverse divide-x-reverse"
          : "border-orange-400"
      }`}
    >
      <p
        className={`font-bold text-md ${
          type === "output" ? "text-green-400" : "text-orange-400"
        } absolute top-[-40px]`}
      >
        {type.toUpperCase()}
      </p>
      <div className="flex items-center">
        <input
          readOnly={isOutputNode}
          className="w-full outline-none"
          type="number"
          value={value}
          onChange={(e) => {
            handleChange?.(e.target.value);
          }}
        />
      </div>
      <div className="p-4">
        <ConnectionDot />
      </div>
    </div>
  );
};

export default ValueNode;
