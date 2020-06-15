import React from "react";
import { motion, useCycle } from "framer-motion"; // useCycle - one of the many useCases: Cycle through animations

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  // Cycle between Animations (One of the use cases for useCycle!)
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  return (
    <>
      <motion.div
        variants={loaderVariants}
        animate={animation}
        className="loader"
      ></motion.div>

      <div
        onClick={() => {
          cycleAnimation();
        }}
      >
        Cycle Loader
      </div>
    </>
  );
};

export default Loader;
