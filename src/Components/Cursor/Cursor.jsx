import React, { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import "./cursor.css";

export const Cursor = () => {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const animateMouse = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", animateMouse);

    return () => {
      window.removeEventListener("mousemove", animateMouse);
    };
  }, []);

  const variants = {
    default: {
      x: mouse.x - 15,
      y: mouse.y - 15,
    },
  };
  const cursor = useSelector((state) => state.mouse.move);
  return (
    <Fragment>
      <motion.div
        className="cursor"
        style={cursor ? { display: "none" } : null}
        variants={variants}
        animate="default"
        transition={{ duration: 0.05 }}
      />
    </Fragment>
  );
};
