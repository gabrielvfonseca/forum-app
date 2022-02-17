/**
 * Author: Gabriel
 * Path: ./src/components/Nav.js
 * Creation-date: 05.02.2022
 **/

import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

/* Motion */
import { motion } from "framer-motion";

const Nav = ({ navigation, showCurrent }) => {
  const { pathname } = useRouter();

  return (
    <nav>
      <ul className="flex justify-center uppercase tracking-wider text-sm space-x-4">
        {navigation.map((route, index) => (
          <li
            key={index}
            className={`${
              pathname === route.routePath && showCurrent
                ? "text-orange hover:text-zinc-400"
                : "text-zinc-400 hover:text-orange"
            }
              transition duration-150 ease-in-out`}
          >
            <Link href={route.routePath}>
              <a>{route.routeName}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
