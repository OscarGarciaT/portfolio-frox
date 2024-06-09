import {
  Divider,
  Icon,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

// Images
import tableroMidiSrc from "/assets/images/intro/MIDI-Tablero.png";
import logoTransparentSrc from "/assets/images/logos/logo_transparent.png";
import avatarPlaceholderSrc from "/assets/images/logos/avatar_placeholder.png";
import logoOpaqueSrc from "/assets/images/logos/logo_opaque.png";
import lightbulbSrc from "/assets/images/misc/lightbulb_transparent.png";

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

const LeftSideIdea = ({ src, ideaName, description }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row  self-center justify-center w-full md:w-2/3 pt-6">
      <AnimatedImage src={src} hSlide="left" />
      <div className="flex flex-col items-center md:items-start pt-9 px-5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: [100, 0] }}
          viewport={{ once: true }}
          className="flex items-center"
        >
          <Icon color="primary" style={{ fontSize: "2.5rem" }}>
            lightbulb
          </Icon>
          <Typography fontSize={"2.5rem"} fontWeight={700} color="primary">
            {ideaName}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: [100, 0] }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full md:w-3/4 text-center md:text-left"
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
          <Icon color="primary" style={{ fontSize: "2.5rem" }}>
            lightbulb
          </Icon>
          <Typography fontSize={"2.5rem"} fontWeight={700} color="primary">
            {ideaName}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: [100, 0] }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full md:w-3/4 text-center  md:text-right"
        >
          <Typography>{description}</Typography>
        </motion.div>
      </div>
      <AnimatedImage src={src} hSlide="right" />
    </div>
  );
};

