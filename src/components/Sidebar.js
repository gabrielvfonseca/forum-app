/**
 * Author: Gabriel
 * Path: ./src/components/Sidebar.js
 * Creation-date: 05.02.2022
 **/

import Link from "next/link";
import Router from "next/router";

/* Motion */
import { motion } from "framer-motion";

const hoverAnimation = {
  onHover: {
    scale: 1.028,
    transition: {
      duration: 0.18,
    },
  },
};

/* Assets */
import { ArrowRightUp } from "./icons/Arrows";

/* Retrieve */
import { categorys } from "../../app.data";

const SideBar = () => (
  <nav>
    <ul className="text-sm cursor-pointer list-inside">
      {categorys.map((item, index) => (
        <motion.li
          key={index}
          variants={hoverAnimation}
          whileHover="onHover"
          className="flex my-2 hover:opacity-75"
        >
          <ArrowRightUp color={item.color} width={22} height={22} />
          <span className="ml-1">{item.title}</span>
        </motion.li>
      ))}
    </ul>
  </nav>
);

export default SideBar;
