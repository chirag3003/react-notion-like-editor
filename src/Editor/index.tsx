import {useEffect, useState} from "react";
import { Value } from "../types";
import EditorInput from "./EditorInput";

const Editor = () => {
  const [values, setValues] = useState<Value[]>([
    {
      valueType: "h1",
      value: "Heading",
    },
  ]);
  const [focusedInput,setFocusedInput] = useState<number>(0);

  function onEnter(index: number) {
    const newValues = [...values];
    newValues.splice(index + 1, 0, {
      valueType: "p",
      value: "",
    });
    setValues(newValues);
    setFocusedInput(index+1)
  }
  function onDelete(index:number){
    const newValues = [...values];
    newValues.splice(index,1)
    setValues(newValues);
    setFocusedInput(Math.max(0,index-1))
  }
  function changeValue(index: number, value: string) {
    values[index].value = value;
  }

  useEffect(() => {
    const input = document.querySelector(`.input-container:nth-child(${focusedInput + 1}) .input`) as HTMLDivElement
    // input?.click()
    input?.focus()
    const range = document.createRange();
    const selection = window.getSelection();
    range.setStart(input, input.childNodes.length);
    range.collapse(true);
    selection?.removeAllRanges();
    selection?.addRange(range);
  }, [focusedInput]);

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
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default Editor;
