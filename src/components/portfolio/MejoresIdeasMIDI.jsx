import { Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";

import BestIdea from "../frox/BestIdea";

import caza_simbolosSrc from "/assets/images/ideas/caza_simbolos.jpg";
import cuentacuentos_interactivoSrc from "/assets/images/ideas/cuentacuentos_interactivo.jpg";
import juegos_empatiaSrc from "/assets/images/ideas/juegos_empatia.jpg";

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
            generalDescription={`Juegos donde los niños deben reconocer y responder a las emociones del dragón y otros personajes. Un juego donde el dragonsito muestra diferentes emociones y los niños deben elegir el ítem correcto para consolarlo o alegrarlo(un juguete para alegrar, una manta para consolar). Los niños arrastran y sueltan elementos en la pantalla hacia el personaje, observando su reacción y aprendiendo cómo diferentes acciones pueden afectar las emociones.`}
            selectionDescription={
              "Creemos que esta idea es buena porque combina mecánicas interactivas y sencillas, como arrastrar y soltar, con el desarrollo de habilidades emocionales cruciales para niños de 3 a 4 años. Al reconocer y responder a las emociones del dragón y otros personajes, los niños aprenden a identificar y reaccionar adecuadamente a diferentes estados emocionales. Los elementos visuales y las reacciones animadas proporcionan una respuesta inmediata que refuerza el aprendizaje, manteniendo el interés y la diversión. La variedad de ítems y emociones evita la monotonía y fomenta la empatía, mientras que el feedback positivo motiva a los niños. Además, es una actividad educativa alineada con las metas pedagógicas y puede ser expandida con nuevos personajes y escenarios, garantizando su adaptabilidad y durabilidad como herramienta de aprendizaje y entretenimiento."
            }
          />
          <BestIdea
            imageSrc={caza_simbolosSrc}
            ideaName={"Caza de símbolos emocionales"}
            generalDescription={`Los niños buscan y recogen símbolos que representan diferentes emociones en su entorno. Ejemplos de los símbolos: Un corazón para el amor, una nube para la tristeza, un sol para la alegría. Usando la cámara del dispositivo, los niños escanean el entorno para encontrar y coleccionar estos símbolos. Cada símbolo desbloquea una animación o un mensaje educativo sobre la emoción correspondiente.`}
            selectionDescription={
              "Creemos que esta idea es buena porque utiliza la realidad aumentada para crear una experiencia de juego inmersiva donde los niños buscan y recogen símbolos de emociones en su entorno. Al escanear con la cámara del dispositivo, los niños interactúan activamente con el mundo real, lo que aumenta su implicación y curiosidad. Los símbolos, como un corazón para el amor o una nube para la tristeza, son fáciles de reconocer y asocian de forma intuitiva emociones con imágenes concretas. Cada símbolo desbloquea animaciones o mensajes educativos, proporcionando feedback inmediato y manteniendo el interés de los niños. Este enfoque no solo enseña a identificar y comprender emociones, sino que también promueve el aprendizaje a través del juego y la exploración, fomentando habilidades cognitivas y emocionales. La combinación de tecnología y educación hace que el juego sea atractivo y relevante, adaptable a diferentes entornos y con potencial de expansión mediante la introducción de nuevos símbolos y emociones."
            }
          />
          <BestIdea
            imageSrc={cuentacuentos_interactivoSrc}
            ideaName={"Cuentacuentos interactivo"}
            generalDescription={`Los niños ayudan al dragonsito a contar una historia, seleccionando diferentes emociones para cada parte del cuento. Ellos pueden elegir si un personaje se siente valiente o asustado en una situación específica. Los niños tocan opciones en la pantalla que cambian la dirección de la historia, viendo cómo diferentes emociones afectan el desarrollo de la trama. Pueden escuchar al personaje narrar el cuento con las emociones seleccionadas.`}
            selectionDescription={
              "Creemos que esta idea es buena porque permite a los niños interactuar creativamente con el dragón al contar historias, eligiendo emociones para cada parte del cuento. Los niños seleccionan cómo se siente un personaje en situaciones específicas, como valiente o asustado, y ven cómo estas elecciones afectan la trama. Esta mecánica interactiva y de toma de decisiones fomenta la creatividad y el pensamiento crítico, al mismo tiempo que enseña el impacto de las emociones en las narrativas. Escuchar al personaje narrar el cuento con las emociones seleccionadas proporciona una experiencia auditiva enriquecedora, manteniendo el interés y la atención de los niños. Además, la variabilidad en la historia según las emociones elegidas hace que el juego sea rejugable y siempre novedoso, promoviendo habilidades emocionales y narrativas de manera divertida y educativa."
            }
          />
        </div>
      </motion.div>
    </div>
  );
};

export default MejoresIdeasMIDI;
