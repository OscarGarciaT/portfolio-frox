import { motion } from "framer-motion";
import construccionSrc from "/assets/images/misc/construccion.png";

const InConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        className="text-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <img
          src={construccionSrc}
          alt="Under Construction"
          className="rounded-full w-48 h-48" // Adjust size as needed
        />
      </motion.div>
      <div className="mt-4">En construcción</div>
    </div>
  );
};

export default InConstruction;
