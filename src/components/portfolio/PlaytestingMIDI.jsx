import { Divider, Typography, Grid, Paper, Box } from "@mui/material";
import { motion } from "framer-motion";

const PlaytestingMIDI = () => {
  return (
    <>
      <Divider className="mt-10" />
      <div className="flex justify-center items-center my-5 mx-0 md:mx-20 rounded-lg bg-green-200">
        <motion.div className="flex w-full justify-center items-center">
          <Typography className="text-center" fontSize={"4rem"}>
            Playtesting
          </Typography>
        </motion.div>
      </div>
      <Divider className="mb-10" />

      <div className="mx-5 md:mx-20">
        <Typography variant="h4" className="mb-6" color="primary">
          🌟 Bienvenida al Usuario
        </Typography>
        <Typography className="mb-6">
          ¡Bienvenido a <strong>Juegos de Empatia</strong>! Un juego de realidad
          aumentada creado para ayudar a los niños a desarrollar sus emociones y
          ser más empáticos. Prepárate para una aventura divertida donde
          ayudarás a nuestro amiguito dragón a sentirse mejor interactuando con
          él de manera mágica y única.
        </Typography>

        <Typography variant="h4" className="mb-6" color="primary">
          🎮 Descripción del Juego e Instrucciones
        </Typography>
        <Typography className="mb-6">
          Tu misión es identificar las emociones del dragoncito y ayudarlo a
          mejorar su ánimo usando objetos especiales que encontrarás en la barra
          inferior de la pantalla. ¡Elige sabiamente y lánzale el objeto
          correcto para que lo use según cómo se sienta! El proceso de juego
          dura aproximadamente 6 minutos.
        </Typography>

        <Typography variant="h4" className="mb-6" color="primary">
          🧑‍💻 Resultados del Playtesting
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={6} className="p-6 rounded-lg bg-blue-100">
              <Typography variant="h6" className="mb-2">
                🕹️ Entrevista Usuario 1
              </Typography>
              <Typography className="mb-2">
                <strong>Experiencia General:</strong> El juego es novedoso y
                permite interactuar con el dragoncito en cualquier lugar de la
                casa. Después de un inicio algo confuso, se vuelve intuitivo y
                fácil de entender.
              </Typography>
              <Typography className="mb-2">
                <strong>Interacción con AR:</strong> La interacción es cómoda y
                no hubo problemas técnicos durante la experiencia.
              </Typography>
              <Typography className="mb-2">
                <strong>Inmersión:</strong> Calificación 8/10. La experiencia
                fue inmersiva, pero sugirió agregar más emociones y diálogos al
                dragoncito para mejorar la interacción.
              </Typography>
              <Typography className="mb-2">
                <strong>Mejoras Sugeridas:</strong> Agregar más emociones y
                diálogos para enriquecer la experiencia.
              </Typography>
              <Typography>
                <strong>Recomendación:</strong> Definitivamente recomendaría el
                juego a otras personas.
              </Typography>
              <Box mt={4} display="flex" justifyContent="center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-64 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-lg flex items-center justify-center"
                >
                  <Typography variant="body1" color="textSecondary">
                    [Placeholder for User 1 Playtest Image]
                  </Typography>
                </motion.div>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={6} className="p-6 rounded-lg bg-green-100">
              <Typography variant="h6" className="mb-2">
                🕹️ Entrevista Usuario 2
              </Typography>
              <Typography className="mb-2">
                <strong>Experiencia General:</strong> Interesante pero podría
                ofrecer más interacción. Aunque el dragón se mueve por la casa,
                podría haber más desafíos.
              </Typography>
              <Typography className="mb-2">
                <strong>Interacción con AR:</strong> Algo confusa al principio y
                con algunos problemas técnicos donde el dragón atravesaba
                muebles o desaparecía brevemente.
              </Typography>
              <Typography className="mb-2">
                <strong>Inmersión:</strong> Calificación 6/10. El entorno podría
                ser más realista o interactivo. El dragón a veces parecía
                flotar.
              </Typography>
              <Typography className="mb-2">
                <strong>Mejoras Sugeridas:</strong> Mejorar la precisión del
                seguimiento del dragón y agregar más interacciones o minijuegos.
              </Typography>
              <Typography>
                <strong>Recomendación:</strong> Tal vez lo recomendaría,
                dependiendo de la persona. Es ideal para niños o quienes
                disfrutan de experiencias en AR.
              </Typography>
              <Box mt={4} display="flex" justifyContent="center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-64 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 rounded-lg flex items-center justify-center"
                >
                  <Typography variant="body1" color="textSecondary">
                    [Placeholder for User 2 Playtest Image]
                  </Typography>
                </motion.div>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default PlaytestingMIDI;
