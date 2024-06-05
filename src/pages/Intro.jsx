import { Typography } from "@mui/material";

import tableroMidiSrc from "/assets/images/intro/MIDI-Tablero.png";
import FrxImage from "../components/multimedia/FrxImage";

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4">
      <div className="w-full md:w-2/3 mb-6 md:mb-1 md:mr-10 ">
        <Typography variant="h4" className="mb-5 text-center md:text-left">
          Proyecto MIDI - Realidad Aumentada
        </Typography>
        <Typography fontWeight={400} fontSize={18} className="text-justify">
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
      </div>
      <div className="flex w-full md:w-1/3 justify-center items-center">
        <FrxImage src={tableroMidiSrc} width={300} />
      </div>
    </div>
  );
};

export default Intro;
