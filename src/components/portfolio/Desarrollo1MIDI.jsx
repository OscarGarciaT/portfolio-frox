import { useState } from "react";
import { motion } from "framer-motion";
import { Divider, Typography, Paper, Grid, Dialog } from "@mui/material";

import semana1_1Src from "/assets/images/semana1/semana1_1.png";
import semana1_2Src from "/assets/images/semana1/semana1_2.png";
import semana1_3Src from "/assets/images/semana1/semana1_3.png";
import semana1_4Src from "/assets/images/semana1/semana1_4.png";

const Desarrollo1MIDI = () => {
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
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <Divider className="mt-10" />
      <div className="flex justify-center items-center my-5 mx-0 md:mx-20 rounded-lg bg-green-200">
        <motion.div className="flex w-full justify-center items-center">
          <Typography className="text-center" fontSize={"4rem"}>
            Desarrollo - 1era Semana
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
                  Integrar un sistema de meshing utilizando Niantic&rsquo;s ARDK
                  para mapear el entorno en tiempo real, permitiendo la
                  interacción precisa con elementos del entorno.
                </li>
                <li>
                  Incorporar a Gommi como agente en el entorno, implementando
                  Navigation Meshing para delinear áreas navegables donde Gommi
                  pueda desplazarse.
                </li>
                <li>
                  Desarrollar una mecánica de lanzamiento de objetos, que
                  permita la colisión dinámica tanto con Gommi como con los
                  elementos del entorno mapeado.
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
                  Se ha implementado exitosamente el sistema de meshing con el
                  ARDK de Niantic, logrando un mapeo preciso del entorno para
                  facilitar la interacción con componentes virtuales.
                </li>
                <li>
                  Gommi ha sido integrado como un agente interactivo, y se ha
                  implementado un sistema de Navigation Meshing que permite a
                  Gommi moverse eficientemente dentro del entorno mapeado.
                </li>
                <li>
                  Se ha desarrollado y probado la mecánica de lanzamiento de
                  objetos, asegurando que estos colisionen de manera coherente
                  con Gommi y otros elementos del entorno.
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
                {[semana1_1Src, semana1_2Src, semana1_3Src, semana1_4Src].map(
                  (image, index) => (
                    <motion.div
                      key={index}
                      className="cursor-pointer rounded-lg overflow-hidden"
                      style={{
                        width: "100%",
                        paddingBottom: "100%", // Makes the div a square
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
                  )
                )}
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
    </motion.div>
  );
};

export default Desarrollo1MIDI;
