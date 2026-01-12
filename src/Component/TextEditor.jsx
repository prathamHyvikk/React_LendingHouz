import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const TextEditor = ({ placeholder, content, setContent }) => {
  const editor = useRef(null);
  //   const [content, setContent] = useState("");

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typings...",
    }),
    [placeholder]
  );
  return (
    <>
      <div className=" bg-white shadow-lg rounded-md p-2 text-[13px] ">
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1}
          onBlur={(newContent) => setContent(newContent)}
          content
          for
          performance
          reasons
          onChange={(newContent) => {}}
        />
      </div>
    </>
  );
};

export default TextEditor;
