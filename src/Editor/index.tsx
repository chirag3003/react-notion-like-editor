import { useState } from "react";
import { Value } from "../types";
import EditorInput from "./EditorInput";

const Editor = () => {
  const [values, setValues] = useState<Value[]>([
    {
      valueType: "h1",
      value: "Heading",
    },
  ]);

  function onEnter(index: number) {
    const newValues = [...values];
    newValues.splice(index + 1, 0, {
      valueType: "p",
      value: "",
    });
    setValues(newValues);
  }
  function changeValue(index: number, value: string) {
    values[index].value = value;
  }
  console.log(values);
  return (
    <div
      className={
        "max-w-2xl w-full p-5 rounded text-lg flex flex-col gap-5 relative"
      }
    >
      {values.map((value, index) => {
        return (
          <EditorInput
            key={index}
            value={value}
            onEnter={onEnter}
            index={index}
            changeValue={changeValue}
          />
        );
      })}
    </div>
  );
};

export default Editor;
