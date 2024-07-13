import { motion } from "framer-motion";
import { Divider, Typography } from "@mui/material";

import { LeftSideIdea, RightSideIdea } from "../frox/AnimatedIdeas";

// Ideas
import adivina_que_sienteSrc from "/assets/images/ideas/adivina_que_siente.jpg";
import animales_bosqueSrc from "/assets/images/ideas/animales_bosque.png";
import aventura_coloresSrc from "/assets/images/ideas/aventura_colores.jpg";
import baile_dragonSrc from "/assets/images/ideas/baile_dragon.png";
import bosque_encantadoSrc from "/assets/images/ideas/bosque_encantado.png";
import busca_tesoroSrc from "/assets/images/ideas/busca_tesoro.png";
import calendario_emocionalSrc from "/assets/images/ideas/calendario_emocional.jpg";
import carrera_obstaculosSrc from "/assets/images/ideas/carrera_obstaculos.jpg";
import construccion_castillosSrc from "/assets/images/ideas/construccion_castillos.jpg";
import dia_lluviosoSrc from "/assets/images/ideas/dia_lluvioso.jpg";
import dragon_amigoSrc from "/assets/images/ideas/dragon_amigo.png";
import dragon_jrSrc from "/assets/images/ideas/dragon_jr.jpg";
import dragones_emocionadosSrc from "/assets/images/ideas/dragones_emocionados.jpg";
import encender_antorchasSrc from "/assets/images/ideas/encender_antorchas.jpg";
import escenarios_emocionalesSrc from "/assets/images/ideas/escenarios_emocionales.jpg";
import espejo_emocionalSrc from "/assets/images/ideas/espejo_emocional.jpg";
import festival_emocionesSrc from "/assets/images/ideas/festival_emociones.png";
import festival_globosSrc from "/assets/images/ideas/festival_globos.jpg";
import guaridaSrc from "/assets/images/ideas/guarida.png";
import hada_emocionesSrc from "/assets/images/ideas/hada_emociones.png";
import juego_de_rolSrc from "/assets/images/ideas/juego_de_rol.jpg";
import juegos_expresion_facialSrc from "/assets/images/ideas/juegos_expresion_facial.jpg";
import laberinto_emocionesSrc from "/assets/images/ideas/laberinto_emociones.jpg";
import memoria_emociones_dragoncitoSrc from "/assets/images/ideas/memoria_emociones_dragoncito.jpg";
import memorizacion_cartasSrc from "/assets/images/ideas/memorizacion_cartas.jpg";
import musica_emocionalSrc from "/assets/images/ideas/musica_emocional.jpg";
import puzzle_emocionesSrc from "/assets/images/ideas/puzzle_emociones.png";
import rompecabezaSrc from "/assets/images/ideas/rompecabeza.jpg";

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
        <Divider />
        <div className="flex justify-center items-center my-5 mx-5 md:mx-20 rounded-lg  bg-green-200">
          <motion.div className="flex w-full justify-center items-center">
            <Typography className="text-center" fontSize={"4rem"}>
              Ideacion
            </Typography>
          </motion.div>
        </div>
        <Divider />
        <Typography
          fontWeight={400}
          fontSize={"1.1rem"}
          className="text-center md:text-left mt-5"
        >
          Para llevar a cabo este proyecto, seguimos un proceso de ideaci ón
          utilizando técnicas como &quot;Shout it Out&quot; en grupo y también
          &quot;Research&quot;. Esto nos permitió realizar una investigación
          para comprender mejor cuáles son las tendencias actuales y por qué son
          populares. Después de este proceso, generamos una serie de ideas que
          se presentan a continuación.
        </Typography>
        <div className="flex flex-col w-full justify-center items-center pt-20">
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
          <LeftSideIdea
            src={animales_bosqueSrc}
            ideaName={"Animales del Bosque"}
            description={
              "El niño interactúa con los animales del bosque que viven cerca del dragoncito. Cada animal tiene una personalidad única y expresa sus emociones de manera diferente. El niño puede ayudar al dragoncito a entender las emociones de los animales y a fortalecer su relación con ellos."
            }
          />
          <RightSideIdea
            src={aventura_coloresSrc}
            ideaName={"Aventura de colores"}
            description={
              "Cada color del arco iris representa una emoción diferente, y los niños deben ayudar al dragonsito a encontrar todos los colores. Los niños escanean diferentes partes del entorno real para encontrar colores específicos y desbloquear información sobre cada emoción. Al completar el arco iris, el personaje realiza una animación especial que muestra todas las emociones juntas."
            }
          />
          <LeftSideIdea
            src={busca_tesoroSrc}
            ideaName={"Busca el tesoro"}
            description={
              "El dragoncito buscará, con ayuda del niño tesoros escondidos en su entorno. El entorno para hacer la búsqueda no debe ser tan amplio, considerando la edad de los niños. Las pistas para encontrar los tesoros son sencillas  y fáciles de entender. La mecánica es a través del movimiento del dispositivo."
            }
          />
          <RightSideIdea
            src={calendario_emocionalSrc}
            ideaName={"Calendario emocional"}
            description={
              "Un calendario interactivo donde los niños registran las emociones del dragonsito  a lo largo del tiempo. Cada día, los niños pueden registrar cómo se siente el personaje (feliz, triste, emocionado, etc.). Al escanear el calendario, los niños pueden seleccionar emoticonos y escribir breves notas sobre las emociones de nuestro amigo. Pueden revisar el calendario para ver patrones y cambios en las emociones a lo largo del tiempo, aprendiendo sobre la importancia del seguimiento emocional."
            }
          />
          <LeftSideIdea
            src={carrera_obstaculosSrc}
            ideaName={"Carrera de obstáculos"}
            description={
              "Una vez enfocada la pantalla en un lugar plano puede comenzar la carrera donde el niño guía al dragón evitando obstáculos como troncos, aros, etc. También puede sumar puntos extra al pasar sobre una letra que aparece para coleccionar, la cual luego de ser recogida es dicha en voz alta para que el niño se familiarice con el abecedario. La mecánica de juego es deslizar el dedo para mover de carril al dragón, saltar o agacharse frente a los obstáculos. El juego puede adaptarse para subir la dificultad y/o velocidad mientras el niño avance en el recorrido"
            }
          />
          <RightSideIdea
            src={construccion_castillosSrc}
            ideaName={"Construcción de castillos con el dragón"}
            description={
              "Los niños utilizan bloques virtuales para hacer diferentes construcciones a su imaginación, valorando la estabilidad y creatividad. Los niños reciben recompensas por cumplir ciertos requisitos. Según la edad del niño pueden optarse por opciones libres o seguir el modelo de una construcción con los bloques asignados. La mecánica del juego es a través del deslizamiento de las piezas hacia una posición específica o toque para cambiar de dirección el bloque."
            }
          />
          <LeftSideIdea
            src={encender_antorchasSrc}
            ideaName={"Encender las antorchas"}
            description={
              "El dragoncito se encuentra en un lugar oscuro y, siguiendo indicaciones debe ir seleccionando que antorchas debe encender para que el lugar esté iluminado. El dragón mostrará emociones de acuerdo a la cantidad de luz percibida y la consecución de la misión. El niño podrá identificar las emociones del dragón y debe seguir las instrucciones para que él esté feliz. Como mecánica, el encendido de las antorchas puede ser mediante deslizamiento, pulsaciones o movimiento del dispositivo."
            }
          />
          <RightSideIdea
            src={espejo_emocionalSrc}
            ideaName={"Espejo emocional"}
            description={
              "Un espejo virtual donde los niños pueden ver reflejadas las emociones del dragonsito. Al mirar el espejo, nuestro amigo puede mostrar expresiones de felicidad, tristeza, enojo, etc. Los niños pueden tocar el espejo para cambiar las emociones reflejadas y ver cómo Draky reacciona en tiempo real. Esto puede incluir ejercicios de imitación donde los niños deben hacer las mismas expresiones."
            }
          />
          <LeftSideIdea
            src={guaridaSrc}
            ideaName={"Guarida del Dragoncito"}
            description={
              "El niño explora la guarida del dragoncito, donde cada objeto representa una emoción. Al tocar un objeto, se reproduce un sonido correspondiente a la emoción y aparece una imagen que la ilustra. Por ejemplo, un nido acogedor para la felicidad, una montaña de tesoros para la avaricia, una nube de humo para la ira. El niño puede interactuar con los objetos para aprender a identificar las emociones del dragoncito."
            }
          />
          <RightSideIdea
            src={hada_emocionesSrc}
            ideaName={"Hada de las Emociones"}
            description={
              "Un hada mágica acompaña al dragoncito en sus aventuras y le enseña sobre las diferentes emociones. El niño puede interactuar con el hada para aprender más sobre las emociones y cómo identificarlas en el dragoncito. El hada también puede ayudar al niño a manejar sus propias emociones de manera saludable."
            }
          />
          <LeftSideIdea
            src={juego_de_rolSrc}
            ideaName={"Juegos de rol"}
            description={
              "Juegos donde los niños deben asumir el rol del dragonsito y experimentar diferentes situaciones que provocan diversas emociones. Un día en la vida del personaje donde los niños deben hacer elecciones como qué comer para el desayuno, con quién jugar, etc., y ver cómo estas elecciones afectan las emociones. Los niños toman decisiones en diferentes puntos del día y ven cómo estas decisiones influyen en el estado emocional del dragón, aprendiendo sobre la relación entre acciones y emociones."
            }
          />
          <RightSideIdea
            src={juegos_expresion_facialSrc}
            ideaName={"Juegos de expresión facial"}
            description={
              "Juegos donde los niños deben imitar las expresiones faciales del dragonsito para aprender sobre las emociones. El personaje muestra una cara feliz, triste, enojada, etc., y los niños deben imitar esa expresión frente a la cámara. El juego utiliza la cámara del dispositivo para evaluar las expresiones faciales de los niños, dándoles retroalimentación sobre su precisión y ayudándoles a aprender a reconocer y expresar emociones."
            }
          />
          <LeftSideIdea
            src={laberinto_emocionesSrc}
            ideaName={"Laberinto de Emociones del Dragoncito"}
            description={
              "El niño ayuda al dragoncito a navegar por un laberinto donde cada camino representa una emoción. Para avanzar, el niño debe elegir la emoción correcta en una serie de preguntas. Este juego ayuda a desarrollar la resolución de problemas y la toma de decisiones."
            }
          />
          <RightSideIdea
            src={memoria_emociones_dragoncitoSrc}
            ideaName={"Juego de memoria con las emociones del dragoncito"}
            description={
              "Se puede establecer un tiempo para que el dragoncito presente una emoción (feliz, triste, enojado, etc). Una vez identificada la emoción, el niño debe recordarla, para conforme va pasando el tiempo ir recordando el orden en que el dragón se sintió de tal manera. Mecánica de pequeños toques en la pantalla, donde se encuentran las posibles emociones y el niño debe elegir el orden. La dificultad sube a medida que se van desplegando más emociones."
            }
          />
          <LeftSideIdea
            src={memorizacion_cartasSrc}
            ideaName={"Memorización de cartas"}
            description={
              "Juegos de memoria donde los niños deben emparejar cartas que muestran diferentes emociones del dragonsito. Cartas que muestran al dragón feliz, triste, enojado, etc. Los niños tocan las cartas para voltearlas y deben encontrar las parejas que coincidan. Cada vez que emparejan correctamente, nuestro personaje realiza una animación que muestra cómo expresa esa emoción."
            }
          />
          <RightSideIdea
            src={musica_emocionalSrc}
            ideaName={"Música emocional"}
            description={
              "Crear melodías que reflejan las emociones del dragonsito. Ejemplos de las melodías: Música alegre para felicidad, música lenta y suave para tristeza. Los niños tocan diferentes instrumentos en la pantalla para crear una banda sonora emocional para el dragón. Pueden ver cómo el personaje reacciona a cada tipo de música, enseñándoles sobre la conexión entre música y emociones."
            }
          />
        </div>
      </motion.div>
    </div>
  );
};

export default IdeacionMIDI;
