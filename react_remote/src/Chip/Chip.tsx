import "./Chip.css";
import React from "react";

interface ChipProps {
  label: string;
  color: string;
  size?: "small" | "medium" | "large";
}

const Chip: React.FC<ChipProps> = ({ label, color, size = "medium" }) => {
  return (
    <p
      className={`chip chip-${size}`}
      style={{
        backgroundColor: `var(--${color}-light)`,
        color: `var(--${color}-dark)`,
      }}
    >
      {label}
    </p>
  );
};

export default Chip;
export type { ChipProps };
