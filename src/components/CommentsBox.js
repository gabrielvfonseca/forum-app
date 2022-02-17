/**
 * Author: Gabriel
 * Path: ./src/components/CommentBox.js
 * Creation-date: 08.02.2022
 **/

import Link from "next/link";
import Image from "next/image";
import propTypes from "prop-types";

/* Motion */
import { motion } from "framer-motion";

const hoverAnimation = {
  onHover: {
    scale: 1.024,
    transition: {
      duration: 0.18,
    },
  },
};

const CommentBox = ({ image, text, user, date }) => (
  <div className="p-4 border-b-2 border-b-zinc-300 dark:border-b-zinc-800 my-10">
    <div className="flex space-x-4 p-2 pb-5">
      <div>
        <h2 className="text-lg text-white font-regular hover:text-zinc-400 transition duration-175 ease-in-out">
          {user}
        </h2>
        <p className="text-sm">{text}</p>
        <div className="flex mt-1 text-xs">
          <p>{date}</p>
        </div>
      </div>
    </div>
  </div>
);

CommentBox.propTypes = {
  text: propTypes.string.isRequired,
  user: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
};

export default CommentBox;
