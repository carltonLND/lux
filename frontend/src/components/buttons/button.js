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

const Button = ({ color, text, onClick, type }) => {
  return (
    <motion.button
      variants={buttonMotion}
      intial="intial"
      whileHover="hover"
      type={type}
      onClick={onClick}
      className={`bg-${color} text-white font-open text-xl font-bold px-5 py-2 
        rounded-3xl tracking-widest shadow-lg shadow-pink-500/50`}
    >
      {text}
    </motion.button>
  );
};

export default Button;
