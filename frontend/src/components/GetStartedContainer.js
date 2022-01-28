import { motion } from "framer-motion";

const containerMotion = {
  initial: {
    x: "100vw",
    transition: {
      type: "spring",
      duration: 0.4,
      stiffness: 45,
      bounce: 0,
    },
  },
  base: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.6,
      stiffness: 45,
      bounce: 0,
    },
  },
  exit: {
    opacity: 0,
    x: "-100vw",
    transition: {
      duration: 0.4,
    },
  },
};

const GetStartedContainer = ({ title, children }) => {
  return (
    <motion.div
      variants={containerMotion}
      initial="initial"
      animate="base"
      exit="exit"
      className="w-full h-2/6 flex justify-center"
    >
      <main className="bg-white rounded w-full h-full p-5 space-y-5 shadow-lg">
        <h2 className="text-center text-primary text-2xl font-open font-bold">
          {title}
        </h2>
        <form className="flex flex-col space-y-2">{children}</form>
      </main>
    </motion.div>
  );
};

export default GetStartedContainer;
