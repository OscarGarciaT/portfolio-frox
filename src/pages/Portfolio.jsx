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
import oscarAvatar from "/assets/images/avatar/oscar.jpg";
import xavierAvatar from "/assets/images/avatar/xavier.jpg";
import juanAvatar from "/assets/images/avatar/juan.jpg";
import frankAvatar from "/assets/images/avatar/frank.jpg";

import tableroMidiSrc from "/assets/images/intro/MIDI-Tablero.png";
import logoTransparentSrc from "/assets/images/logos/logo_transparent.png";
import avatarPlaceholderSrc from "/assets/images/logos/avatar_placeholder.png";
import logoOpaqueSrc from "/assets/images/logos/logo_opaque.png";
import lightbulbSrc from "/assets/images/misc/lightbulb_transparent.png";

// Ideas
import guaridaSrc from "/assets/images/ideas/guarida.png";
import festival_globosSrc from "/assets/images/ideas/festival_globos.jpg";
import bosque_encantadoSrc from "/assets/images/ideas/bosque_encantado.png";
import rompecabezaSrc from "/assets/images/ideas/rompecabeza.jpg";
import festival_emocionesSrc from "/assets/images/ideas/festival_emociones.png";
import memoria_emociones_dragoncitoSrc from "/assets/images/ideas/memoria_emociones_dragoncito.jpg";
import dragon_amigoSrc from "/assets/images/ideas/dragon_amigo.png";
import escenarios_emocionalesSrc from "/assets/images/ideas/escenarios_emocionales.jpg";
import dia_lluviosoSrc from "/assets/images/ideas/dia_lluvioso.jpg";
import adivina_que_sienteSrc from "/assets/images/ideas/adivina_que_siente.jpg";

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

