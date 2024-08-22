import { Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Desarrollo1MIDI = () => {
  return (
    <>
      <Divider className="mt-10" />
      <div className="flex justify-center items-center my-5 mx-0 md:mx-20 rounded-lg  bg-green-200">
        <motion.div className="flex w-full justify-center items-center">
          <Typography className="text-center" fontSize={"4rem"}>
            Desarrollo - 1era Semana
          </Typography>
        </motion.div>
      </div>
      <Divider className="mb-10" />
    </>
  );
};

export default Desarrollo1MIDI;
