import React from "react";

const Add: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 13.5H2.5V10.5H10.5V2.5H13.5V10.5H21.5V13.5H13.5V21.5H10.5V13.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

Add.displayName = "AddIcon";
export default Add;
