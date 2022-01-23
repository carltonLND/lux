import { motion } from "framer-motion";

const buttonMotion = {
  intial: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const OutlinedButton = ({ color, text, onClick }) => {
  return (
    <motion.button
      variants={buttonMotion}
      intial="intial"
      whileHover="hover"
      type="submit"
      onClick={onClick}
      className={`border-2 border-${color} text-${color} font-open text-xl font-bold px-5 py-2 
        rounded-3xl tracking-widest shadow-lg shadow-pink-500/50`}
    >
      {text}
    </motion.button>
  );
};

export default OutlinedButton;
