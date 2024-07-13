import { motion } from "framer-motion";

import {
  Divider,
  Icon,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import FrxImage from "../multimedia/FrxImage";

const BestIdea = ({
  imageSrc,
  ideaName,
  generalDescription,
  selectionDescription,
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Paper className="my-5">
      <div className="flex flex-col md:flex-row w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex w-full md:w-1/2 justify-center items-center p-2"
        >
          <FrxImage src={imageSrc} width={"100%"} />
        </motion.div>
        <Divider
          orientation={matches ? "vertical" : "horizontal"}
          variant="middle"
          flexItem
        />
        <div className="flex flex-col w-full md:w-1/2 justify-start items-start pt-7 px-7">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center mb-6 self-center"
          >
            <Icon color="primary" style={{ fontSize: "2.5rem" }}>
              lightbulb
            </Icon>
            <Typography
              className="text-center"
              fontSize={"2.5rem"}
              fontWeight={700}
              color="primary"
            >
              {ideaName}
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full text-center md:text-left mb-5"
          >
            <Typography fontSize={"1.3rem"} fontWeight={600}>
              Descripción
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full text-center md:text-left mb-5"
          >
            <Typography fontSize={"1.1rem"}>{generalDescription}</Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full text-center md:text-left mb-5"
          >
            <Typography fontSize={"1.3rem"} fontWeight={600}>
              ¿Por qué creemos que es buena?
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full text-center md:text-left mb-5"
          >
            <Typography fontSize={"1.1rem"}>{selectionDescription}</Typography>
          </motion.div>
        </div>
      </div>
    </Paper>
  );
};

export default BestIdea;
