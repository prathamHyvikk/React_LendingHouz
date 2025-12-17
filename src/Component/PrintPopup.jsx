import React, { useEffect, useRef, useState } from "react";
import ViewModal from "./ViewModal";
import SubmitInvoice from "./SubmitInvoice";
import ModalWrapper from "./ModalWrapper";

const PrintPopup = ({ onClose, position }) => {
  const menuRef = useRef(null);
  const [showView, setShowView] = useState(false);
  const [addInvoice, setAddInvoice] = useState(false);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [onClose]);

  return (
    <>

        <div
          ref={menuRef}
          style={{ left: position.x, top: position.y }}
          className="fixed z-200 w-36 bg-white shadow-lg rounded-md p-2 text-[13px] text-gray-700"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setShowView(true)}
            className="p-2 hover:bg-gray-100 w-full flex justify-between cursor-pointer rounded"
          >
            <span>View</span>
            <i className="fa-regular fa-eye"></i>
          </button>

          <button
            onClick={() => setAddInvoice(true)}
            className="p-2 hover:bg-gray-100 w-full flex justify-between cursor-pointer rounded"
          >
            <span>Add Invoice</span>
            <i className="fa-solid fa-plus"></i>
          </button>

          {showView && <ViewModal onClose={() => setShowView(false)} />}
          {addInvoice && (
            <SubmitInvoice
              onClose={() => setAddInvoice(false)}
              setAddInvoice={setAddInvoice}
            />
          )}
        </div>
    
    </>
  );
};

export default PrintPopup;
