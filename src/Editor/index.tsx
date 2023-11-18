import { useState } from "react";

const valTypes = [
  "heading1",
  "heading2",
  "heading3",
  "paragraph",
  "checkbox",
] as const;

interface Value {
  valueType: (typeof valTypes)[number];
  checked?: boolean;
  value: string;
}

const Editor = () => {
  const [values] = useState<Value[]>([
    {
      valueType: "heading1",
      value: "Heading",
    },
    {
      valueType: "checkbox",
      value: "Hello World",
    },
  ]);
  return (
    <div className={"max-w-2xl w-full p-5 rounded text-lg flex flex-col gap-5"}>
      {values.map(({ value, valueType }, index) => {
        if (valueType === "checkbox")
          return (
            <div className="w-full flex gap-4">
              <input type="checkbox" />
              <div
                className="w-full"
                contentEditable={true}
              >
                {value}
              </div>
            </div>
          );
        return (
          <div
            key={index}
            className="w-full text-5xl font-bold"
            contentEditable={true}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
};

export default Editor;
