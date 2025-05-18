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
    <div className="flex items-center justify-center p-2 bg-slate-100 rounded-lg">
      <label className="relative inline-flex items-center cursor-pointer w-full">
        <input 
          type="checkbox" 
          className="sr-only peer" 
          checked={isChecked}
          onChange={handleToggle}
        />
        <div className="w-full flex justify-between items-center h-10 bg-white peer-checked:bg-white rounded-lg transition-all duration-300 px-2 relative overflow-hidden">
          <span 
            className={`px-3 py-1 rounded font-medium text-secondary-dark ${isChecked ? "" : "text-white z-10"}`}
          >
            EUR/m² → MAD/ft²
          </span>
          <span 
            className={`px-3 py-1 rounded font-medium text-secondary-dark ${isChecked ? "text-white z-10" : ""}`}
          >
            MAD/ft² → EUR/m²
          </span>
          <div 
            className={`absolute inset-y-0 bg-primary w-1/2 rounded transition-all duration-300 transform ${isChecked ? "translate-x-full" : "translate-x-0"} h-10`}
          ></div>
        </div>
      </label>
    </div>
  );
}
