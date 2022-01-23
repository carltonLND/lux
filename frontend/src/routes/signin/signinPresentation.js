import {
  LogoCirc,
  EmailInput,
  PasswordInput,
  Button,
  OutlinedButton,
  FloatLink,
} from "../../components";

const SignupPresentation = ({ formik }) => {
  return (
    <div className="flex">
      <div className="p-10 h-screen w-screen flex flex-col items-center space-y-10">
        <div className="sm:self-start">
          <LogoCirc align="start" />
        </div>
        <div className="w-full flex flex-col items-center sm:h-2/3 sm:justify-center space-y-10">
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
            <FloatLink text="Forgot your password?" link="#" />
            <Button
              type="submit"
              color="primary"
              text="Sign Up"
              onClick={() => {}}
            />
          </form>
        </div>
        <div className="h-full grow flex flex-col justify-end sm:pb-10 sm:hidden">
          <FloatLink text="Already have an account?" link="#" />
        </div>
      </div>
      <div className="bg-primary flex-col items-center justify-center space-y-10 p-5 hidden sm:flex sm:w-2/5">
        <h1 className="font-open font-extrabold text-white text-3xl text-center">
          Hello, Friend!
        </h1>
        <p className="text-white font-nunito w-2/3 text-center text-xl font-thin tracking-wider">
          Enter your personal details to get started on your journey with us.
        </p>
        <OutlinedButton color="white" text="Sign In" onClick={() => {}} />
      </div>
    </div>
  );
};

export default SignupPresentation;
