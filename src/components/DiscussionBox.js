/**
 * Author: Gabriel
 * Path: ./src/components/Discussion.js
 * Creation-date: 05.02.2022
 **/

import Link from "next/link";
import Image from "next/image";
import propTypes from "prop-types";

/* Motion */
import { motion } from "framer-motion";

const hoverAnimation = {
  onHover: {
    scale: 1.0,
    transition: {
      duration: 0.18,
    },
  },
};

const Discussion = ({ id, title, text, image, author, date, category }) => (
  <motion.div
    variants={hoverAnimation}
    whileHover="onHover"
    className="my-4 bg-transparent border-b-2 border-b-zinc-300 dark:border-b-zinc-800 text-gray"
  >
    <div className="flex space-x-4 p-2 pb-5">
      <div className="rounded-full">
        <Image
          src={image}
          width={55}
          height={55}
          alt="Avatar"
          className="rounded-full"
          layout="fixed"
        />
      </div>

      <div>
        <Link
          href={{
            pathname: `/pull/${title.replace(/\s/g, "-")}`,
            query: { id: id },
          }}
        >
          <a>
            <h2 className="text-lg text-black font-regular hover:text-zinc-400 dark:text-white transition duration-175 ease-in-out">
              {title}
            </h2>
          </a>
        </Link>
        <p className="text-sm">{text}</p>
        <div className="flex mt-2 text-xs">
          <Link href="/">
            <a className="cursor-pointer hover:text-orange transition duration-175 ease-in-out">
              {author}
            </a>
          </Link>
          <span className="mx-1 before:content-['•']" />
          <p>{date}</p>
        </div>
      </div>

      <div className="pl-10 rounded-full">
        {category.map((item, index) => (
          <Link key={index} href={`#${item}`}>
            <a className="py-1 px-2 ml-2 rounded-lg bg-zinc-200 text-black hover:opacity-70 dark:bg-dark-gray dark:text-white">
              {item}
            </a>
          </Link>
        ))}
      </div>
    </div>
  </motion.div>
);

Discussion.propTypes = {
  title: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
};

export default Discussion;
