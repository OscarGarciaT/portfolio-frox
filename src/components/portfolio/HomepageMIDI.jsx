import { Button, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";

const RedirectButton = () => {
  return (
    <motion.div
      className="flex justify-center items-center mt-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          window.location.href = "/homepage-frox";
        }}
        style={{ padding: "10px 20px", fontSize: "1.2rem" }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Ir al Homepage
      </Button>
    </motion.div>
  );
};

const HomepageMIDI = () => {
  return (
    <>
      <Divider className="mt-10" />
      <div className="flex justify-center items-center my-5 mx-0 md:mx-20 rounded-lg  bg-green-200">
        <motion.div className="flex w-full justify-center items-center">
          <Typography className="text-center" fontSize={"4rem"}>
            Home Page
          </Typography>
        </motion.div>
      </div>
      <Divider className="mb-10" />
      <Typography className="text-center" fontSize={"2rem"}>
        Al hacer click en el botón a continuación, se redireccionará al Home
        Page del juego. Esto ha sido todo, gracias por visitar nuestro
        portafolio!
      </Typography>
      <RedirectButton />
    </>
  );
};

export default HomepageMIDI;
