import { Typography } from "@mui/material";
import { motion } from "framer-motion";

import AnimatedImage from "../frox/AnimatedImage";

// Intro
import tableroMidiSrc from "/assets/images/intro/MIDI-Tablero.png";
import paginaEmocionesSrc from "/assets/images/intro/pagina_emociones.png";

const IntroMIDI = () => {
  return (
    <>
      <div className="h-min flex flex-col md:flex-row justify-between items-center pt-10 md:items-start">
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
            className="text-center md:text-left"
          >
            Este proyecto, trabajado en conjunto con el grupo MIDI, se enfoca en
            desarrollar una experiencia de realidad aumentada en forma de
            videojuego para niños de 3 a 4 años. En este juego, los jugadores
            tienen como objetivo descubrir las emociones de Gummy, el dragón
            protagonista. Gracias a la tecnología de realidad aumentada, los
            niños podrán ver a Gummy interactuando dentro de su entorno real, lo
            que hará que su experiencia sea mucho más emocionante. Las mecánicas
            del juego serán sencillas y fáciles de aprender, aprovechando al
            máximo el potencial que ofrece la realidad aumentada. Este enfoque
            no solo busca entretener a los pequeños, sino también fomentar su
            desarrollo emocional y cognitivo a través de una interacción lúdica
            y envolvente.
          </Typography>
        </motion.div>
        <AnimatedImage src={tableroMidiSrc} hSlide="right" />
      </div>
      <div className="h-min flex flex-col md:flex-row justify-between items-center pt-10 md:items-start">
        <motion.div
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-2/3 mb-6 md:mb-1 md:mr-10"
        >
          <Typography variant="h4" className="mb-5 text-center md:text-left">
            De donde surgen las ideas?
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={"1.1rem"}
            className="text-center md:text-left"
          >
            El juego a diseñar se basa en un juego de mesa existente para niños
            de 3 a 4 años, protagonizado por Gummy y otros personajes. En este
            juego, los jugadores revisan una serie de páginas con diferentes
            actividades que deben resolver. Una de estas actividades consiste en
            identificar las emociones del dragón Gummy. A los niños se les
            presentan diversas expresiones faciales del dragón y deben
            determinar qué emoción está experimentando Gummy en cada caso. El
            grupo MIDI ha aspirado a llevar esta experiencia a los juegos
            digitales y, más allá, a los juegos de realidad aumentada. Es en
            este contexto donde nuestro grupo entra en acción, generando ideas
            de diseño que aprovechen las posibilidades de la realidad aumentada.
            Además, buscamos ampliar el concepto inicial y proponer una forma
            diferente de abordar la identificación de emociones.
          </Typography>
        </motion.div>
        <AnimatedImage src={paginaEmocionesSrc} hSlide="right" />
      </div>
    </>
  );
};

export default IntroMIDI;
