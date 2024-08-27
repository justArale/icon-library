import React from "react";
import { AddIcon as SvgIcon } from "../svgs";

const Add: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    />
  );
};

Add.displayName = "AddIcon";
export default Add;
