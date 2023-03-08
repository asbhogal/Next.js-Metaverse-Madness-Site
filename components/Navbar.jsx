'use client';

import { motion } from "framer-motion";

import styles from '../styles/styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
    <motion.nav
        variants={ navVariants }
        initial="hidden"
        whileInView="show"
        className={ `${ styles.xPaddings } py-8 relative` } >
        <div className="absolute w-[50%] inset-0 gradient-01" />
        <div className="background-blur-top w-full h-full" />
        <div className={ `${ styles.innerWidth } mx-auto flex justify-between items-center gap-8` }>
            <img 
                src="assets/search.svg"
                alt="search icon"
                className="object-contain"
                width={24}
                height={24}
            />
            <h2 className="font-extrabold text-[24px] leading-[30px] text-white uppercase">metaversus</h2>
            <img
                src="./assets/menu.svg"
                alt="hamburger menu icon"
                className="object-contain"
                width={24}
                height={24}
            />
        </div>
    </motion.nav>
);
  
export default Navbar;