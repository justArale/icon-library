import React from "react";

const Select: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
        d="M9.99961 0.193359L4.08203 6.11094L5.55517 7.58408L9.99961 3.139L14.4441 7.58408L15.9172 6.11094L9.99961 0.193359ZM15.9172 13.8892L14.4441 12.416L9.99961 16.8603L5.55517 12.416L4.08203 13.8892L9.99961 19.8067L15.9172 13.8892Z"
        fill="currentColor"
      />
    </svg>
  );
};

Select.displayName = "SelectIcon";
export default Select;
