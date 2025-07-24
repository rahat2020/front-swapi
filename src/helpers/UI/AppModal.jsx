import { useEffect, useRef, useState } from "react";

export default function AppModal({ isOpen, onClose, children, className }) {
  // hooks
  const modalRef = useRef(null);
  // states
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        className={`relative z-50 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white shadow-xl ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
