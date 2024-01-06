import { Value } from "../types";
import { GripVertical } from "lucide-react";

interface EditorInputProps {
  value: Value;
  index: number;
  onEnter: (index: number) => void;
  onDelete: (index: number) => void;
  changeValue: (index: number, value: string) => void;
}

function EditorInput({
  value,
  onEnter,
  index,
  changeValue,
  onDelete,
}: EditorInputProps) {
  return (
    <div className="w-full border border-gray-100 p-2 shadow input-container flex gap-5 group">
      <button className="dragButton invisible group-hover:visible ">
        <GripVertical height={25} width={25} className="h-full text-gray-500" />
      </button>
      <div
        onBeforeInput={(e) => {
          const evt = e.nativeEvent as KeyboardEvent;
          if (evt.key === "Enter") {
            if (!evt.shiftKey) {
              evt.preventDefault();
              onEnter(index);
            }
          }
        }}
        onKeyDown={(e) => {
          if (e.key !== "Backspace") return;
          if (value.value !== "") return;
          e.preventDefault();
          onDelete(index);
        }}
        onInput={(e) => {
          const text = e.currentTarget.textContent;
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
