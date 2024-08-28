import React from "react";

const Check: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
        d="M9.00023 15.8787L4.00023 10.8787L1.87891 13L9.00023 20.1213L23.1215 5.99998L21.0002 3.87866L9.00023 15.8787Z"
        fill="currentColor"
      />
    </svg>
  );
};

Check.displayName = "CheckIcon";
export default Check;
