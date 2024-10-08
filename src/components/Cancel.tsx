import React from "react";

const Cancel: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
        d="M9.87891 12L2.87891 4.99998L5.00023 2.87866L12.0002 9.87866L19.0002 2.87866L21.1215 4.99998L14.1215 12L21.1215 19L19.0002 21.1213L12.0002 14.1213L5.00023 21.1213L2.87891 19L9.87891 12Z"
        fill="currentColor"
      />
    </svg>
  );
};

Cancel.displayName = "CancelIcon";
export default Cancel;
