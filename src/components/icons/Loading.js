/**
 * Author: Gabriel
 * Path: ./src/components/icons/Loading.js
 * Creation-date: 05.02.2022
 **/

const Loading = ({ color, width, height }) => (
  <div className="flex justify-center items-center">
    <div
      className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default Loading;
