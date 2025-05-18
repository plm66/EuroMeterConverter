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
    <div className="flex items-center justify-center bg-gradient-to-r from-blue-50 to-yellow-50 p-3 rounded-xl shadow-inner border border-blue-100">
      <label className="relative inline-flex items-center cursor-pointer w-full">
        <input 
          type="checkbox" 
          className="sr-only peer" 
          checked={isChecked}
          onChange={handleToggle}
        />
        <div className="w-full flex justify-between items-center h-12 bg-white peer-checked:bg-white rounded-full transition-all duration-300 px-2 relative overflow-hidden shadow-sm border border-slate-100">
          <span 
            className={`px-4 py-1 rounded-full font-medium ${isChecked ? "text-slate-500" : "text-white z-10 font-semibold"}`}
          >
            <span className="flex items-center gap-1">
              <span className="text-xl">€</span> 
              <span className="mx-1">→</span> 
              <span className="text-xl">AED</span>
            </span>
          </span>
          <span 
            className={`px-4 py-1 rounded-full font-medium ${isChecked ? "text-white z-10 font-semibold" : "text-slate-500"}`}
          >
            <span className="flex items-center gap-1">
              <span className="text-xl">AED</span> 
              <span className="mx-1">→</span> 
              <span className="text-xl">€</span>
            </span>
          </span>
          <div 
            className={`absolute inset-y-0 bg-gradient-to-r from-primary to-blue-400 w-1/2 rounded-full transition-all duration-300 transform ${isChecked ? "translate-x-full" : "translate-x-0"} h-12 shadow-md`}
          ></div>
        </div>
      </label>
    </div>
  );
}
