/**
 * Author: Gabriel
 * Path: ./src/components/scrollTop.js
 * Creation-date: 04.02.2022
 **/

import { useEffect } from "react";
import { useRouter } from "next/router";

const ScrollTop = (props) => {
  const { pathname } = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{props.children}</>;
};

export default ScrollTop;
