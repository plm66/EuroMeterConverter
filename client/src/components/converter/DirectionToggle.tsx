import { useState } from "react";

interface DirectionToggleProps {
  onToggle: (isChecked: boolean) => void;
}

export default function DirectionToggle({ onToggle }: DirectionToggleProps) {
  const [isChecked, setIsChecked] = useState(false);
  
  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onToggle(newValue);
  };
  
  return (
    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
      <button
        type="button"
        onClick={() => {
          if (isChecked) handleToggle();
        }}
        className={`flex-1 px-4 py-3 flex items-center justify-center rounded-md transition-all ${
          !isChecked 
            ? "bg-secondary text-white font-medium" 
            : "bg-gray-100 text-gray-500"
        }`}
      >
        <span className="text-sm sm:text-base flex items-center gap-2">
          <span>€</span> 
          <span>→</span> 
          <span>AED</span>
        </span>
      </button>
      
      <button
        type="button"
        onClick={() => {
          if (!isChecked) handleToggle();
        }}
        className={`flex-1 px-4 py-3 flex items-center justify-center rounded-md transition-all ${
          isChecked 
            ? "bg-secondary text-white font-medium" 
            : "bg-gray-100 text-gray-500"
        }`}
      >
        <span className="text-sm sm:text-base flex items-center gap-2">
          <span>AED</span> 
          <span>→</span> 
          <span>€</span>
        </span>
      </button>
    </div>
  );
}
