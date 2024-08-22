import { motion } from "framer-motion";

import FrxImage from "../multimedia/FrxImage";
import AnimatedAvatar from "../frox/AnimatedAvatar";

// Images
import logoTransparentSrc from "/assets/images/logos/logo_transparent.png";
import oscarAvatar from "/assets/images/avatar/oscar.jpg";
import xavierAvatar from "/assets/images/avatar/xavier.jpg";
import juanAvatar from "/assets/images/avatar/juan.jpg";
import frankAvatar from "/assets/images/avatar/frank.jpg";

const GroupLogo = () => {
  return (
    <div className="h-auto md:h-svh flex flex-col justify-around items-center">
      <motion.div
        initial={{ opacity: 0, scale: 3 }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{ once: true }}
        className="flex w-1/3 justify-center items-center pb-10 md:pb-0"
      >
        <FrxImage src={logoTransparentSrc} width={200} />
      </motion.div>
      <div className="flex flex-col md:flex-row w-full justify-around items-center">
        <AnimatedAvatar
          src={oscarAvatar}
          name={"Oscar Garcia"}
          role={"Game Programmer"}
          delay={0.6}
        />
        <AnimatedAvatar
          src={xavierAvatar}
          name={"Xavier Cedeno"}
          role={"Game Designer"}
          delay={0.65}
        />
        {/* <AnimatedAvatar
          src={juanAvatar}
          name={"Juan Jimenez"}
          role={"Game Designer"}
          delay={0.7}
        />
        <AnimatedAvatar
          src={frankAvatar}
          name={"Frank Vera"}
          role={"Game Designer"}
          delay={0.75}
        /> */}
      </div>
    </div>
  );
};

export default GroupLogo;
