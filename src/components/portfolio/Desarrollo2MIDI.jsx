import { useState } from "react";
import { motion } from "framer-motion";
import { Divider, Typography, Paper, Grid, Dialog } from "@mui/material";

import semana2_1Src from "/assets/images/semana2/semana2_1.png";
import semana2_2Src from "/assets/images/semana2/semana2_2.png";
import semana2_3Src from "/assets/images/semana2/semana2_3.png";
import semana2_4Src from "/assets/images/semana2/semana2_4.png";
import semana2_5Src from "/assets/images/semana2/semana2_5.png";
import semana2_6Src from "/assets/images/semana2/semana2_6.png";
import semana2_7Src from "/assets/images/semana2/semana2_7.png";
import semana2_8Src from "/assets/images/semana2/semana2_8.png";
import semana2_9Src from "/assets/images/semana2/semana2_9.png";
import semana2_10Src from "/assets/images/semana2/semana2_10.png";
import semana2_11Src from "/assets/images/semana2/semana2_11.png";

const Desarrollo2MIDI = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const handleClickOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Divider className="mt-10" />
      <div className="flex justify-center items-center my-5 mx-0 md:mx-20 rounded-lg  bg-green-200">
        <motion.div className="flex w-full justify-center items-center">
          <Typography className="text-center" fontSize={"4rem"}>
            Desarrollo - 2da Semana
          </Typography>
        </motion.div>
      </div>
      <Divider className="mb-10" />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <motion.div variants={itemVariants} className="h-full">
            <Paper elevation={3} className="p-4 rounded-lg h-full">
              <Typography variant="h6" className="mb-2">
                Objetivos de la Semana
              </Typography>
              <ul className="list-disc list-inside">
                <li>
                  Implementar un sistema de comportamientos aleatorios para
                  Gommi, permitiendo que este ejecute acciones diversas de
                  manera impredecible en intervalos de tiempo determinados.
                </li>
                <li>
                  Actualizar el sistema de interacción con objetos para que
                  funcione de forma sinérgica con los comportamientos de Gommi.
                  Ahora, los comportamientos pueden ser &quot;resueltos&quot;
                  mediante la interacción con objetos específicos que colisionen
                  con Gommi.
                </li>
                <li>
                  Incorporar animaciones y retroalimentación visual y auditiva
                  en función de si el objeto proporcionado es el correcto para
                  resolver el comportamiento de Gommi.
                </li>
                <li>
                  Desarrollar una interfaz de usuario (UI) que incluya
                  instrucciones claras sobre cómo comenzar el juego, así como
                  elementos de fin de juego cuando se cumplan las condiciones
                  establecidas.
                </li>
                <li>
                  Establecer un objetivo para finalizar el juego, que consiste
                  en resolver un número determinado de comportamientos de Gommi.
                </li>
                <li>
                  Actualizar los modelos de los objetos para mejorar su
                  apariencia y compatibilidad con las nuevas mecánicas de juego.
                </li>
              </ul>
            </Paper>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div variants={itemVariants} className="h-full">
            <Paper elevation={3} className="p-4 rounded-lg h-full">
              <Typography variant="h6" className="mb-2">
                Logros Alcanzados
              </Typography>
              <ul className="list-disc list-inside">
                <li>
                  Se ha implementado exitosamente el sistema de comportamientos
                  aleatorios, permitiendo que Gommi actúe de manera dinámica y
                  cambiante según lo programado.
                </li>
                <li>
                  El sistema de objetos ha sido actualizado para funcionar de
                  manera integrada con los nuevos comportamientos de Gommi,
                  permitiendo que estos sean &quot;resueltos&quot; mediante la
                  interacción efectiva con objetos correspondientes.
                </li>
                <li>
                  Se han añadido animaciones y retroalimentación que responden
                  adecuadamente según la efectividad del objeto utilizado,
                  mejorando significativamente la experiencia de usuario.
                </li>
                <li>
                  La interfaz de usuario ha sido diseñada e implementada,
                  proporcionando instrucciones claras al jugador, así como una
                  pantalla de fin de juego cuando se alcanzan los objetivos
                  planteados.
                </li>
                <li>
                  Se ha establecido un sistema de metas que marca la
                  finalización del juego tras la resolución de un número
                  predefinido de comportamientos de Gommi.
                </li>
                <li>
                  Los modelos de objetos han sido actualizados, reflejando
                  mejoras en diseño y compatibilidad con las nuevas
                  funcionalidades del juego.
                </li>
              </ul>
            </Paper>
          </motion.div>
        </Grid>
        <Grid item xs={12}>
          <motion.div variants={itemVariants}>
            <Paper elevation={3} className="p-4 rounded-lg">
              <Typography variant="h6" className="mb-2">
                Capturas
              </Typography>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  semana2_1Src,
                  semana2_2Src,
                  semana2_3Src,
                  semana2_4Src,
                  semana2_5Src,
                  semana2_6Src,
                  semana2_7Src,
                  semana2_8Src,
                  semana2_9Src,
                  semana2_10Src,
                  semana2_11Src,
                ].map((image, index) => (
                  <motion.div
                    key={index}
                    className="cursor-pointer rounded-lg overflow-hidden"
                    style={{
                      width: "100%",
                      paddingBottom: "100%", // This makes the div a square
                      position: "relative",
                    }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleClickOpen(image)}
                  >
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ padding: "20px" }}
          >
            <img
              src={selectedImage}
              alt="Selected"
              style={{ maxWidth: "100%", height: "auto" }}
              className="rounded-lg"
            />
          </motion.div>
        )}
      </Dialog>
    </>
  );
};

export default Desarrollo2MIDI;
