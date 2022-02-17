/**
 * Author: Gabriel
 * Path: ./src/pages/_app.js
 * Creation-date: 04.02.2022
 **/

import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

/* Styles */
import "../styles/globals.css";

/* Firebase */
import firebase from "../firebase/config";
import { db } from "../firebase/config";
import { collection, getDocs } from "@firebase/firestore";

/* Components */
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/scrollTop";
import GoTop from "../components/GoTop";

function App({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [documents, setDocuments] = useState([]);

  const fetchData = async () => {
    const collect = collection(db, "forum");
    const data = await getDocs(collect);

    data.docs.forEach((item) => {
      setDocuments((documents) => [...documents, item.data()], item.id);
    });
  };

  useEffect(
    () => {
      fetchData();

      if (documents !== undefined) {
        // Check if all docs were retrived
        console.log("All docs retrived from database 👍🏼");
      }
    },
    documents,
    []
  );

  // console.log(documents); // Display Array of docs

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>{`${
          pathname !== "/" ? "Pull" : "Feed"
        } | Hardware Forum`}</title>
        <meta name="author" content="@gabrielvfonseca" />
        <meta name="description" content="Online Hardware Forum" />
        <meta name="keywords" content="Forum, Hardware, Computers, Errors" />

        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />
        <meta name="theme-color" content="#fff" />

        <link rel="icon" href="flavicon.ico" />
        <link rel="apple-touch-icon" href="flavicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <main className="bg-background-light dark:bg-background-dark dark:text-white font-GTWalsheim subpixel-antialiased tracking-wide leading-relaxed">
        <ScrollToTop />
        <div>
          <Header />
          <Component {...pageProps} docs={documents} />
          <Footer />
        </div>
        <GoTop />
      </main>
    </>
  );
}

export default App;
