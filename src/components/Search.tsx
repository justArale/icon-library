import React from "react";

const Search: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.5 15C17.4 13.8 18 12.2 18 10.5C18 6.4 14.6 3 10.5 3C6.4 3 3 6.4 3 10.5C3 14.6 6.4 18 10.5 18C12.2 18 13.7 17.5 15 16.5L19.0498 20.4662C19.4637 20.8711 20.1297 20.8559 20.5247 20.4327C20.9038 20.0265 20.8929 19.3929 20.5 19L16.5 15ZM10.5 16C7.5 16 5 13.5 5 10.5C5 7.5 7.5 5 10.5 5C13.5 5 16 7.5 16 10.5C16 13.5 13.5 16 10.5 16Z"
        fill="currentColor"
      />
    </svg>
  );
};

Search.displayName = "SearchIcon";
export default Search;
