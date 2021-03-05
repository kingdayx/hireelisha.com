import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = (props) => {
  const backdrop = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        variants={backdrop}
        animate="visible"
        initial="hidden"
        className="backdrop"
      ></motion.div>
    </AnimatePresence>
  );
};

export default Modal;