const BestIdea = ({
  imageSrc,
  ideaName,
  generalDescription,
  selectionDescription,
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Paper className="my-5">
      <div className="flex flex-col md:flex-row w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex w-full md:w-1/2 justify-center items-center"
        >
          <FrxImage src={imageSrc} width={"100%"} />
        </motion.div>
        <Divider
          orientation={matches ? "vertical" : "horizontal"}
          variant="middle"
          flexItem
        />
        <div className="flex flex-col w-full md:w-1/2 justify-start items-start pt-7 px-7">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center mb-6 self-center"
          >
            <Icon color="primary" style={{ fontSize: "2.5rem" }}>
              lightbulb
            </Icon>
            <Typography fontSize={"2.5rem"} fontWeight={700} color="primary">
              {ideaName}
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="w-3/4 text-left mb-5"
          >
            <Typography fontSize={"1.3rem"} fontWeight={600}>
              Descripcion
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full text-justify mb-5"
          >
            <Typography fontSize={"1.1rem"}>{generalDescription}</Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="w-3/4 text-left mb-5"
          >
            <Typography fontSize={"1.3rem"} fontWeight={600}>
              Por que creemos que es buena?
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full text-justify mb-5"
          >
            <Typography fontSize={"1.1rem"}>{selectionDescription}</Typography>
          </motion.div>
        </div>
      </div>
    </Paper>
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
          Proyecto MIDI - Emociones en Realidad Aumentada
        </Typography>
        <Typography
          fontWeight={400}
          fontSize={"1.1rem"}
          className="text-justify"
        >
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

const IdeacionMIDI = () => {
  return (
    <div className="h-min flex flex-col md:flex-row justify-between items-center pt-10">
      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full mb-6 md:mb-1 md:mr-10 "
      >
        <Typography variant="h4" className="mb-5 text-center md:text-left">
          Ideacion
        </Typography>
        <Typography
          fontWeight={400}
          fontSize={"1.1rem"}
          className="text-justify"
        >
          Para llevar a cabo este proyecto, seguimos un proceso de ideación
          utilizando técnicas como &quot;Storyboarding&quot;, &quot;Shout it
          Out&quot; en grupo y también &quot;Research&quot;. Esto nos permitió
          realizar una investigación para comprender mejor cuáles son las
          tendencias actuales y por qué son populares. Después de este proceso,
          generamos una serie de ideas que se presentan a continuación.
        </Typography>
        <div className="flex flex-col w-full justify-center items-center pt-20">
          <LeftSideIdea
            src={tableroMidiSrc}
            ideaName={"Idea 1"}
            description={
              "Nulla laoreet augue nisi, non ornare orci sagittis ac"
            }
          />
          <RightSideIdea
            src={tableroMidiSrc}
            ideaName={"Idea 2"}
            description={
              "Nulla laoreet augue nisi, non ornare orci sagittis ac"
            }
          />
          <LeftSideIdea
            src={tableroMidiSrc}
            ideaName={"Idea 3"}
            description={
              "Nulla laoreet augue nisi, non ornare orci sagittis ac"
            }
          />
          <RightSideIdea
            src={tableroMidiSrc}
            ideaName={"Idea 4"}
            description={
              "Nulla laoreet augue nisi, non ornare orci sagittis ac"
            }
          />
          <LeftSideIdea
            src={tableroMidiSrc}
            ideaName={"Idea 5"}
            description={
              "Nulla laoreet augue nisi, non ornare orci sagittis ac"
            }
          />
          <RightSideIdea
            src={tableroMidiSrc}
            ideaName={"Idea 6"}
            description={
              "Nulla laoreet augue nisi, non ornare orci sagittis ac"
            }
          />
          <LeftSideIdea
            src={tableroMidiSrc}
            ideaName={"Idea 7"}
            description={
              "Nulla laoreet augue nisi, non ornare orci sagittis ac"
            }
          />
          <RightSideIdea
            src={tableroMidiSrc}
            ideaName={"Idea 8"}
            description={
              "Nulla laoreet augue nisi, non ornare orci sagittis ac"
            }
          />
          <LeftSideIdea
            src={tableroMidiSrc}
            ideaName={"Idea 9"}
            description={
              "Nulla laoreet augue nisi, non ornare orci sagittis ac"
            }
          />
          <RightSideIdea
            src={tableroMidiSrc}
            ideaName={"Idea 10"}
            description={
              "Nulla laoreet augue nisi, non ornare orci sagittis ac"
            }
          />
        </div>
      </motion.div>
    </div>
  );
};

const MejoresIdeasMIDI = () => {
  return (
    <div className="h-min flex flex-col md:flex-row justify-between items-center pt-10">
      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full mb-6 md:mb-1 md:mr-10 "
      >
        <Divider />
        <div className="flex justify-center items-center my-5 mx-5 md:mx-20 rounded-lg  bg-green-200">
          <motion.div className="flex w-full justify-center items-center">
            <Typography className="text-center" fontSize={"4rem"}>
              Mejores Ideas
            </Typography>
          </motion.div>
        </div>
        <Divider />
        <div className="flex flex-col w-full pt-5">
          <BestIdea
            imageSrc={tableroMidiSrc}
            ideaName={"Idea 1"}
            generalDescription={`Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Donec in consectetur enim. 
              Quisque volutpat diam id ligula dapibus dignissim. Cras facilisis 
              purus sit amet urna varius mattis. Phasellus tristique arcu at erat lobortis,
              eu condimentum arcu viverra. Mauris nec leo sed dolor pulvinar placerat non 
              sed dolor. Praesent est sem, eleifend a bibendum in, congue tincidunt nibh. 
              Phasellus tincidunt blandit tortor mollis sodales. Nullam cursus tortor libero,
              a aliquam est ultrices vitae. Proin ut diam suscipit, congue ex condimentum, 
              interdum ex. In sit amet diam egestas, aliquet justo eu, lobortis odio. 
              Quisque finibus ligula vel erat egestas rhoncus. Nullam eu felis et turpis 
              lobortis dapibus at vel felis. Proin elit magna, sollicitudin ut feugiat in, 
              aliquet sed tellus. Cras auctor congue est in placerat.`}
            selectionDescription={
              "Aliquam vulputate risus lorem. Vivamus efficitur felis ut velit dignissim placerat. Suspendisse potenti."
            }
          />
          <BestIdea
            imageSrc={tableroMidiSrc}
            ideaName={"Idea 2"}
            generalDescription={`Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Donec in consectetur enim. 
              Quisque volutpat diam id ligula dapibus dignissim. Cras facilisis 
              purus sit amet urna varius mattis. Phasellus tristique arcu at erat lobortis,
              eu condimentum arcu viverra. Mauris nec leo sed dolor pulvinar placerat non 
              sed dolor. Praesent est sem, eleifend a bibendum in, congue tincidunt nibh. 
              Phasellus tincidunt blandit tortor mollis sodales. Nullam cursus tortor libero,
              a aliquam est ultrices vitae. Proin ut diam suscipit, congue ex condimentum, 
              interdum ex. In sit amet diam egestas, aliquet justo eu, lobortis odio. 
              Quisque finibus ligula vel erat egestas rhoncus. Nullam eu felis et turpis 
              lobortis dapibus at vel felis. Proin elit magna, sollicitudin ut feugiat in, 
              aliquet sed tellus. Cras auctor congue est in placerat.`}
            selectionDescription={
              "Aliquam vulputate risus lorem. Vivamus efficitur felis ut velit dignissim placerat. Suspendisse potenti."
            }
          />
          <BestIdea
            imageSrc={tableroMidiSrc}
            ideaName={"Idea 3"}
            generalDescription={`Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Donec in consectetur enim. 
              Quisque volutpat diam id ligula dapibus dignissim. Cras facilisis 
              purus sit amet urna varius mattis. Phasellus tristique arcu at erat lobortis,
              eu condimentum arcu viverra. Mauris nec leo sed dolor pulvinar placerat non 
              sed dolor. Praesent est sem, eleifend a bibendum in, congue tincidunt nibh. 
              Phasellus tincidunt blandit tortor mollis sodales. Nullam cursus tortor libero,
              a aliquam est ultrices vitae. Proin ut diam suscipit, congue ex condimentum, 
              interdum ex. In sit amet diam egestas, aliquet justo eu, lobortis odio. 
              Quisque finibus ligula vel erat egestas rhoncus. Nullam eu felis et turpis 
              lobortis dapibus at vel felis. Proin elit magna, sollicitudin ut feugiat in, 
              aliquet sed tellus. Cras auctor congue est in placerat.`}
            selectionDescription={
              "Aliquam vulputate risus lorem. Vivamus efficitur felis ut velit dignissim placerat. Suspendisse potenti."
            }
          />
          <Divider className="mt-5" />
        </div>
      </motion.div>
    </div>
  );
};

const Portfolio = ({ refs }) => {
  return (
    <div className="flex flex-col px-6 py-6">
      <div ref={refs.somos}>
        <GroupLogo />
      </div>
      <div ref={refs.intro}>
        <IntroMIDI />
      </div>
      <div ref={refs.ideacion}>
        <IdeacionMIDI />
      </div>
      <div ref={refs.mejoresideas}>
        <MejoresIdeasMIDI />
      </div>
    </div>
  );
};

export default Portfolio;
