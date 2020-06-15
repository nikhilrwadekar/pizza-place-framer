import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Variant
const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8, // Helps stop the spring quiet quickly (and lets the other animations in queue well within time)
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  exit: { x: "-100vw", transition: { ease: "easeInOut" } }, // Call it whatever but refer it
};

const nextVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring" },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza, setShowModal }) => {
  // Run once
  useEffect(() => {
    setTimeout(() => {
      // Starts the timer even if the tab isn't active.
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="container order"
    >
      <h2>Thank you for your order :)</h2>

      {/* Needs Transition Orchestration for the animation to be noticable (otherwise it just animates off the screen) */}
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
