'use client';

import { motion } from "framer-motion";

import styles from '../styles/styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

import heroImg from "../public/assets/cover.png";
import circularCTAStamp from "../public/assets/stamp.png";

const Hero = () => (
    <section className={ `${ styles.yPaddings } pl-6` }>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={ { once: false, amount: 0.25 } }
        className={ `${ styles.innerWidth } mx-auto flex flex-col` }>
        <div className="flex flex-col justify-center items-center relative z-10">
          <motion.h1
            variants={ textVariant(1.1) }
            className={ styles.heroHeading }>
            metaverse
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex justify-center items-center">
            <h1 className="flex items-center">
              <span className={ styles.heroHeading }>Ma</span>
              <div className={ styles.heroDText } />
              <span className={ styles.heroHeading }>ness</span>
            </h1>
          </motion.div>
        </div>

        <motion.div
          variants={ slideIn('right', 'tween', 0.2, 1) }
          className="relative w-full md:-mt-[20px] -mt-[12px]">
              <img 
                src={ heroImg }
                className="w-full sm:h-[500px] h-[350px] -mt-[30px] object-cover rounded-tl-[140px] z-0 relative"
                alt="A fantasy image of planets, comets and stars"
              />

              <a href="#explore">
                <div className="flex justify-end w-full -translate-y-1/2 pr-[40px] relative z-10">
                  <img 
                    src={ circularCTAStamp }
                    alt="A circular image with the words 'explore and enter the metaverse' around the edge and a mouse icon in the middle"
                    className="sm:w-[155px] w-[100px] sm:h-[155px] h-[155px] circular-CTA object-contain"
                  />
                </div>
              </a>
          </motion.div>
      </motion.div>
    </section>
);
  
export default Hero;