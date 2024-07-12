import { Typography } from "@mui/material";
import { motion } from "framer-motion";

import AnimatedImage from "./AnimatedImage";

const LeftSideIdea = ({ src, ideaName, description }) => {
  return (
    <div
      className={`flex flex-col-reverse md:flex-row  self-center justify-center w-full md:w-2/3 pt-6 mb-20`}
    >
      <AnimatedImage src={src} hSlide="left" />
      <div className="flex flex-col items-center md:items-start pt-9 px-5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: [100, 0] }}
          viewport={{ once: true }}
          className="flex items-center"
        >
          {/* <Icon color="primary" style={{ fontSize: "2.5rem" }}>
            lightbulb
          </Icon> */}
          <Typography
            className="text-center md:text-left"
            fontSize={"2.5rem"}
            fontWeight={700}
            color="primary"
          >
            {ideaName}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: [100, 0] }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full md:w-3/4 text-center md:text-left my-3 md:my-0"
        >
          <Typography>{description}</Typography>
        </motion.div>
      </div>
    </div>
  );
};

const RightSideIdea = ({ src, ideaName, description }) => {
  return (
    <div className="flex flex-col md:flex-row self-center justify-center w-full md:w-2/3 pt-6">
      <div className="flex flex-col items-center md:items-end pt-9 px-5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: [100, 0] }}
          viewport={{ once: true }}
          className="flex items-center"
        >
          {/* <Icon color="primary" style={{ fontSize: "2.5rem" }}>
            lightbulb
          </Icon> */}
          <Typography
            className="text-center  md:text-right w-auto"
            fontSize={"2.5rem"}
            fontWeight={700}
            color="primary"
          >
            {ideaName}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: [100, 0] }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full md:w-3/4 text-center md:text-right my-3 md:my-0"
        >
          <Typography>{description}</Typography>
        </motion.div>
      </div>
      <AnimatedImage src={src} hSlide="right" />
    </div>
  );
};

export { RightSideIdea, LeftSideIdea };