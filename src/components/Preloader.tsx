"use client";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  const animationVariants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
      display: "none",
      transition: {
        opacity: {
          duration: 1.5,
          delay: 3,
        },
        display: {
          delay: 3 + 1.5,
        },
      },
    },
  };

  useEffect(() => {
    if (hasLoadedOnce === false) {
      document.body.style.overflow = "hidden";
      // Re-enable scroll after animation
      const timeout = setTimeout(() => {
        document.body.style.overflow = "";
        setHasLoadedOnce(true);
      }, 4500);

      return () => clearTimeout(timeout);
    }
  }, [hasLoadedOnce]);

  if (hasLoadedOnce === true) {
    return null;
  }

  return (
    <motion.div
      initial="visible"
      variants={animationVariants}
      animate={["hidden"]}
      className="bg-accent fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center"
    >
      <Logo />
    </motion.div>
  );
};

export default Preloader;
