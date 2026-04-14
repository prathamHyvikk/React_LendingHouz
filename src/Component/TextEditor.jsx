import React, { useState, useRef, useMemo, useEffect } from "react";
import JoditEditor from "jodit-react";
import "../joditEditor.css";
import { IoClose, IoSaveOutline } from "react-icons/io5";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const TextEditor = ({
  placeholder,
  content,
  setContent,
  setShowEditor,
  heading,
  postName,
}) => {
  const editor = useRef(null);
  const LoginToken = useSelector((state) => state.auth.token);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Trigger smooth entry animation
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setShowEditor(false), 300);
  };

  const config = useMemo(
    () => ({
      readonly: false,
      height: 400,
      placeholder: placeholder || "Start typings...",
    }),
    [placeholder],
  );

  const postContent = async () => {
    try {
      setLoading(true);
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/update-setting`,
        { name: postName, value: content },
        { headers: { Authorization: `Bearer ${LoginToken}` } },
      );
      toast.success("Content updated successfully");
      handleClose();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to update content");
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    postContent();
    setShowEditor(false);
  };
  return (
    <>
      <div
        className={`fixed inset-0 z-[100] flex justify-center items-start lg:items-center bg-slate-900/60 backdrop-blur-md px-4 py-8 overflow-y-auto transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`w-full max-w-5xl bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative transition-all duration-300 ease-out transform ${
            isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
          }`}
        >
          {/* Header Section */}
          <div className="p-8 md:p-10 flex items-center justify-between border-b border-gray-100">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
                {heading || "Edit Content"}
              </h2>
              <p className="text-gray-500 mt-1 text-sm md:text-base">
                Craft and format your content with precision.
              </p>
            </div>
            <button
              onClick={handleClose}
              className="p-3 rounded-full hover:bg-red-50 text-gray-400 hover:text-red-500 transition-all duration-300"
            >
              <IoClose size={28} />
            </button>
          </div>

          {/* Editor Container */}
          <div className="px-6 md:px-10">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-inner bg-gray-50">
              <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1}
                onBlur={(newContent) => setContent(newContent)}
              />
            </div>
          </div>

          {/* Footer Actions */}
          <div className="px-8 md:px-10 py-6 bg-gray-50/50 border-t border-gray-100 rounded-b-[2.5rem] flex flex-col sm:flex-row items-center justify-end gap-4">
            <button
              onClick={handleClose}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-gray-500 font-semibold hover:text-gray-800 hover:bg-gray-200 transition-all"
            >
              Discard Changes
            </button>
            <button
              onClick={postContent}
              disabled={loading}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-3.5 rounded-xl bg-[#0080C6] text-white font-bold tracking-wide shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Saving...
                </span>
              ) : (
                <>
                  <IoSaveOutline size={20} />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextEditor;
