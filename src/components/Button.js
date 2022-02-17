/**
 * Author: Gabriel
 * Path: ./src/components/Button.js
 * Creation-date: 05.02.2022
 **/

import Link from "next/link";
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

const Button = ({ text, animation, url }) => {
  if (url != undefined) {
    return (
      <Link href={url} passHref>
        <motion.button
          type="button"
          variants={animation ? hoverAnimation : null}
          whileHover="onHover"
          className="px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium text-sm leading-tight rounded hover:opacity-70 dark:border-white dark:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          {text}
        </motion.button>
      </Link>
    );
  } else {
    return (
      <motion.button
        type="button"
        variants={animation ? hoverAnimation : null}
        whileHover="onHover"
        className="px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium text-sm leading-tight rounded hover:opacity-70 dark:border-white dark:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
      >
        {text}
      </motion.button>
    );
  }
};

Button.propTypes = {
  text: propTypes.string.isRequired,
};

export default Button;
