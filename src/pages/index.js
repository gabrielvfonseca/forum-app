/**
 * Author: Gabriel
 * Path: ./src/pages/index.js
 * Creation-date: 04.02.2022
 **/

import React from "react";

/* Motion */
import { motion } from "framer-motion";

/* Components */
import Button from "../components/Button";
import SideBar from "../components/Sidebar";
import Discussion from "../components/DiscussionBox";

export default function Index({ docs }) {
  return (
    <motion.div
      animate={{ y: -10, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="bg-background-light dark:bg-background-dark px-10"
    >
      <section className="my-16">
        <h3 className="font-bold tracking-wide">Hardware Forum</h3>
        <h1 className="text-5xl mt-2 mb-6 font-regular">
          An awesome forum for an
          <br />
          even better community.
        </h1>
        <Button text="Start new discussion" animation={true} url="/post" />
      </section>

      <section className="pt-8 pb-14">
        <div className="flex">
          <div className="w-1/6 mr-8">
            <h3 className="font-bold mb-2 tracking-wide">Forum Filter</h3>
            <SideBar />
          </div>
          <div className="w-5/6">
            <h3 className="font-bold mb-2 tracking-wide">Latest Feed</h3>
            <div>
              {docs &&
                docs.map((item, index) => (
                  <div key={index}>
                    <Discussion
                      id={index}
                      title={item.title}
                      text={item.text}
                      image={item.image}
                      author={item.author}
                      category={item.category}
                      date={item.date}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
