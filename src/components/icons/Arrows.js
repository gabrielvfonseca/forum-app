/**
 * Author: Gabriel
 * Path: ./src/components/icons/Arrows.js
 * Creation-date: 05.02.2022
 **/

export const ArrowDown = ({ color, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    height={height === null ? "24px" : height}
    width={width === null ? "24px" : width}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M12 4C12.5523 4 13 4.44772 13 5V16.5858L17.2929 12.2929C17.6834 11.9024 18.3166 11.9024 18.7071 12.2929C19.0976 12.6834 19.0976 13.3166 18.7071 13.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L5.29289 13.7071C4.90237 13.3166 4.90237 12.6834 5.29289 12.2929C5.68342 11.9024 6.31658 11.9024 6.70711 12.2929L11 16.5858V5C11 4.44772 11.4477 4 12 4Z"
      fill={color === null ? "currentColor" : color}
    ></path>
  </svg>
);

export const ArrowLeft = ({ color, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    height={height === null ? "24px" : height}
    width={width === null ? "24px" : width}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711L7.41421 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H7.41421L11.7071 17.2929C12.0976 17.6834 12.0976 18.3166 11.7071 18.7071C11.3166 19.0976 10.6834 19.0976 10.2929 18.7071L4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929L10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289Z"
      fill={color === null ? "currentColor" : color}
    ></path>
  </svg>
);

export const ArrowRight = ({ color, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    height={height === null ? "24px" : height}
    width={width === null ? "24px" : width}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M12.2929 5.29289C12.6834 4.90237 13.3166 4.90237 13.7071 5.29289L19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071L13.7071 18.7071C13.3166 19.0976 12.6834 19.0976 12.2929 18.7071C11.9024 18.3166 11.9024 17.6834 12.2929 17.2929L16.5858 13L5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11L16.5858 11L12.2929 6.70711C11.9024 6.31658 11.9024 5.68342 12.2929 5.29289Z"
      fill={color === null ? "currentColor" : color}
    ></path>
  </svg>
);

export const ArrowUp = ({ color, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    height={height === null ? "24px" : height}
    width={width === null ? "24px" : width}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M12 4C12.2652 4 12.5196 4.10536 12.7071 4.29289L18.7071 10.2929C19.0976 10.6834 19.0976 11.3166 18.7071 11.7071C18.3166 12.0976 17.6834 12.0976 17.2929 11.7071L13 7.41421L13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19L11 7.41421L6.70711 11.7071C6.31658 12.0976 5.68342 12.0976 5.29289 11.7071C4.90237 11.3166 4.90237 10.6834 5.29289 10.2929L11.2929 4.29289C11.4804 4.10536 11.7348 4 12 4Z"
      fill={color === null ? "currentColor" : color}
    ></path>
  </svg>
);

export const ArrowRightUp = ({ color, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    height={height === null ? "24px" : height}
    width={width === null ? "24px" : width}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M8 7C8 6.44772 8.44772 6 9 6L17 6C17.5523 6 18 6.44772 18 7V15C18 15.5523 17.5523 16 17 16C16.4477 16 16 15.5523 16 15V9.41421L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L14.5858 8L9 8C8.44772 8 8 7.55228 8 7Z"
      fill={color === null ? "currentColor" : color}
    ></path>
  </svg>
);
