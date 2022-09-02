import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.span
      animate={{
        y: ["0%", "-30%"],
      }}
      transition={{
        yoyo: Infinity,
      }}
    >
      Loading...
    </motion.span>
  );
}
