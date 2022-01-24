import { motion } from "framer-motion";
import { useMediaQuery } from "../../hooks";
import {
  LogoCirc,
  EmailInput,
  PasswordInput,
  Button,
  OutlinedButton,
  FloatLink,
} from "../../components";
import { FaFacebook, FaGoogle } from "react-icons/fa";

let containerMotion = {
  slid: {},
  base: {},
};

let contentMotion = {
  slid: {
    opacity: 0,
    x: "100vw",
  },
  base: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.4,
      stiffness: 45,
      bounce: 0,
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
  },
  transition: {
    duration: 0.3,
    ease: "easeInOut",
  },
};

const SignInPresentation = ({ formik, LoadSignup }) => {
  const isDesktop = useMediaQuery("(min-width: 640px)");

  if (isDesktop) {
    containerMotion = {
      slid: {
        x: "-30vw",
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      },
      base: {
        x: 0,
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      },
    };

    contentMotion = {
      slid: {
        opacity: 0,
        x: "100vw",
      },
      base: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          type: "spring",
          duration: 0.4,
          stiffness: 45,
          bounce: 0,
        },
      },
      exit: {
        opacity: 0,
        x: "100vw",
      },
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    };
  }

  return (
    <div className="flex">
      <motion.div
        variants={containerMotion}
        initial="slid"
        animate="base"
        exit="slid"
        className="bg-primary flex-col items-center justify-center space-y-10 p-5 hidden sm:flex sm:w-2/5"
      >
        <h1 className="font-open font-extrabold text-white text-3xl text-center">
          Hello, Friend!
        </h1>
        <p className="text-white font-nunito w-2/3 text-center text-xl font-thin tracking-wider">
          Enter your personal details to get started on your journey with us.
        </p>
        <OutlinedButton color="white" text="Sign Up" onClick={LoadSignup} />
      </motion.div>
      <div className="p-10 h-screen w-screen flex flex-col items-center space-y-10">
        <motion.div
          variants={containerMotion}
          initial="slid"
          animate="base"
          exit="slid"
          className="sm:self-start"
        >
          <LogoCirc align="start" />
        </motion.div>
        <motion.div
          variants={contentMotion}
          initial="slid"
          animate="base"
          exit="exit"
          className="w-full flex flex-col items-center sm:h-2/3 sm:justify-center space-y-10"
        >
          <h1 className="font-open font-extrabold text-primary text-3xl text-center">
            Sign In To Lux
          </h1>
          <div className="flex space-x-5">
            <FaFacebook size="3em" color="#084887" />
            <FaGoogle size="3em" color="#084887" />
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="w-full space-y-4 flex flex-col items-center pb-5 sm:w-2/5"
          >
            <EmailInput
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              errorMsg={formik.errors.email}
              onBlur={formik.handleBlur}
              touched={formik.touched.email}
            />
            <PasswordInput
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              errorMsg={formik.errors.password}
              placeholder="enter password"
              onBlur={formik.handleBlur}
              touched={formik.touched.password}
            />
            <FloatLink text="Forgot your password?" link="#" />
            <div className="pt-10">
              <Button
                type="submit"
                color="primary"
                text="Sign In"
                onClick={() => {}}
              />
            </div>
          </form>
        </motion.div>
        <div className="h-full grow flex flex-col justify-end sm:pb-10 sm:hidden">
          <FloatLink text="Don't have an account?" link="/signup" />
        </div>
      </div>
    </div>
  );
};

export default SignInPresentation;
