import React from "react";

const Delete: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
        d="M8 5V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V5H20V7H4V5H8ZM9.75 5H14.25V4C14.25 3.86193 14.1381 3.75 14 3.75H10C9.86193 3.75 9.75 3.86193 9.75 4V5ZM5 8H19L18.1327 20.1425C18.0579 21.1891 17.187 22 16.1378 22H7.86224C6.81296 22 5.94208 21.1891 5.86732 20.1425L5 8Z"
        fill="currentColor"
      />
    </svg>
  );
};

Delete.displayName = "DeleteIcon";
export default Delete;
