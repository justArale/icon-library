import React from "react";

const Heart: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
        d="M20.7426 12.7426C23.0857 10.3995 23.0857 6.6005 20.7426 4.25736C18.3994 1.91421 14.6005 1.91421 12.2573 4.25736C12.1681 4.34653 12.0824 4.43781 12 4.53104C11.9176 4.43782 11.8318 4.34654 11.7426 4.25737C9.39949 1.91422 5.60051 1.91422 3.25736 4.25737C0.914214 6.60051 0.914213 10.3995 3.25736 12.7426L10.9094 20.8453C11.5013 21.472 12.4986 21.472 13.0905 20.8453L20.7426 12.7426Z"
        fill="currentColor"
      />
    </svg>
  );
};

Heart.displayName = "HeartIcon";
export default Heart;
