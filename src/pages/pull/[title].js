/**
 * Author: Gabriel
 * Path: ./src/pages/pull/[title].js
 * Creation-date: 14.02.2022
 **/

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

/* Motion */
import { motion } from "framer-motion";

/* Components */
import PostCommand from "../../components/PostCommand";
import CommentBox from "../../components/CommentsBox";

export default function Pull({ docs }) {
  const id = Number(useRouter().query.id);

  return (
    <motion.div
      animate={{ y: -10, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="px-20 py-4"
    >
      <section
        id="post"
        className="p-4 border-2 rounded-lg border-zinc-300 dark:border-zinc-800 my-10"
      >
        <div>
          <Image
            src={docs[id].image}
            width={55}
            height={55}
            alt="Avatar"
            layout="fixed"
            className="rounded-full"
          />
        </div>
        <div className="flex space-x-4 p-2 pb-5">
          <div>
            <h2 className="text-2xl mb-2 text-black font-medium dark:text-white transition duration-175 ease-in-out">
              {docs[id].title === undefined ? "Title" : docs[id].title}
            </h2>
            <p className="text-base text-gray">
              {docs[id].text === undefined ? "Text" : docs[id].text}
            </p>

            <div className="flex mt-2 text-sm text-zinc-500">
              <Link href="/">
                <a className="cursor-pointer hover:text-orange transition duration-175 ease-in-out">
                  {docs[id].author === undefined ? "Author" : docs[id].author}
                </a>
              </Link>
              <span className="mx-1 before:content-['•']" />
              <p>{docs[id].date === undefined ? "Author" : docs[id].date}</p>
            </div>
          </div>
        </div>
      </section>

      {/*
      <section id="comments">
        <PostCommand />
        <CommentBox />
      </section>
      */}
    </motion.div>
  );
}
