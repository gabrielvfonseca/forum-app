/**
 * Author: Gabriel
 * Path: ./src/components/icons/Cross.js
 * Creation-date: 06.02.2022
 **/

export const Cross = ({ stroke, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    height={height === null ? "24px" : height}
    width={width === null ? "24px" : width}
  >
    <line
      x1="19"
      y1="5"
      x2="5"
      y2="19"
      stroke={stroke === null ? "gary" : stroke}
      strokeMiterlimit="10"
      strokeWidth={2}
    />
    <line
      x1="5"
      y1="5"
      x2="19"
      y2="19"
      stroke={stroke === null ? "gary" : stroke}
      strokeMiterlimit="10"
      strokeWidth={2}
    />
  </svg>
);