const LeftSideIdea = ({ src, ideaName, description, marginBottom = 0 }) => {
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
          {/* <Icon color="primary" style={{ fontSize: "2.5rem" }}>
            lightbulb
          </Icon> */}
          <Typography className="text-center  md:text-right w-auto" fontSize={"2.5rem"} fontWeight={700} color="primary">
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
          src={oscarAvatar}
          name={"Oscar Garcia"}
          role={"Programador"}
          delay={0.6}
        />
        <AnimatedAvatar
          src={xavierAvatar}
          name={"Xavier Cedeno"}
          role={"Ideador"}
          delay={0.65}
        />
        <AnimatedAvatar
          src={juanAvatar}
          name={"Juan Jimenez"}
          role={"Director Creativo"}
          delay={0.75}
        />
        <AnimatedAvatar
          src={frankAvatar}
          name={"Frank Vera"}
          role={"Analista"}
          delay={0.7}
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
            src={guaridaSrc}
            ideaName={"Guarida del dragoncito"}
            description={
              "El niño explora la guarida del dragoncito, donde cada objeto representa una emoción. Al tocar un objeto, se reproduce un sonido correspondiente a la emoción y aparece una imagen que la ilustra. Por ejemplo, un nido acogedor para la felicidad, una montaña de tesoros para la avaricia, una nube de humo para la ira. El niño puede interactuar con los objetos para aprender a identificar las emociones del dragoncito."
            }
          />
          <RightSideIdea
            src={festival_globosSrc}
            ideaName={"Festival de globos de colores"}
            description={
              "En esta página el dragonsito se encontrará muy feliz y los niños deben ayudarlo a recoger globos que caen del cielo. Cada globo representa un aspecto de la felicidad y al hacerlo explotar muestra un mensaje de alegría como: ¡bien hecho!. La mecánica es de pulsaciones en los globos para que estos muestren el mensaje y cada color puede representar un aspecto diferente de la felicidad"
            }
          />
          <LeftSideIdea
            src={bosque_encantadoSrc}
            ideaName={"El Bosque Encantado del Dragoncito"}
            description={
              "El niño guía al dragoncito a través de un bosque mágico donde diferentes criaturas expresan distintas emociones. Al interactuar con las criaturas, el niño debe identificar las emociones que estas sienten y ayudar al dragoncito a entenderlas. Por ejemplo, el dragoncito puede encontrar un búho triste por la pérdida de un amigo, y el niño debe ayudarlo a encontrar una manera de animarlo."
            }
          />
          <RightSideIdea
            src={rompecabezaSrc}
            ideaName={"Rompecabeza de emociones"}
            description={
              "Rompecabezas que deben resolverse para ayudar al dragonsito a superar una emoción negativa o celebrar una emoción positiva. Un rompecabezas donde los niños deben juntar piezas para completar una imagen que muestra al personaje feliz con sus amigos. Los niños mueven piezas en la pantalla para formar la imagen correcta. Al completar el puzzle, se activa una animación que muestra a nuestro amigo interactuando positivamente con el entorno."
            }
          />
          <LeftSideIdea
            src={festival_emocionesSrc}
            ideaName={"Festival de Emociones del Dragoncito"}
            description={
              "El niño participa en un festival donde el dragoncito debe demostrar diferentes emociones a través de sus movimientos y expresiones. El niño guía al dragoncito para que exprese correctamente las emociones, utilizando sonidos y animaciones. Este juego ayuda al niño a desarrollar su propio reconocimiento emocional y empatía."
            }
          />
          <RightSideIdea
            src={memoria_emociones_dragoncitoSrc}
            ideaName={"Juego de memoria con las emociones del dragoncito"}
            description={
              "Se puede establecer un tiempo para que el dragoncito presente una emoción (feliz, triste, enojado, etc). Una vez identificada la emoción, el niño debe recordarla, para conforme va pasando el tiempo ir recordando el orden en que el dragón se sintió de tal manera. Mecánica de pequeños toques en la pantalla, donde se encuentran las posibles emociones y el niño debe elegir el orden. La dificultad sube a medida que se van desplegando más emociones."
            }
          />
          <LeftSideIdea
            src={dragon_amigoSrc}
            ideaName={"El Dragoncito Amigo"}
            description={
              "El niño se convierte en el mejor amigo del dragoncito y lo ayuda a superar sus emociones negativas. Al tocar diferentes partes del cuerpo del dragoncito (por ejemplo, la cabeza, la cola, las alas), se reproduce un sonido. El sonido es correspondiente a la emoción que está sintiendo y el dragoncito realiza una acción asociada a ella. El niño puede elegir la opción correcta en un juego de adivinanzas para ayudar al dragoncito a calmarse o sentirse mejor."
            }
          />
          <RightSideIdea
            src={escenarios_emocionalesSrc}
            ideaName={"Escenarios emocionales"}
            description={
              "La página se despliega de manera aleatoria con una emoción distinta en el dragón, junto a esto el entorno estará adecuado conforme a la emoción. Lo primero es que el niño identifique la emoción, tome decisiones en el entorno que van afectando la emoción del personaje. Pasada cierta cantidad de decisiones, por ejemplo, hacer que salga el sol, hacer aparecer amigos, etc. El niño puede nuevamente identificar la emoción que tiene actualmente el personaje"
            }
          />
          <LeftSideIdea
            src={adivina_que_sienteSrc}
            ideaName={"Adivina qué siente el Dragoncito"}
            description={
              "El niño escucha un sonido durante unos segundos. Luego de escuchar el sonido, el niño debe elegir la emoción que el dragoncito está sintiendode una lista de opciones. Este juego ayuda a desarrollar la capacidad auditiva y la asociación entre sonidos y emociones."
            }
          />
          <RightSideIdea
            src={dia_lluviosoSrc}
            ideaName={"El dragoncito está triste"}
            description={
              "El contexto en el que se presenta es un día lluvioso y gris, con el dragón sentado cabizbajo. El niño puede dar toques a la pantalla, donde se le despliega opciones que él puede escoger para consolar al dragón o cambiar el ambiente. También pueden hacer que aparezcan amigos que hagan sentir mejor al dragoncito. El objetivo sería que el niño comprenda que cuando se siente triste hay cosas que pueden alegrarlos y ellos pueden hacer algo para ayudar a quien se sienta así."
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
