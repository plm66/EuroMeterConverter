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
    <div className="flex items-center justify-center bg-gradient-to-r from-primary/5 to-secondary/5 p-4 rounded-xl shadow-inner border border-primary/20">
      <label className="relative inline-flex items-center cursor-pointer w-full">
        <input 
          type="checkbox" 
          className="sr-only peer" 
          checked={isChecked}
          onChange={handleToggle}
        />
        <div className="w-full flex justify-between items-center h-14 bg-white/80 peer-checked:bg-white/80 rounded-full transition-all duration-300 px-3 relative overflow-hidden shadow-md border border-accent/10">
          <span 
            className={`px-5 py-1 rounded-full font-medium ${isChecked ? "text-accent/70" : "text-white z-10 font-semibold"}`}
          >
            <span className="flex items-center gap-2">
              <span className="text-xl">€</span> 
              <span className="mx-1">→</span> 
              <span className="text-xl">AED</span>
            </span>
          </span>
          <span 
            className={`px-5 py-1 rounded-full font-medium ${isChecked ? "text-white z-10 font-semibold" : "text-accent/70"}`}
          >
            <span className="flex items-center gap-2">
              <span className="text-xl">AED</span> 
              <span className="mx-1">→</span> 
              <span className="text-xl">€</span>
            </span>
          </span>
          <div 
            className={`absolute inset-y-0 bg-gradient-to-r from-secondary to-primary w-1/2 rounded-full transition-all duration-300 transform ${isChecked ? "translate-x-full" : "translate-x-0"} h-14 shadow-lg`}
          ></div>
        </div>
      </label>
    </div>
  );
}
