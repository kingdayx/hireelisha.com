import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProgressBar(props) {
  const [bar, setBar] = useState(false);
  const { completed, custom } = props;

  const handleBar = () => {
    const offset = window.scrollY;
    if (offset > 1333) {
      setBar(true);
    } else {
      setBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleBar);
  });

  const containerStyles = {
    width: "89%",
    backgroundColor: "#eee",
  };

  const fillerStyles = {
    width: `${completed}%`,
    backgroundColor: "black",
    textAlign: "right",
    marginRight: "auto",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  };

  const labelStyles = {
    color: "white",
    fontWeight: "bold",
  };
  const variants = {
    initial: { width: "0%", opacity: 0 },
    animate: (custom) => ({
      opacity: 1,
      transition: {
        duration: 1,
        delay: custom * 0.2,
      },
      width: `${completed}%`,
    }),
  };

  return (
    <div style={containerStyles}>
      <motion.div
        initial="initial"
        animate={bar ? "animate" : "initial"}
        custom={custom}
        variants={variants}
        style={fillerStyles}
      >
        <span style={labelStyles}>{`${completed}%`}</span>
      </motion.div>
    </div>
  );
}
