import React from "react";

const Play: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 10.2682C21.3333 11.038 21.3333 12.9625 20 13.7323L9.5 19.7944C8.16667 20.5643 6.5 19.602 6.5 18.0624L6.5 5.93804C6.5 4.39844 8.16667 3.43619 9.5 4.20599L20 10.2682Z" 
        fill="currentColor"
      />
    </svg>
  );
};

Play.displayName = "PlayIcon";
export default Play;
