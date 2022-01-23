import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const lineVariant = {
  initial: {
    scaleX: 0,
  },
  hover: {
    scaleX: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const textVariant = {
  initial: {
    translateY: 0,
    opacity: 0.7,
  },
  hover: {
    opacity: 1,
    translateY: -2,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const FloatLink = ({ text, link }) => {
  return (
    <Link to={`${link || "#"}`}>
      <motion.div
        initial="initial"
        whileHover="hover"
        animate="initial"
        transition={{ duration: 0.7 }}
        className="group flex flex-col items-center w-min h-auto"
      >
        <motion.h4
          variants={textVariant}
          className="block font-nunito text-md text-center w-max"
        >
          {text}
        </motion.h4>
        <motion.div variants={lineVariant} className="h-0.5 w-full bg-gray-500">
          {" "}
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default FloatLink;
