import React from "react";

const Pause: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 6C4 4.89543 4.89543 4 6 4H8C9.10457 4 10 4.89543 10 6V18C10 19.1046 9.10457 20 8 20H6C4.89543 20 4 19.1046 4 18V6Z"
        fill="currentColor"
      />
      <path
        d="M14 6C14 4.89543 14.8954 4 16 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H16C14.8954 20 14 19.1046 14 18V6Z"
        fill="currentColor"
      />
    </svg>
  );
};

Pause.displayName = "PauseIcon";
export default Pause;
