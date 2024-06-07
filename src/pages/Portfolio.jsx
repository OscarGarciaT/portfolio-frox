import { Typography } from "@mui/material";
import { motion } from "framer-motion";

// Images
import tableroMidiSrc from "/assets/images/intro/MIDI-Tablero.png";
import logoTransparentSrc from "/assets/images/logos/logo_transparent.png";
import avatarPlaceholderSrc from "/assets/images/logos/avatar_placeholder.png";
import logoOpaqueSrc from "/assets/images/logos/logo_opaque.png";

// Components
import FrxImage from "../components/multimedia/FrxImage";

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
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        ...(hSlide ? { x: hSlideValues[hSlide] } : {}),
        ...(vSlide ? { y: vSlideValues[vSlide] } : {}),
      }}
      viewport={{ once: true }}
      className="flex w-full md:w-1/3 justify-center items-center"
    >
      <FrxImage src={src} width={width} />
    </motion.div>
  );
};

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
          name={"Oscar Garcia"}
          role={"Programador"}
          delay={0.6}
        />
        <AnimatedAvatar name={"Xavier Cedeno"} role={"Ideador"} delay={0.65} />
        <AnimatedAvatar name={"Frank Vera"} role={"Analista"} delay={0.7} />
        <AnimatedAvatar
          name={"Juan Jimenez"}
          role={"Director Creativo"}
          delay={0.75}
        />
      </div>
    </div>
  );
};

const IntroMIDI = () => {
  return (
    <div className="h-min flex flex-col md:flex-row justify-between items-center pt-10">
      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-2/3 mb-6 md:mb-1 md:mr-10 "
      >
        <Typography variant="h4" className="mb-5 text-center md:text-left">
          Proyecto MIDI - Realidad Aumentada
        </Typography>
        <Typography fontWeight={400} fontSize={18} className="text-justify">
          Este proyecto se enfoca en desarrollar una experiencia de realidad
          aumentada en forma de videojuego para niños de 3 a 4 años. En este
          juego, los jugadores tienen como objetivo descubrir las emociones de
          Gummy, el dragón protagonista. Gracias a la tecnología de realidad
          aumentada, los niños podrán ver a Gummy interactuando dentro de su
          entorno real, lo que hará que su experiencia sea mucho más
          emocionante. Las mecánicas del juego serán sencillas y fáciles de
          aprender, aprovechando al máximo el potencial que ofrece la realidad
          aumentada. Este enfoque no solo busca entretener a los pequeños, sino
          también fomentar su desarrollo emocional y cognitivo a través de una
          interacción lúdica y envolvente.
        </Typography>
      </motion.div>
      <AnimatedImage src={tableroMidiSrc} hSlide="right" />
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="flex flex-col px-6 py-6">
      <GroupLogo />
      <IntroMIDI />
    </div>
  );
};

export default Portfolio;
