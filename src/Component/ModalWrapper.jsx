import React from "react";

const ModalWrapper = ({ children, onClose }) => {
  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-200 flex items-center justify-center"
      >
        <div onClick={(e) => e.stopPropagation()}>{children}</div>
      </div>
    </>
  );
};

export default ModalWrapper;
