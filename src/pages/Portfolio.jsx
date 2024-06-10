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
import baile_dragonSrc from "/assets/images/ideas/baile_dragon.png";
import dragon_jrSrc from "/assets/images/ideas/dragon_jr.jpg";
import dragones_emocionadosSrc from "/assets/images/ideas/dragones_emocionados.jpg";
import puzzle_emocionesSrc from "/assets/images/ideas/puzzle_emociones.png";

// Mejores ideas
import juegos_empatiaSrc from "/assets/images/ideas/juegos_empatia.jpg";
import caza_simbolosSrc from "/assets/images/ideas/caza_simbolos.jpg";
import cuentacuentos_interactivoSrc from "/assets/images/ideas/cuentacuentos_interactivo.jpg";

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
          className="flex w-full md:w-1/2 justify-center items-center p-2"
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
            <Typography
              className="text-center"
              fontSize={"2.5rem"}
              fontWeight={700}
              color="primary"
            >
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
          {/* <LeftSideIdea
            src={guaridaSrc}
            ideaName={"Guarida del dragoncito"}
            description={
              "El niño explora la guarida del dragoncito, donde cada objeto representa una emoción. Al tocar un objeto, se reproduce un sonido correspondiente a la emoción y aparece una imagen que la ilustra. Por ejemplo, un nido acogedor para la felicidad, una montaña de tesoros para la avaricia, una nube de humo para la ira. El niño puede interactuar con los objetos para aprender a identificar las emociones del dragoncito."
            }
          /> */}
          <LeftSideIdea
            src={festival_emocionesSrc}
            ideaName={"Festival de Emociones del Dragoncito"}
            description={
              "El niño participa en un festival donde el dragoncito debe demostrar diferentes emociones a través de sus movimientos y expresiones. El niño guía al dragoncito para que exprese correctamente las emociones, utilizando sonidos y animaciones. Este juego ayuda al niño a desarrollar su propio reconocimiento emocional y empatía."
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
            src={dragones_emocionadosSrc}
            ideaName={"Dragones emocionados"}
            description={
              "El niño escucha un sonido durante unos segundos. Luego de escuchar el sonido, el niño debe elegir la emoción que el dragoncito está sintiendode una lista de opciones. Este juego ayuda a desarrollar la capacidad auditiva y la asociación entre sonidos y emocionesEs un juego donde el jugador solo podra escuchar sonidos del dragon, por medio de este sonido se trasmiten emociones. Una vez que la emocion haya sido descubierta, se revelara la animacion del dragon haciendo el sonido. En caso de errar mientras se juega, se daran cartas pistas para averiguar la expresión del dragón. Hay 7 dragones con diferentes emociones y sonidos, se adivinar todos para ganar el juego."
            }
          />
          {/* <RightSideIdea
            src={memoria_emociones_dragoncitoSrc}
            ideaName={"Juego de memoria con las emociones del dragoncito"}
            description={
              "Se puede establecer un tiempo para que el dragoncito presente una emoción (feliz, triste, enojado, etc). Una vez identificada la emoción, el niño debe recordarla, para conforme va pasando el tiempo ir recordando el orden en que el dragón se sintió de tal manera. Mecánica de pequeños toques en la pantalla, donde se encuentran las posibles emociones y el niño debe elegir el orden. La dificultad sube a medida que se van desplegando más emociones."
            }
          /> */}
          <RightSideIdea
            src={puzzle_emocionesSrc}
            ideaName={"Puzzle de las emociones"}
            description={
              "En este puzzle, tenemos que armar la carita del dragón con una emocion caracteristica, cada pieza tendra una nota pista sobre la emoción para descubrirla antes de armarla. Cada vez que se acierte una pieza, se escuchara un sonido del dragon con respecto a la emoción. En caso de ponerla mal, la pieza se pintará en blanco y negro."
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
            src={baile_dragonSrc}
            ideaName={"El baile dragón"}
            description={
              "El juego se ambienta en una fiesta donde hay dragones bailando, pero cada uno baila con diferentes emociones, entre enojones, tristes o felices. El juego escogerá una emoción al azar, y el jugador que identifique primero al dragón con la emoción, ganará un punto. Ganará el jugador con más puntos al final de escoger a todos los dragones con las emociones."
            }
          />
          <RightSideIdea
            src={dia_lluviosoSrc}
            ideaName={"El dragoncito está triste"}
            description={
              "El contexto en el que se presenta es un día lluvioso y gris, con el dragón sentado cabizbajo. El niño puede dar toques a la pantalla, donde se le despliega opciones que él puede escoger para consolar al dragón o cambiar el ambiente. También pueden hacer que aparezcan amigos que hagan sentir mejor al dragoncito. El objetivo sería que el niño comprenda que cuando se siente triste hay cosas que pueden alegrarlos y ellos pueden hacer algo para ayudar a quien se sienta así."
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
            src={dragon_jrSrc}
            ideaName={"Dragon Jr"}
            description={
              "Este es un juego sobre dragones bebes, como los bebes son mas expresivos, se debera cuidar un bebe que cambia de emocion al azar. Cada vez que el dragón bebe cambie de emoción , se debe descubrir que emoción tiene y elegir la correcta para que le bebe se calme. Se ganará cuando la barra de satisfacción del bebe haya sido completado. Ganará el jugador que primero llene la barra de su dragon bebe"
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
            imageSrc={juegos_empatiaSrc}
            ideaName={"Juegos de empatía"}
            generalDescription={`Juegos donde los niños deben reconocer y responder a las emociones del dragón y otros personajes. Un juego donde el dragonsito muestra diferentes emociones y los niños deben elegir el ítem correcto para consolarlo o alegrarlo(un juguete para alegrar, una manta para consolar). Los niños arrastran y sueltan elementos en la pantalla hacia el personaje, observando su reacción y aprendiendo cómo diferentes acciones pueden afectar las emociones.`}
            selectionDescription={
              "Creemos que esta idea es buena porque combina mecánicas interactivas y sencillas, como arrastrar y soltar, con el desarrollo de habilidades emocionales cruciales para niños de 3 a 4 años. Al reconocer y responder a las emociones del dragón y otros personajes, los niños aprenden a identificar y reaccionar adecuadamente a diferentes estados emocionales. Los elementos visuales y las reacciones animadas proporcionan una respuesta inmediata que refuerza el aprendizaje, manteniendo el interés y la diversión. La variedad de ítems y emociones evita la monotonía y fomenta la empatía, mientras que el feedback positivo motiva a los niños. Además, es una actividad educativa alineada con las metas pedagógicas y puede ser expandida con nuevos personajes y escenarios, garantizando su adaptabilidad y durabilidad como herramienta de aprendizaje y entretenimiento."
            }
          />
          <BestIdea
            imageSrc={caza_simbolosSrc}
            ideaName={"Caza de símbolos emocionales"}
            generalDescription={`Los niños buscan y recogen símbolos que representan diferentes emociones en su entorno. Ejemplos de los símbolos: Un corazón para el amor, una nube para la tristeza, un sol para la alegría. Usando la cámara del dispositivo, los niños escanean el entorno para encontrar y coleccionar estos símbolos. Cada símbolo desbloquea una animación o un mensaje educativo sobre la emoción correspondiente.`}
            selectionDescription={
              "Creemos que esta idea es buena porque utiliza la realidad aumentada para crear una experiencia de juego inmersiva donde los niños buscan y recogen símbolos de emociones en su entorno. Al escanear con la cámara del dispositivo, los niños interactúan activamente con el mundo real, lo que aumenta su implicación y curiosidad. Los símbolos, como un corazón para el amor o una nube para la tristeza, son fáciles de reconocer y asocian de forma intuitiva emociones con imágenes concretas. Cada símbolo desbloquea animaciones o mensajes educativos, proporcionando feedback inmediato y manteniendo el interés de los niños. Este enfoque no solo enseña a identificar y comprender emociones, sino que también promueve el aprendizaje a través del juego y la exploración, fomentando habilidades cognitivas y emocionales. La combinación de tecnología y educación hace que el juego sea atractivo y relevante, adaptable a diferentes entornos y con potencial de expansión mediante la introducción de nuevos símbolos y emociones."
            }
          />
          <BestIdea
            imageSrc={cuentacuentos_interactivoSrc}
            ideaName={"Cuentacuentos interactivo"}
            generalDescription={`Los niños ayudan al dragonsito a contar una historia, seleccionando diferentes emociones para cada parte del cuento. Ellos pueden elegir si un personaje se siente valiente o asustado en una situación específica. Los niños tocan opciones en la pantalla que cambian la dirección de la historia, viendo cómo diferentes emociones afectan el desarrollo de la trama. Pueden escuchar al personaje narrar el cuento con las emociones seleccionadas.`}
            selectionDescription={
              "Creemos que esta idea es buena porque permite a los niños interactuar creativamente con el dragón al contar historias, eligiendo emociones para cada parte del cuento. Los niños seleccionan cómo se siente un personaje en situaciones específicas, como valiente o asustado, y ven cómo estas elecciones afectan la trama. Esta mecánica interactiva y de toma de decisiones fomenta la creatividad y el pensamiento crítico, al mismo tiempo que enseña el impacto de las emociones en las narrativas. Escuchar al personaje narrar el cuento con las emociones seleccionadas proporciona una experiencia auditiva enriquecedora, manteniendo el interés y la atención de los niños. Además, la variabilidad en la historia según las emociones elegidas hace que el juego sea rejugable y siempre novedoso, promoviendo habilidades emocionales y narrativas de manera divertida y educativa."
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
