export default function Modal({ isOpen, onClose, children, className = "", overlayClassName = "" }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/20 backdrop-blur-[2px] ${overlayClassName}`}
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`animate-[modalIn_160ms_ease-out] ${className}`} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
}

