import { ReactNode, createContext, useContext, useState } from "react";
import { motion } from "framer-motion";

const RadioButtonContext = createContext({
  id: "",
  isChecked: false,
  setIsChecked: () => { },
});

const tickVariants = {
  checked: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.2,
    },
  },
  unchecked: {
    pathLength: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export default function RadioButton ({ children, id, state, setState, color, bg, value, name, disabled }) {
  // const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center">
      <RadioButtonContext.Provider
        value={{
          id,
          state,
          setState,
          color,
          bg,
          value,
          name,
          disabled
        }}
      >
        {children}
      </RadioButtonContext.Provider>
    </div>
  );
}

function RadioButtonIndicator () {
  const { id, state, setState, color, bg, value, name, disabled } = useContext(RadioButtonContext);

  return (
    <button className="relative flex items-center">
      <input
        type="radio"
        className={'relative w-5 h-5 transition-all duration-500 border-2 rounded-md appearance-none cursor-pointer border-[#111]/50 ' + (bg ? `border-${bg}/50 ` : "border-[#111]/50 ") + (state == value && (bg ? `border-${bg} bg-${bg} ` : "border-[#111] bg-[#111]"))}
        onChange={(e) => setState(e.target.value)}
        value={value}
        checked={state == value}
        id={id}
        disabled={disabled}
      />
      <div className={'absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none left-1/2 top-1/2 ' + (color ? `text-${color}` : 'text-white')}>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3.5"
          stroke="currentColor"
          className="h-3.5 w-3.5"
          initial={false}
          animate={state == value ? "checked" : "unchecked"}
        >
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
            variants={tickVariants}
          />
        </motion.svg>
      </div>
    </button>
  );
}

RadioButton.Indicator = RadioButtonIndicator;

function RadioButtonLabel ({ children }) {
  const { id, state, value, name } = useContext(RadioButtonContext);

  return (
    <motion.label
      className="relative mr-2 overflow-hidden text-sm cursor-pointer"
      htmlFor={id}
      animate={{
        x: state == value ? [0, 4, 0] : [0, -4, 0],
        color: state == value ? "#a1a1aa" : "#4c4c52",
        // textDecorationLine: state ? "line-through" : "none",
      }}
      initial={false}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.label>
  );
}

RadioButton.Label = RadioButtonLabel;
