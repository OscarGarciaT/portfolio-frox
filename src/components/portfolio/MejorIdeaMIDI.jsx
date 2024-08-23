import { Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import AnimatedImage from "../frox/AnimatedImage";

import portada_objetosSrc from "/assets/images/prototipo/portada_objetos.png";

const MejorIdeaMIDI = () => {
  return (
    <>
      <Divider className="mt-10" />
      <div className="flex justify-center items-center my-5 mx-0 md:mx-20 rounded-lg  bg-green-200">
        <motion.div className="flex w-full justify-center items-center">
          <Typography className="text-center" fontSize={"4rem"}>
            Mejor Idea
          </Typography>
        </motion.div>
      </div>
      <Divider className="mb-1 md:mb-10" />
      <div className="h-min flex flex-col md:flex-row justify-between items-center pt-10 md:items-start">
        <motion.div
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-2/3 mb-6 md:mb-1 md:mr-10 "
        >
          <Typography
            fontWeight={400}
            fontSize={"1.1rem"}
            className="text-center md:text-left"
          >
            Hemos decidido que la mejor idea en la que vamos a enfocar nuestro
            desarrollo es la de &quot;Juegos de empatía: Objetos&quot;. Esta
            elección surge de nuestras conversaciones con los tutores y la
            reflexión en equipo, donde llegamos a la conclusión de que
            identificar cómo se siente Gommi, el dragoncito, y ofrecerle un
            objeto que pueda ayudar a resolver su problema es una representación
            más efectiva de empatía y reconocimiento emocional. Creemos
            firmemente que a través del uso de objetos, se puede alcanzar el
            objetivo del juego: reconocer emociones y tomar medidas dentro de
            nuestras capacidades para aliviar aquellas que son negativas.
          </Typography>
        </motion.div>
        <AnimatedImage src={portada_objetosSrc} hSlide="right" />
      </div>
    </>
  );
};

export default MejorIdeaMIDI;
