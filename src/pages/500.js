/**
 * Author: Gabriel
 * Path: ./src/pages/500.js
 * Creation-date: 04.02.2022
 **/

import Link from "next/link";
import Image from "next/image";

/* Motion */
import { motion } from "framer-motion";

/* Assets */

/* Components */
import Button from "../components/Button";

/* Retrieve */

export default function ServerError() {
  return (
    <motion.div
      animate={{ y: -10, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="text-center my-48 px-5 bg-background-light dark:bg-background-dark"
    >
      <h1 className="text-3xl tracking-wide font-semibold dark:text-white-03">
        Internal Server Error
      </h1>
      <p className="text-gray mt-2 mb-4">
        Some server-side error occurred.
        <br />
        Please try again later.{" "}
      </p>
      <Link href="/" className="py-8" passHref>
        <a>
          <Button text="Return Home" animation={true} />
        </a>
      </Link>
    </motion.div>
  );
}
