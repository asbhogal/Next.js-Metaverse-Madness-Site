'use client';

import Image from "next/image";
import { motion } from "framer-motion";

import styles from '../styles/styles';
import { navVariants } from '../utils/motion';

import searchIcon from "../public/assets/search.svg";
import hamburgerIcon from "../public/assets/menu.svg";

const Navbar = () => (
    <motion.nav
        variants={ navVariants }
        initial="hidden"
        whileInView="show"
        className={ `${ styles.xPaddings } py-8 relative` } >
        <div className="absolute w-[50%] inset-0 gradient-01" />
        <div className="background-blur-top w-full h-full" />
        <div className={ `${ styles.innerWidth } mx-auto flex justify-between items-center gap-8` }>
            <Image 
                src={ searchIcon }
                alt="search icon"
                className="object-contain"
                width={24}
                height={24}
            />
            <h2 className="font-extrabold text-[24px] leading-[30px] text-white uppercase">metaversus</h2>
            <Image
                src={ hamburgerIcon }
                alt="hamburger menu icon"
                className="object-contain"
                width={24}
                height={24}
            />
        </div>
    </motion.nav>
);
  
export default Navbar;