import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const IframePopup = ({ isOpen, setIsOpen, url }) => {
  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-5xl h-[85vh] rounded-xl shadow-lg overflow-hidden">
        
        {/* Close Button */}
        {/* <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 shadow"
        >
          <IoMdClose className="w-6 h-6 text-black" />
        </button> */}

        {/* Iframe */}
        <iframe
          src={url}
          title="Popup Content"
          className="w-full h-full border-0"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default IframePopup;
