/**
 * Author: Gabriel
 * Path: ./src/components/StartDiscussion.js
 * Creation-date: 07.02.2022
 **/

import React, { useState, useEffect } from "react";
import Router from "next/router";

/* Firebase */
import { auth, db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";

/* Motion */
import { motion } from "framer-motion";

/* Retrive */
import { categorys } from "../../app.data";

const StartDiscussion = () => {
  const [showModal, setShowModal] = useState(true);

  const [tagData, setTagData] = useState();
  const [titleData, setTitleData] = useState();
  const [textData, setTextData] = useState();

  const currentUser = auth.currentUser;

  if (currentUser === null) {
    // If there isn't any user loged in go back
    let msg = "Please login first to start a pull discussion! 🤖";
    console.log(msg);
    Router.push("/");
  }

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setShowModal(false);
        Router.push("/");
      }
    };

    window.addEventListener("keydown", handleEsc);
  });

  return (
    <>
      {showModal ? (
        <>
          <motion.div
            animate={{ y: -10, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-4 mx-14 max-w-3xl">
              <div className="border-2 border-zinc-300 rounded-lg shadow-lg relative flex flex-col w-full bg-zinc-200 outline-none dark:border-zinc-800 dark:bg-dark-gray drop-shadow-xl focus:outline-none">
                <div className="transition duration-175 ease-in-out">
                  <div className="relative mt-6 text-left px-6 pb-6 text-black flex-auto">
                    <div>
                      <h3 className="text-lg font-bold text-black tracking-wide dark:text-white">
                        Start a Pull Discussion
                      </h3>
                      <p className="text-gray font-medium">
                        Describe your problem above
                        <span className="mx-1 before:content-['•']">
                          <span className="ml-1 text-orange hover:text-zinc-600 transition duration-175 ease-in-out">
                            @
                            {currentUser !== null
                              ? currentUser.displayName
                              : "Error"}
                          </span>
                        </span>
                      </p>
                    </div>

                    <form className="mt-2">
                      <select
                        onChange={(e) => setTagData(e.target.value)}
                        className="text-zinc-400 mt-2 p-1 pl-3 form-select appearance-none block w-full px-3 bg-clip-padding bg-no-repeat rounded transition ease-in-out m-0 font-GTWalsheim bg-background-light dark:bg-background-dark outline-none"
                        required
                      >
                        <option value="none">Select</option>
                        {categorys.map((item, index) => (
                          <option
                            key={index}
                            value={item.index}
                            className="font-GTWalsheim"
                          >
                            {item.title}
                          </option>
                        ))}
                      </select>
                      <input
                        type="text"
                        placeholder="Title"
                        onChange={(e) => setTitleData(e.target.value)}
                        className="mt-2 p-1 pl-3 w-full outline-none rounded-sm dark:bg-background-dark dark:text-white"
                        required
                      />
                      <br />
                      <textarea
                        rows="4"
                        cols="40"
                        placeholder="Describe your issue"
                        onChange={(e) => setTextData(e.target.value)}
                        className="mt-2 mb-3 p-1 pl-3 w-full outline-none rounded-sm resize-none dark:bg-background-dark dark:text-white"
                        required
                      />
                      <br />
                      <input
                        type="button"
                        className="px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium text-sm leading-tight rounded hover:opacity-70 dark:border-white dark:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        value="Submit"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default StartDiscussion;
