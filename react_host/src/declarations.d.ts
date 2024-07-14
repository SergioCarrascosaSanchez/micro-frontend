declare module "react_remote/Chip" {
  import { FC } from "react";

  interface ChipProps {
    label: string;
    color: string;
    size?: "small" | "medium" | "large";
  }

  const Chip: FC<ChipProps>;
  export default Chip;
}
