// src/buttons/BackToDashBoardButton.jsx
import BlueArrowIcon from "../assets/blue-arrow.svg";

export default function BackToDashBoardButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mb-3 flex items-center gap-2 text-[#4443E4]"
    >
      <img
        src={BlueArrowIcon}
        alt="Back"
        className="w-5 h-5"
      />

      <span className="text-[26px] font-normal hover:underline">
        Back to Dashboard
      </span>
    </button>
  );
}
