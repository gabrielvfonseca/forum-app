/**
 * Author: Gabriel
 * Path: ./src/components/Footer.js
 * Creation-date: 05.02.2022
 **/

import Link from "next/link";

/* Motion */
import { motion } from "framer-motion";

/* Assets */
import GitHub from "./icons/Github";

/* Assets */
import Nav from "./Nav";

const Footer = () => (
  <footer className="flex mt-4 px-10 py-8 justify-between align-middle items-center border-t-2 border-t-zinc-300 dark:bg-dark-gray dark:border-t-zinc-800">
    <div>
      <p className="text-gray text-sm after:content-['.']">
        &copy; Dev by
        <span className="mx-1 before:content-['-']" />
        <Link href="https://gabrielfonseca.me">
          <a className="hover:text-orange transition duration-175 ease-in-out">
            Gabriel
          </a>
        </Link>
      </p>
    </div>

    <div className="hover:opacity-75 cursor-pointer transition duration-175 ease-in-out">
      <Link href="/github" passHref>
        <a>
          <GitHub color="gray" width={28} height={28} />
        </a>
      </Link>
    </div>
  </footer>
);

export default Footer;
