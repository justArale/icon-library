import React from "react";

const LinkedIn: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
        d="M3.47578 2.00138H20.5186V2.00013C21.3201 1.98957 21.9893 2.64001 22 3.44173V20.5565C21.9893 21.3585 21.321 22.0097 20.5186 21.9996H3.47578C2.67532 22.0082 2.00939 21.3569 2 20.5565V3.4429C2.00975 2.64288 2.67576 1.99234 3.47578 2.00138ZM16.0769 19.0412H19.0404L19.0416 13.8058C19.0416 11.2356 18.4878 9.26004 15.4843 9.26004C14.3376 9.21746 13.2566 9.81118 12.6774 10.8016H12.6375V9.49737H9.79262V19.0409H12.756V14.3198C12.756 13.0748 12.9922 11.8691 14.5357 11.8691C16.0571 11.8691 16.0769 13.2937 16.0769 14.4004V19.0412ZM4.72879 6.47317C4.72879 7.41659 5.50547 8.19281 6.44888 8.19281C7.39212 8.19272 8.16825 7.41605 8.16825 6.47281C8.16807 5.52957 7.39185 4.75344 6.44852 4.75344C5.5051 4.75344 4.72879 5.52975 4.72879 6.47317ZM4.96407 19.0412H7.93057V9.49737H4.96407V19.0412Z"
        fill="currentColor"
      />
    </svg>
  );
};

LinkedIn.displayName = "LinkedInIcon";
export default LinkedIn;
