import { Typography } from "@mui/material";
import { motion } from "framer-motion";

import avatarPlaceholderSrc from "/assets/images/logos/avatar_placeholder.png";

const AnimatedAvatar = ({
  src = avatarPlaceholderSrc,
  alt = "image",
  delay,
  name,
  role,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        delay: delay,
      }}
      viewport={{ once: true }}
      className="flex flex-col justify-around items-center pb-7  md:pb-0"
    >
      <div style={{ width: 150 }} className="relative overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover rounded-full"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          delay: delay + 0.05,
        }}
      >
        <Typography fontWeight={700}>{name}</Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          delay: delay + 0.1,
        }}
      >
        <Typography>{role}</Typography>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedAvatar;