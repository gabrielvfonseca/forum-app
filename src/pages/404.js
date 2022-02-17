/**
 * Author: Gabriel
 * Path: ./src/pages/404.js
 * Creation-date: 04.02.2022
 **/

import Link from "next/link";

/* Motion */
import { motion } from "framer-motion";

/* Assets */

/* Components */
import Button from "../components/Button";

export default function NotFound() {
  return (
    <motion.div
      animate={{ y: -10, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="text-center my-48 px-5 bg-background-light dark:bg-background-dark"
    >
      <h1 className="text-3xl tracking-wide font-semibold dark:text-white-03">
        Not Found
      </h1>
      <p className="text-gray mt-2 mb-4">
        Sorry, the page you’re looking for does not exit.
      </p>
      <Link href="/" className="py-8" passHref>
        <a>
          <Button text="Return Home" animation={true} />
        </a>
      </Link>
    </motion.div>
  );
}
