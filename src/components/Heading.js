/**
 * Author: Gabriel
 * Path: ./src/components/Heading.js
 * Creation-date: 05.02.2022
 **/

import propTypes from "prop-types";

/* Motion */
import { motion } from "framer-motion";

const Heading = ({ title, description }) => (
  <div className="mt-10 mb-8 leading-tight w-64">
    <h2 className="text-3xl mt-2 font-regular">{title}</h2>
    <p className="text-gray mt-1">{description}</p>
  </div>
);

Heading.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

export default Heading;
