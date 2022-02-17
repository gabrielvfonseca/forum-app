/**
 * Author: Gabriel
 * Path: ./src/components/PostCommand.js
 * Creation-date: 08.02.2022
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

/* Component */
import Button from "../components/Button";

const PostCommand = ({ user }) => (
  <div className="pb-7 pt-4 px-2 border-b-2 border-b-zinc-300 dark:border-b-zinc-800 my-10">
    <h3>Post a new comment</h3>

    <input
      type="text"
      placeholder="Answer here!"
      className="w-full pl-4 pt-3 pb-14 mt-2 mb-5 bg-zinc-200 text-black rounded-lg outline-none dark:bg-dark-gray"
    />
    <Button text="Publish" animation={true} />
  </div>
);

export default PostCommand;
