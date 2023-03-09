'use client';

import { motion } from "framer-motion";
import styles from "../styles/styles";
import { staggerContainer } from "../utils/motion";
import { InsightCard, TitleText, TypingText } from "../components/exports";
import { insights } from "../constants/data";

const Insights = () => (
    <section className={ `${ styles.paddings } relative z-10` }>
      <div className="gradient-04 z-0"/>
      <motion.div
        variants={ staggerContainer }
        initial="hidden"
        whileInView="show"
        viewport={ { once: 'false', amount: 0.25 } }
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

        <div className="met-[50px] flex flex-col gap-[30px]">
          { insights.map((item, index) => (
            <InsightCard
              key={ `insight-${ index }` }
              { ...item }
              index={ index + 1 }
            />
          )) }
        </div>

      </motion.div>
    </section>
);
  
export default Insights;