import "./Chip.css";
import React from "react";

interface ChipProps {
  label: string;
  color: string;
  size?: "small" | "medium" | "large";
}

export default function Chip({ label, color, size }: ChipProps) {
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
}
