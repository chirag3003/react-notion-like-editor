import { Value } from "../types";

interface EditorInputProps {
  value: Value;
  index: number;
  onEnter: (index: number) => void;
  changeValue: (index: number, value: string) => void;
}

function EditorInput({ value, onEnter, index, changeValue }: EditorInputProps) {
  return (
    <div className="w-full border border-gray-100 p-2 shadow input-container">
      <div
        onBeforeInput={(e) => {
          const evt = e.nativeEvent as KeyboardEvent;
          console.log(e);
          if (evt.key === "Enter") {
            if (!evt.shiftKey) {
              evt.preventDefault();
              onEnter(index);
            }
          }
        }}
        onInput={(e) => {
          const text = e.currentTarget.textContent;
          console.log(text)
          changeValue(index, text || "");
        }}
        className="w-full text-5xl font-bold outline-none input "
        contentEditable={true}
        dangerouslySetInnerHTML={{ __html: value.value }}
      >
        {/* {value.value} */}
      </div>
    </div>
  );
}

export default EditorInput;
