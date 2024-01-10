import React, { useContext, useRef } from 'react';
import { store } from '../../App';
import { motion } from "framer-motion";
import './IntroCards.css';

export default function IntroCards () {
  const [state, dispatch] = useContext(store);
  const scrollRef = useRef(null);

  return (
    <div className="container-intro">
      <section className={`left-intro big-card ${state.darkmode ? "dark-card" : "light-card"}`}>
        <h3 className={`${state.darkmode ? "dark-heading" : "light-heading"}`}>{state.language === "english" ? "उत्साही डेवलपर और समस्या समाधानकर्ता" : "Passionate Developer and Problem Solver"}</h3>
        <p className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>{state.language === "english" ? "मैं HTML, CSS और JavaScript में मजबूत आधार वाला एक उत्साही डेवलपर हूं। वर्तमान में, मैं राज्य प्रबंधन के लिए Redux या Context का उपयोग करके सक्रिय रूप से React पर सीख रहा हूं और काम कर रहा हूं। विकास से परे, मैं एक शौकीन समस्या समाधानकर्ता हूं, जो लीटकोड और कोडफोर्स जैसे प्लेटफार्मों पर एल्गोरिथम चुनौतियों से निपटता है। मेरा लक्ष्य अपने कौशल को लगातार विकसित करना और नई तकनीकों का पता लगाना है।" : "I'm a passionate developer with a strong foundation in HTML, CSS, and JavaScript. Currently, I'm actively learning and working on React, using Redux or Context for state management. Beyond development, I'm an avid problem solver, tackling algorithmic challenges on platforms like LeetCode and Codeforces. My goal is to continuously develop my skills and explore new technologies."}</p>
      </section>

      <section className="right-intro" ref={scrollRef}>
        <motion.div className={`small-card ${state.darkmode ? "dark-card" : "light-card"}`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
            <div className="card-top">
                <h2 className="num green">800</h2>
                <h2 className="sign green-sign">+</h2>
            </div>
            <h4 className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>LeetCode Problems</h4>
        </motion.div>

        <motion.div className={`small-card ${state.darkmode ? "dark-card" : "light-card"}`}
            initial={{ scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
        >
            <div className="card-top">
                <h2 className="num place blue">{state.language === "english" ? "1691" : "1691"}</h2>
            </div>
            <h4 className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>{state.language === "english" ? `अब तक की उच्चतम लीटकोड प्रतियोगिता रेटिंग।` : `Highest leetcode contest rating till now.`}</h4>
        </motion.div>

        <motion.div className={`small-card ${state.darkmode ? "dark-card" : "light-card"}`}
            initial={{ scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
        >
            <div className="card-top">
                <h2 className="num purple">1</h2>
                <h2 className="sign purple-sign">+</h2>
            </div>
            <h4 className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>{state.language === "english" ? "अनुभव" : "Experience"}</h4>  
        </motion.div>

        <motion.div className={`small-card ${state.darkmode ? "dark-card" : "light-card"}`}
            initial={{ scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
        >
            <div className="card-top">
                <h2 className="num red">100</h2>
                <h2 className="sign percent red-sign">%</h2>
            </div>
            <h4 className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>{state.language === "english" ? "जुनून" : "passion"}</h4>
        </motion.div>
      </section>
    </div>
  );
}
