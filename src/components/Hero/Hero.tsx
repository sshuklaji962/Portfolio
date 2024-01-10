import React, { useContext } from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import { store } from "../../App";
import scroll from "../../utils/helpers/scroll";
import playAudio from "../../utils/helpers/playAudio";

export default function Hero() {
  const [state, dispatch] = useContext(store);

  return (
    <div className={`container-hero ${state.darkmode ? "dark-bg-1" : "light-bg-1"}`}>
      <div className="anchor" id="hero" />
      <motion.div
        className="container-avatar"
        initial={{ opacity: 0, y: 350 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.6 }}
      >
        <img
          className="img-avatar"
          src={require("../../assets/images/avatar_test.jfif")}
        />
      </motion.div>

      <motion.h2
        className={`${state.darkmode ? "white-opacity" : "light-eyebrow"}`}
        initial={{ opacity: 0, y: 140 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          opacity: { duration: 0.2, type: "tween" },
          y: { duration: 0.55, type: "spring" },
        }}
      >
        Satyam Shukla
      </motion.h2>

      <motion.h1
        className={`${state.darkmode ? "dark-heading" : "light-heading"}`}
        initial={{ opacity: 0, y: 400 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.29,
          opacity: { duration: 0.2, type: "tween" },
          y: { duration: 0.6, type: "spring" },
        }}
      >
        {state.language === "english" ? "सॉफ्टवेयर इंजीनियर" : "Software Engineer"}
      </motion.h1>

      <motion.h4
        className={`${state.darkmode ? "white-opacity-max" : "light-phrase"}`}
        initial={{ opacity: 0, y: 140 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          opacity: { duration: 0.15, type: "tween" },
          y: { duration: 0.55, type: "spring" },
        }}
      >
        {state.language === "english" ? "मैं रचनात्मक प्रक्रियाओं और आजीवन सीखने में विश्वास करता हूं। मैं हमेशा नई सर्वोत्तम प्रथाओं और वर्कफ़्लोज़ के लिए उत्सुक रहता हूँ।" : "I believe in creative processes & lifelong learning. I am always curious for new best practices and workflows."}
      </motion.h4>

      <motion.button
        onClick={(e) => scroll("about-me")}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
        initial={{ opacity: 0, y: 140 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
          opacity: { duration: 0.15, type: "tween" },
          y: { duration: 0.4, type: "spring" },
        }}
        /* Custom Styling */
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          /* Add any other button styles here */
        }}
      >
        <h3>{state.language === "english" ? "और अधिक जानकारी प्राप्त करें" : "Find out more"}</h3>
        {/* <img src={require("../../assets/images/arrow.png")} /> */}
      </motion.button>
    </div>
  );
}
