import React from 'react'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Full Stack Developer", "Open Source Enthusiast", "Tech Content Creator"];

const demo: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : 150, parseInt(String(Math.random() * 350))));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // Cursor Blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);
  return (
       <section className="w-full h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hey, I'm <span className="text-blue-500">Vishesh 👋</span>
      </motion.h1>

      <motion.h2
        className="text-2xl md:text-4xl font-semibold h-10 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
      </motion.h2>

      <motion.a
        href="#projects"
        className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-700 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Work 🚀
      </motion.a>
      <div>
      Hero intro
      Typewriter text
      CTA button
      Framer Motion animations| Framer Motion
      Component structure
      Responsive layout
    </div>
    </section>
  )
}

export default demo