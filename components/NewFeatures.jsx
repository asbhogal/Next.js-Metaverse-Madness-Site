'use client';

import styles from "../styles/styles";

const NewFeatures = ({ imgUrl, imgAlt, title, subtitle }) => (
    <div className="flex flex-col flex-1 sm:max-w-[250px] min-w-[210px]">
        <div className={ `${ styles.flexCenter } w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]` }>
            <img
                src={ imgUrl }
                alt={ imgAlt }
                className="w-1/2 h-1/2 object-contain"
            />
        </div>
        <h3 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">{ title }</h3>
        <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">{ subtitle }</p>
    </div>
);
  
  export default NewFeatures;