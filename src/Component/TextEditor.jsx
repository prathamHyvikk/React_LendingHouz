import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import "../joditEditor.css";
import axios from "axios";

const TextEditor = ({
  placeholder,
  content,
  setContent,
  setShowEditor,
  heading,
  postName,
}) => {
  const editor = useRef(null);
  //   const [content, setContent] = useState("");
  const LoginToken = localStorage.getItem("LoginToken");

  const config = useMemo(
    () => ({
      readonly: false,
      height: 300,
      placeholder: placeholder || "Start typings...",
    }),
    [placeholder]
  );

  const postContent = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/update-setting`,
        {
          name: postName,
          value: content,
        },
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        }
      );

    } catch (error) {
      if (error?.response) {
        toast.error(error?.response.data.message);
      }
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    postContent();
    setShowEditor(false);
  };
  return (
    <>
      <div className=" bg-white shadow-lg rounded-md p-2 text-[13px]  ">
        <div>
          <h2 className="text-2xl font-bold pb-5 text-blue-900">{heading}</h2>
        </div>
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

      <div>
        <button
          onClick={(e) => handleClick(e)}
          className="bg-blue-900 sora-bold cursor-pointer text-white py-2 px-4 rounded-md"
        >
          Save
        </button>
      </div>
    </>
  );
};

export default TextEditor;
