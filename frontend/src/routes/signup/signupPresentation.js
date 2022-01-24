import {
  LogoCirc,
  EmailInput,
  PasswordInput,
  Button,
  OutlinedButton,
  FloatLink,
} from "../../components";
import { useMediaQuery } from "../../hooks";
import { motion } from "framer-motion";

let containerMotion = {
  slid: {},
  base: {},
};

let contentMotion = {
  slid: {
    x: "-100vw",
  },
  base: {
    x: 0,
    transition: {
      type: "spring",
      duration: 0.4,
      stiffness: 45,
      bounce: 0,
    },
  },
  exit: {
    x: "100vw",
  },
  transition: {
    duration: 0.3,
    ease: "easeInOut",
  },
};

const SignupPresentation = ({ formik, LoadSignin }) => {
  const isDesktop = useMediaQuery("(min-width: 640px)");

  if (isDesktop) {
    containerMotion = {
      slid: {
        x: "30vw",
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
        x: "-100vw",
        transition: {
          type: "spring",
          duration: 0.4,
          stiffness: 45,
          bounce: 0,
        },
      },
      base: {
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
        x: "-100vw",
        transition: {
          duration: 0.3,
          ease: "easeIn",
        },
      },
    };
  }

  return (
    <div className="flex overscroll-none">
      <div className="p-10 h-screen w-screen flex flex-col items-center space-y-10">
        <div className="sm:self-start">
          <LogoCirc align="start" />
        </div>
        <motion.div
          variants={contentMotion}
          initial="slid"
          animate="base"
          exit="exit"
          className="w-full flex flex-col items-center sm:h-2/3 sm:justify-center space-y-10"
        >
          <h1 className="font-open font-extrabold text-primary text-3xl text-center">
            Sign Up To Lux
          </h1>
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
            <PasswordInput
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              errorMsg={formik.errors.confirmPassword}
              placeholder="confirm password"
              onBlur={formik.handleBlur}
              touched={formik.touched.confirmPassword}
            />
            <div className="pt-10">
              <Button
                type="submit"
                color="primary"
                text="Sign Up"
                onClick={() => {}}
              />
            </div>
          </form>
        </motion.div>
        <div className="h-full grow flex flex-col justify-end sm:pb-10 sm:hidden">
          <FloatLink text="Already have an account?" link="/signin" />
        </div>
      </div>
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
        <OutlinedButton color="white" text="Sign In" onClick={LoadSignin} />
      </motion.div>
    </div>
  );
};

export default SignupPresentation;
