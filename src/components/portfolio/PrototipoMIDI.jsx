import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  Paper,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

import portada_pocionesSrc from "/assets/images/prototipo/portada_pociones.png";
import portada_objetosSrc from "/assets/images/prototipo/portada_objetos.png";

// pociones
import prototipo_pocionesSrc from "/assets/gifs/prototipo_pociones/prototipo_pociones.gif";
import pociones_mirar from "/assets/gifs/prototipo_pociones/chrome_FCsiLaVqdo.gif";
import pociones_pocion_correcta from "/assets/gifs/prototipo_pociones/chrome_hADGapusu3.gif";
import pociones_mirar_gummy from "/assets/gifs/prototipo_pociones/chrome_RqQ5dPMFHT.gif";
import pociones_seleccionar_pocion from "/assets/gifs/prototipo_pociones/chrome_sPbJGRXRXT.gif";
import pociones_pocion_incorrecta from "/assets/gifs/prototipo_pociones/chrome_VFNWQK83dk.gif";

import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import FrxImage from "../multimedia/FrxImage";
import Scrollbars from "rc-scrollbars";

const CaminoMIDI = ({ title, src, action, description, alt }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Card
      sx={{
        maxWidth: 800,
        marginBottom: !isDesktop ? 6 : 0,
        transition: "transform 0.3s ease-in-out", // Add this line
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
      raised={true}
    >
      <CardActionArea onClick={() => action()}>
        <CardMedia component="img" height="400" image={src} alt={alt} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="text-center"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Typography color="primary" fontWeight={500}>
            Inspeccionar Camino
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

const PrototipoMIDI = () => {
  const [pocionesTabIndex, setPocionesTabIndex] = useState(0);
  const [objetosTabIndex, setObjetosTabIndex] = useState(0);

  const [openPociones, setOpenPociones] = useState(false);
  const [openObjetos, setOpenObjetos] = useState(false);

  const handleClosePociones = () => {
    setOpenPociones(false);
    setPocionesTabIndex(0);
  };

  const handleCloseObjetos = () => {
    setOpenObjetos(false);
    setObjetosTabIndex(0);
  };

  const handleChangeIndexPociones = (index) => {
    setPocionesTabIndex(index);
  };

  const handleChangeIndexObjetos = (index) => {
    setObjetosTabIndex(index);
  };

  return (
    <>
      <div className="h-min flex flex-col justify-between items-center pt-10 md:items-start">
        <motion.div
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full mb-6 md:mb-1 md:mr-10 "
        >
          <Typography variant="h4" className="mb-5 text-center">
            Prototipos No Funcionales
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={"1.1rem"}
            className="text-center"
          >
            Cada idea es un sendero lleno de posibilidades y desafíos. A
            continuación, les invitamos a explorar dos caminos que hemos trazado
            en nuestro viaje creativo como grupo de diseñadores de videojuegos.
            Estos dos prototipos representan diferentes enfoques y estilos de
            juego, cada uno con sus propias mecánicas. De los cuales uno de
            ellos va a ser seleccionado para nuestro proyecto final.
          </Typography>
          <motion.div
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex w-full mt-6 mb-6 md:mb-1 md:mr-10 flex-col md:flex-row justify-around"
          >
            <CaminoMIDI
              src={portada_pocionesSrc}
              title={"Juegos de Empatia: Pociones"}
              action={() => {
                console.log("Juegos de Empatia: Pociones");
                setOpenPociones(true);
              }}
            />
            <CaminoMIDI
              src={portada_objetosSrc}
              title={"Juegos de Empatia: Objetos"}
              action={() => {
                console.log("Juegos de Empatia: Objetos");
                setOpenObjetos(true);
              }}
            />
          </motion.div>
        </motion.div>
      </div>
      <Dialog
        fullWidth={true}
        maxWidth={"xl"}
        open={openPociones}
        onClose={handleClosePociones}
      >
        <DialogTitle>Juegos de Empatia: Pociones</DialogTitle>
        <DialogContent sx={{ padding: 0 }}>
          <Tabs
            value={pocionesTabIndex}
            onChange={(event, value) => handleChangeIndexPociones(value)}
          >
            <Tab label="Storytelling" />
            <Tab label="Mecanicas" />
            <Tab label="Prototipo" />
          </Tabs>
          <SwipeableViews
            enableMouseEvents
            index={pocionesTabIndex}
            onChangeIndex={handleChangeIndexPociones}
          >
            <Scrollbars autoHeight autoHeightMin={400} autoHeightMax={600}>
              <div className="flex flex-col p-5">
                <Typography>
                  Nuestro primer sendero comienza con la chispa de una idea.
                  Aquí, los bocetos y el storyboard toman forma, narrando la
                  historia y estableciendo las bases del mundo en el que los
                  jugadores se sumergirán. A través de una serie de viñetas, se
                  delinean los momentos clave y las interacciones cruciales del
                  juego.
                </Typography>
                <FrxImage src={portada_pocionesSrc} className="my-2" />
                <Typography>
                  Aqui podemos apreciar que el juego se centra en como el
                  jugador puede llegar a identificar las emociones negativas del
                  dragon Gummy y que puede utilizar para ayudar a Gummy a
                  sentirse mejor.
                </Typography>
              </div>
            </Scrollbars>
            <Scrollbars autoHeight autoHeightMin={400} autoHeightMax={600}>
              <div className="flex flex-col p-5">
                <Typography>
                  Adentrándonos más, encontramos el corazón del juego: sus
                  mecánicas. ¿Cómo va a interactuar el jugador? ¿Qué desafíos
                  enfrentará? Aquí se detallan las reglas, las interacciones y
                  la dinámica que harán de este prototipo una experiencia única
                  y envolvente en.
                </Typography>
                <div className="mt-4">
                  <Typography variant="h6">¿Qué hace el jugador?</Typography>
                  <List>
                    <ListItem>
                      &bull; El jugador usa la cámara de su teléfono para mirar
                      alrededor y observar su entorno.
                    </ListItem>
                    <ListItem>
                      &bull; En un lugar del entorno se encuentra el dragón
                      Gummy, que está experimentando una emoción negativa.
                    </ListItem>
                  </List>

                  <Typography variant="h6">
                    ¿Cómo interactúa el jugador con el entorno?
                  </Typography>
                  <List>
                    <ListItem>
                      &bull; El jugador debe usar la cámara para encontrar y
                      mantener al dragón Gummy en el campo de visión.
                    </ListItem>
                    <ListItem>
                      &bull; El jugador tiene una serie de pociones que puede
                      arrojar al dragón.
                    </ListItem>
                  </List>

                  <Typography variant="h6">
                    ¿Cuál es el objetivo del juego?
                  </Typography>
                  <List>
                    <ListItem>
                      &bull; Mejorar el estado emocional del dragón Gummy
                      arrojándole la poción correcta.
                    </ListItem>
                    <ListItem>
                      &bull; El nivel se completa cuando el dragón Gummy recibe
                      la poción correcta y se siente mejor.
                    </ListItem>
                  </List>

                  <Typography variant="h6">
                    ¿Qué sucede si el jugador se equivoca?
                  </Typography>
                  <List>
                    <ListItem>
                      &bull; Si el jugador le arroja la poción incorrecta, el
                      dragón Gummy hará una cara de asco y rechazará la poción.
                    </ListItem>
                    <ListItem>
                      &bull; El jugador recibe una indicación visual (cara de
                      asco del dragón) de que la poción fue incorrecta.
                    </ListItem>
                  </List>

                  <Typography variant="h6">
                    ¿Cómo afecta el entorno al juego?
                  </Typography>
                  <List>
                    <ListItem>
                      &bull; Es necesario observar al dragón a través de la
                      cámara para poder arrojarle las pociones.
                    </ListItem>
                    <ListItem>
                      &bull; Debido a la naturaleza del juego RA, es posible que
                      el jugador arroje una poción y no le atine al dragón,
                      añadiendo un nivel de dificultad adicional.
                    </ListItem>
                  </List>

                  <Typography variant="h6">
                    ¿Cómo se mide el progreso del jugador?
                  </Typography>
                  <List>
                    <ListItem>
                      &bull; El progreso del jugador se mide por la cantidad de
                      niveles completados al arrojar la poción correcta al
                      dragón Gummy.
                    </ListItem>
                    <ListItem>
                      &bull; La reacción del dragón (cara de asco o mejora
                      emocional) actúa como feedback inmediato para el jugador
                      sobre su desempeño.
                    </ListItem>
                  </List>
                </div>
              </div>
            </Scrollbars>
            <Scrollbars autoHeight autoHeightMin={400} autoHeightMax={600}>
              <div className="flex flex-col p-5">
                <Typography>
                  Finalmente, el viaje nos lleva a las visuales. Utilizando
                  Figma, las ideas y mecánicas se transforman en pantallas
                  funcionales y atractivas. Con la intención de plasmar aquello
                  que hemos ideado, hemos generado pantallas que simulan la
                  experiencia de juego.
                </Typography>
                <div className="w-full flex flex-col mt-5">
                  <Typography>
                    A continuación, se muestra un gif del prototipo completo en
                    acción:
                  </Typography>
                  <FrxImage
                    src={prototipo_pocionesSrc}
                    width={300}
                    className="my-3 self-center"
                  />
                  <Typography>
                    Ahora procedemos a explicar las partes importantes del
                    prototipo en acción:
                  </Typography>
                  <Typography className="mt-5">
                    El jugador comienza el juego mirando alrededor con la cámara
                  </Typography>
                  <FrxImage
                    src={pociones_mirar}
                    width={300}
                    className="my-3 self-center"
                  />
                  <Typography>
                    El jugador encuentra al dragón Gummy y se prepara para
                    lanzar una poción
                  </Typography>
                  <FrxImage
                    src={pociones_mirar_gummy}
                    width={300}
                    className="my-3 self-center"
                  />
                  <Typography>
                    El jugador lanza una poción al dragón Gummy y recibe
                    feedback inmediato
                  </Typography>
                  <FrxImage
                    src={pociones_pocion_incorrecta}
                    width={300}
                    className="my-3 self-center"
                  />
                  <Typography>
                    El jugador al notar que la poción fue incorrecta, selecciona
                    otra poción y se prepara para lanzarla
                  </Typography>
                  <FrxImage
                    src={pociones_seleccionar_pocion}
                    width={300}
                    className="my-3 self-center"
                  />
                  <Typography>
                    El jugador lanza la poción correcta y el dragón Gummy se
                    siente mejor y sonríe al jugador, completando el nivel
                  </Typography>
                  <FrxImage
                    src={pociones_pocion_correcta}
                    width={300}
                    className="my-3 self-center"
                  />
                </div>
              </div>
            </Scrollbars>
          </SwipeableViews>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePociones}>Cerrar</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        fullWidth={true}
        maxWidth={"xl"}
        open={openObjetos}
        onClose={handleCloseObjetos}
      >
        <DialogTitle>Juegos de Empatia: Objetos</DialogTitle>
        <DialogContent sx={{ padding: 0 }}>
          <Tabs
            value={objetosTabIndex}
            onChange={(event, value) => handleChangeIndexObjetos(value)}
          >
            <Tab label="Storytelling" />
            <Tab label="Mecanicas" />
            <Tab label="Prototipo" />
          </Tabs>
          <SwipeableViews
            enableMouseEvents
            index={objetosTabIndex}
            onChangeIndex={handleChangeIndexObjetos}
          >
            <Scrollbars autoHeight autoHeightMin={400} autoHeightMax={600}>
              <div className="flex flex-col p-5">
                <Typography>
                  El segundo camino ofrece una experiencia un tanto similar,
                  pero con un elemento diferente. Comenzando nuevamente con el
                  storyboard, obtenemos una visión general de como se van a
                  desarrollar un nivel y las interacciones del juego.
                </Typography>
                <FrxImage src={portada_pocionesSrc} />
              </div>
            </Scrollbars>
            <Scrollbars autoHeight autoHeightMin={400} autoHeightMax={600}>
              <div className="flex flex-col p-5">
                <Typography>
                  Siguiendo adelante, exploramos las mecánicas de juego
                  específicas de este prototipo. Desde la interacción del
                  jugador con el entorno hasta las condiciones para completar el
                  nivel..
                </Typography>
              </div>
            </Scrollbars>
            <Scrollbars autoHeight autoHeightMin={400} autoHeightMax={600}>
              <div className="flex flex-col p-5">
                <Typography>
                  El viaje concluye con las pantallas diseñadas en Figma, donde
                  cada elemento discutido en las mecanicas e ideación cobran
                  vida.
                </Typography>
              </div>
            </Scrollbars>
          </SwipeableViews>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseObjetos}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PrototipoMIDI;
