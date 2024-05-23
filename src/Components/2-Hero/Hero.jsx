import Lottie from "lottie-react";
import devAnimation from '../../animation/dev.json';
import { useRef } from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import "./hero.css";
import {FaWhatsapp} from 'react-icons/fa'
const Hero = () => {
  const lottieRef = useRef();
  return (
    <Element name="hero" >
      <section className="hero flex">
        <div className="left-section  ">
          <div className="parent-avatar flex">
            <motion.img
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1.1)" }}
              transition={{ damping: 6, type: "spring", stiffness: 100 }}
              src="./myImage.png"
              className="avatar"
              alt="myImage"
            />
            <div className="icon-verified"></div>
          </div>

          <h1 className="title">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="title"
            >
              Front end Developer, React Developer.
            </motion.h1>
          </h1>
          <p className="sub-title">
          I’m Hussein Khaled, Web Developer. A self-taught developer with an interest in Computer Science.
          🧑‍💻 Currently specializing in Front-end Development.
          </p>

          <div className="all-icons flex">
            <div>
              <a className="icon icon-twitter" href="" target="_blank"/>
            </div>
            <div>
              <a className="icon" href="https://wa.link/ujqeun" target="_blank"><FaWhatsapp /></a>
            </div>
            <div>
              <a className="icon icon-github" href="https://github.com/HusseinAbdelnasser" target="_blank"/>
            </div>
            <div>
                <a className="icon icon-linkedin" href="" target="_blank"/>
            </div>
          </div>
        </div>

        <div className="right-section animation ">
          <Lottie
            lottieRef={lottieRef}
            className=""
            onLoadedImages={() => {
              // @ts-ignore
              // https://lottiereact.com/
              lottieRef.current.setSpeed(0.5);
            }}
            animationData={devAnimation}
          />
        </div>
      </section>
    </Element>
  );
};

export default Hero;
