/**
 * Author: Gabriel
 * Path: ./src/components/SignIn.js
 * Creation-date: 05.02.2022
 **/

import React, { useState, useEffect } from "react";
import Image from "next/image";

/* Firebase */
import {
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/config";

/* Motion */
import { motion } from "framer-motion";

/* Assets */
import Google from "./icons/Google";
import GitHub from "./icons/Github";

/* Components */
import Button from "./Button";

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(() => {
    return auth.currentUser;
  });

  const currentUser = auth.currentUser;

  if (currentUser !== null) {
    console.log("New user loged in! 👨🏽‍💻");
  }

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        signed(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signInWithGithub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        signed(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signed = (result) => {
    setShowModal(false);
    setUser(result.user);
    localStorage.setItem("firebase", JSON.stringify(result.user));
    console.log("User sign in successfully ✌🏼");
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setShowModal(false);
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
                  <div className="relative mt-6 text-center px-6 pb-6 text-black flex-auto">
                    <div>
                      <h3 className="text-lg font-bold text-black tracking-wide dark:text-white">
                        Sign In With
                      </h3>
                      <p className="text-gray font-medium">
                        Sign In to continue
                      </p>
                    </div>

                    <div className="space-x-3 mt-2">
                      <button
                        onClick={() => signInWithGoogle()}
                        className="p-3 rounded-full bg-zinc-300 dark:bg-background-dark"
                      >
                        <Google width="24px" height="24px" />
                      </button>

                      <button
                        onClick={() => signInWithGithub()}
                        className="p-3 rounded-full bg-zinc-300 dark:bg-background-dark"
                      >
                        <GitHub color="gray" width="28px" height="28px" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {currentUser == null ? (
        <div className="align-middle" onClick={() => setShowModal(true)}>
          <Button text="Sign in" route="signin" animation={true} />
        </div>
      ) : (
        <div className="align-middle rounded-full">
          <Image
            src={currentUser.photoURL}
            width={44}
            height={44}
            alt="Avatar"
            className="rounded-full"
          />
        </div>
      )}
    </>
  );
};

export default Login;
