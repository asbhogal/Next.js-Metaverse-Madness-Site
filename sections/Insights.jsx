'use client';

import { motion } from "framer-motion";
import styles from "../styles/styles";
import { staggerContainer } from "../utils/motion";
import { InsightCard, TitleText, TypingText } from "../components/exports";
import { insights } from "../constants/data";

const Insights = () => (
    <section className={ `${ styles.paddings } relative z-10` }>
      <motion.div
        variants={ staggerContainer }
        initial="hidden"
        whileInView="show"
        viewport={ { once: 'false', amount: 25 } }
        className={ `${ styles.innerWidth } flex flex-col mx-auto` }
      >
        <TypingText
          title="| Insight"
          textStyles="text-center"
        />

        <TitleText
          title="Insight about metaverse"
          textStyles="text-center"
        />
      </motion.div>
    </section>
);
  
export default Insights;