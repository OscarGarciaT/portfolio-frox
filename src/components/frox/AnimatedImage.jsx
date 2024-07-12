import { motion } from "framer-motion";

import FrxImage from "../multimedia/FrxImage";

const AnimatedImage = ({ src, hSlide, vSlide, width = 300 }) => {
  const hSlideValues = {
    left: [-100, 0],
    right: [100, 0],
  };

  const vSlideValues = {
    up: [100, 0],
    down: [-100, 0],
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.05 }}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        ...(hSlide ? { x: hSlideValues[hSlide] } : {}),
        ...(vSlide ? { y: vSlideValues[vSlide] } : {}),
      }}
      viewport={{ once: true }}
      transition={{ delay: 0.15 }}
      className="flex w-full md:w-1/3 justify-center items-center"
    >
      <FrxImage src={src} width={width} />
    </motion.div>
  );
};

export default AnimatedImage;