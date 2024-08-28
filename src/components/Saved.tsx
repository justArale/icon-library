import React from "react";

const Saved: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.2071 9.20711C17.5976 8.81658 17.5976 8.18342 17.2071 7.79289C16.8166 7.40237 16.1834 7.40237 15.7929 7.79289L10 13.5858L8.20711 11.7929C7.81658 11.4024 7.18342 11.4024 6.79289 11.7929C6.40237 12.1834 6.40237 12.8166 6.79289 13.2071L9.29289 15.7071C9.68342 16.0976 10.3166 16.0976 10.7071 15.7071L17.2071 9.20711Z"
        fill="currentColor"
      />
    </svg>
  );
};

Saved.displayName = "SavedIcon";
export default Saved;
