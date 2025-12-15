import React from "react";

const ModalWrapper = ({ children, onClose }) => {
  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-xl shadow-xl w-full max-w-4xl p-6 overflow-y-auto max-h-[90vh]"
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-xl">
            ✕
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default ModalWrapper;
