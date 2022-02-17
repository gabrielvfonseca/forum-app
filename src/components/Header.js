/**
 * Author: Gabriel
 * Path: ./src/components/Header.js
 * Creation-date: 04.02.2022
 **/

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

/* Motion */
import { motion } from "framer-motion";

/* Components */
import SignIn from "./SignIn";

const Header = () => {
  const { pathname } = useRouter();

  return (
    <>
      <header className="flex items-center justify-between py-6 px-10 border-b-2 border-b-zinc-300 dark:bg-dark-gray dark:border-b-zinc-800">
        <h2 className="text-gray-800 font-medium text-xl leading-tight align-middle dark:text-white">
          <Link href="/">
            <a>Forum</a>
          </Link>
        </h2>

        <SignIn />
      </header>
    </>
  );
};

export default Header;
