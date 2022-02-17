/**
 * Author: Gabriel
 * Path: ./src/firebase/docs.js
 * Creation-date: 14.02.2022
 **/

import { useState, useEffect } from "react";

import { db } from "../firebase/config";
import { collection, getDocs } from "@firebase/firestore";

const firebase = () => {
  const [id, setIds] = useState([]);

  const fetchData = async () => {
    const collect = collection(db, "forum");
    const data = await getDocs(collect);

    data.docs.forEach((item) => {
      setIds((id) => [...id, item.data()]);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(id);

  console.log("All docs retrived from database 👍🏼");

  return <div>{id && id.map((item, index) => <h4>{item.title}</h4>)}</div>;
};

export default firebase;
