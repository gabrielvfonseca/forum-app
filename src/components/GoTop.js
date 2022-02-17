/**
 * Author: Gabriel
 * Path: ./src/components/GoTop.js
 * Creation-date: 05.02.2022
 **/

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

/* Motion */
import { motion } from "framer-motion";

/* Assets */
import { ChevronUp } from "./icons/Chevron";

const GoTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 120) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return showButton ? (
    <motion.button
      animate={{ y: 6, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="fixed w-10 h-10 right-8 bottom-20 bg-gray rounded-full text-5xl cursor-pointer text-orange z-10 outline-none dark:bg-dark-gray"
      onClick={scrollToTop}
    >
      <ChevronUp color="#fff" width="38px" height="38px" />
    </motion.button>
  ) : null;
};

export default GoTop;
