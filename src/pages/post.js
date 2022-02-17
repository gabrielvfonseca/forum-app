/**
 * Author: Gabriel
 * Path: ./src/pages/post.js
 * Creation-date: 08.02.2022
 **/

import React from "react";

/* Pages */
import Index from "./index";

/* Components */
import StartDiscussion from "../components/StartDiscussion";

export default function Pull() {
  return (
    <>
      <StartDiscussion />
      <Index />
    </>
  );
}
