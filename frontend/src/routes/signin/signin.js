import SigninPresentation from "./signinPresentation";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const SignIn = () => {
  const Navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().password().required(),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(formik.errors);
    },
  });

  const LoadSignup = () => {
    Navigate("/signup");
  };
  return <SigninPresentation formik={formik} LoadSignup={LoadSignup} />;
};

export default SignIn;
