import React from "react";

const Edit: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
        d="M21.25 7.25L19.75 8.75L15.25 4.25L16.75 2.75C18.75 2.75 21.25 5.25 21.25 7.25ZM3 16.75L14.25 5.25L18.75 9.75L7.25 21H3V16.75Z"
        fill="currentColor"
      />
    </svg>
  );
};

Edit.displayName = "EditIcon";
export default Edit;
