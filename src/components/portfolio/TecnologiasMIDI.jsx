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
  DialogTitle,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

import unitySrc from "/assets/images/tecnologias/unity.png";
import githubSrc from "/assets/images/tecnologias/github.png";
import notionSrc from "/assets/images/tecnologias/notion.png";
import arquitecturaSrc from "/assets/images/tecnologias/arquitectura.png";

import { useState } from "react";
import FrxImage from "../multimedia/FrxImage";

const TechMIDI = ({ src, action, alt }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Card
      sx={{
        maxWidth: !isDesktop ? 350 : 200,
        marginBottom: !isDesktop ? 6 : 0,
        transition: "transform 0.3s ease-in-out", // Add this line
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
      raised={true}
    >
      <CardActionArea onClick={() => action()}>
        <FrxImage src={src} alt={alt} className="p-5" />
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Typography color="primary" fontWeight={500}>
            ¿Por qué?
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

const INFO_TECNOLOGIAS = {
  unity: {
    titulo: "Unity3D",
    descripcion: `Unity3D es un motor de videojuegos multiplataforma desarrollado
              por Unity Technologies. Permite el desarrollo de videojuegos en 2D
              y 3D, así como la creación de experiencias de realidad virtual y
              aumentada. Unity3D es una de las herramientas más populares en la
              industria de los videojuegos, utilizada por desarrolladores
              independientes y grandes estudios por igual. 
              Unity3D es nuestra elección principal debido a su robusto paquete de realidad aumentada (AR), esencial para cumplir con los requerimientos específicos del juego. Además, uno de los miembros del equipo ya tiene experiencia con este motor, lo que facilita su implementación y reduce el tiempo de aprendizaje. Unity3D también ofrece una gran flexibilidad y una amplia comunidad de soporte, lo cual es beneficioso para la resolución de problemas y la expansión futura del proyecto.`,
    imagen: unitySrc,
  },
  github: {
    titulo: "Github",
    descripcion: `GitHub es una herramienta fundamental para la colaboración entre los diseñadores, desarrolladores y otros miembros del equipo. Permite llevar un control de versiones eficiente, gestionar los avances y coordinar el trabajo de forma ordenada y accesible. Además, GitHub facilita la revisión de código y la integración continua, asegurando que el proyecto se mantenga en una alta calidad y organizado.`,
    imagen: githubSrc,
  },
  notion: {
    titulo: "Notion",
    descripcion: `Utilizamos Notion para escribir rápidamente tareas, planificar el trabajo y documentar aspectos narrativos y variados de ideación. Su flexibilidad y capacidad de integración con otras herramientas lo hacen ideal para mantener al equipo sincronizado y organizado. Notion permite centralizar toda la información del proyecto en un solo lugar, facilitando la comunicación y el seguimiento de las tareas.`,
    imagen: notionSrc,
  },
};

const TecnologiasMIDI = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [openTechDialog, setOpenTechDialog] = useState(false);

  const [techDialogContent, setTechDialogContent] = useState({
    titulo: "",
    descripcion: "",
    imagen: "",
  });

  return (
    <>
      <Divider className="mt-10" />
      <div className="flex justify-center items-center my-5 mx-0 md:mx-20 rounded-lg  bg-green-200">
        <motion.div className="flex w-full justify-center items-center">
          <Typography className="text-center" fontSize={"4rem"}>
            Tecnologias
          </Typography>
        </motion.div>
      </div>
      <Divider className="mb-10" />
      <Typography
        fontWeight={400}
        fontSize={"1.1rem"}
        className="text-center md:text-left"
      >
        En el desarrollo de nuestro proyecto, hemos seleccionado un conjunto de
        herramientas que nos permiten cumplir con los requisitos funcionales y
        técnicos de manera eficiente. La elección de cada herramienta se basa en
        sus capacidades, facilidad de integración y la experiencia previa de los
        miembros del equipo. A continuación, detallamos las principales
        tecnologías utilizadas y las justificaciones detrás de cada una de
        ellas.
      </Typography>
      <div className="flex flex-col md:flex-row justify-around items-center my-5">
        <TechMIDI
          src={unitySrc}
          title={"Unity3D"}
          alt={"Unity"}
          action={() => {
            setTechDialogContent(INFO_TECNOLOGIAS.unity);
            setOpenTechDialog(true);
          }}
        />

        <TechMIDI
          src={githubSrc}
          title={"Github"}
          alt={"Github"}
          action={() => {
            setTechDialogContent(INFO_TECNOLOGIAS.github);
            setOpenTechDialog(true);
          }}
        />

        <TechMIDI
          src={notionSrc}
          title={"Notion"}
          alt={"Notion"}
          action={() => {
            setTechDialogContent(INFO_TECNOLOGIAS.notion);
            setOpenTechDialog(true);
          }}
        />
      </div>
      <Typography variant="h6">Arquitectura del Juego</Typography>
      <Typography className="mb-4">
        Nuestro sistema está diseñado utilizando una arquitectura basada en
        eventos, que permite una comunicación eficiente y desacoplada entre los
        distintos componentes del juego. La arquitectura está centrada en un
        GameManager principal y varios managers especializados que se encargan
        de distintas responsabilidades, como la interfaz de usuario, los datos y
        las interacciones del juego.
      </Typography>
      <div className="flex flex-col md:flex-row gap-3 mb-3">
        <Card className="flex-1">
          <CardContent>
            <Typography variant="h6" color="primary">
              GameManager
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Rol: Actúa como el núcleo del juego, gestionando el ciclo de vida
              del juego, las transiciones de escena y la lógica central.
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Responsabilidades:
            </Typography>
            <ul>
              <li>Inicialización del juego y de otros managers.</li>
              <li>Gestión del estado del juego (iniciar, pausar, terminar).</li>
              <li>
                Comunicación entre diferentes managers utilizando un sistema de
                eventos.
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardContent>
            <Typography variant="h6" color="primary">
              UIManager
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Rol: Gestiona todos los elementos de la interfaz de usuario (UI).
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Responsabilidades:
            </Typography>
            <ul>
              <li>Actualización de HUDs y menús en tiempo real.</li>
              <li>Gestión de ventanas y diálogos emergentes.</li>
              <li>Escucha y respuesta a eventos relacionados con la UI.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        <Card className="flex-1">
          <CardContent>
            <Typography variant="h6" color="primary">
              DataManager
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Rol: Gestiona todos los datos persistentes y temporales del juego.
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Responsabilidades:
            </Typography>
            <ul>
              <li>
                Almacenamiento y recuperación de datos de progreso del jugador.
              </li>
              <li>Gestión de configuraciones y preferencias.</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardContent>
            <Typography variant="h6" color="primary">
              InteractionManager
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Rol: Maneja las interacciones del jugador con el entorno del
              juego.
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Responsabilidades:
            </Typography>
            <ul>
              <li>Detección de colisiones e interacciones.</li>
              <li>Gestión de eventos de entrada del usuario (táctil).</li>
              <li>
                Comunicación con el GameManager y otros managers para actualizar
                el estado del juego.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <Typography className="mt-3 text-center md:text-left">
        A continuacion un diagrama de la arquitectura del juego:
      </Typography>
      <FrxImage src={arquitecturaSrc} className="p-5" />
      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        open={openTechDialog}
        onClose={() => {
          setOpenTechDialog(false);
        }}
      >
        <DialogTitle>{}</DialogTitle>
        <DialogContent sx={{ padding: 0 }}>
          <FrxImage src={techDialogContent.imagen} className="p-5" />
          <CardContent>
            <Typography
              variant="h6"
              className="text-center"
              color="primary"
              fontWeight={500}
            >
              {techDialogContent.titulo}
            </Typography>
            <Typography
              variant="body1"
              className="text-left"
              color="textSecondary"
            >
              {techDialogContent.descripcion}
            </Typography>
          </CardContent>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenTechDialog(false)}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TecnologiasMIDI;
