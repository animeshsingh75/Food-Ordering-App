import { Formik } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { useEffect } from "react";
import FloatingMessage from "./FloatingMessage";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { showMessage, message } = location.state || {};
  const [getLocalStorage, setLocalStorage] = useLocalStorage("user");

  useEffect(() => {
    if (getLocalStorage?.token > length === 100) {
      navigate(-1);
    }
  }, []);

  function handleNavigate(values) {
    let name = values?.name;

    const genRandomStringNthChar = () => {
      return [...Array(100)].map(() => Math.random().toString(36)[2]).join("");
    };
    setLocalStorage({
      ...getLocalStorage,
      userName: name,
      token: genRandomStringNthChar(),
    });
    navigate(-1);
  }

  //Login schema
  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters"),
    email: Yup.string()
      .required("Email is required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is required field")
      .min(8, "Password must be at least 8 characters"),
  });

  if (getLocalStorage?.token?.length === 100) return null;
  return (
    <>
      {showMessage && <FloatingMessage message={message} />}
      <Formik
        validationSchema={schema}
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => {
          handleNavigate(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="xs:w-[280px] sm:w-[310px] w-[380px] mt-10 mb-0 mx-auto">
            <div className="relative z-[1] xs:max-w-[280px] sm:max-w-[310px] max-w-[380px] text-center px-10 py-[25px] rounded-[10px] bg-light-orange">
              <form noValidate onSubmit={handleSubmit}>
                <span className="text-[40px] text-[#4b6cb7] block mb-[25px]">
                  Login
                </span>
                <input
                  type="text"
                  name="name"
                  data-testid="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Enter your name"
                  className="form-control inp_text w-full box-border text-sm mt-0 mb-[15px] mx-0 p-[15px] rounded-[5px] border-0 outline:none bg-input-bg focus:border-input-bg focus:ring-0 focus:outline-none"
                  id="name"
                />
                <p className="text-left text-[13px] text-[red] ml-2.5 mr-0 mt-0 mb-2.5">
                  {errors.name && touched.name && errors.name}
                </p>
                <input
                  type="email"
                  name="email"
                  data-testid="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter your email"
                  className="form-control inp_text w-full box-border text-sm mt-0 mb-[15px] mx-0 p-[15px] rounded-[5px] border-0 outline:none bg-input-bg focus:border-input-bg focus:ring-0 focus:outline-none"
                  id="email"
                />
                <p className="text-left text-[13px] text-[red] ml-2.5 mr-0 mt-0 mb-2.5">
                  {errors.email && touched.email && errors.email}
                </p>
                <input
                  type="password"
                  name="password"
                  data-testid="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter your password"
                  className="form-control w-full box-border text-sm mt-0 mb-[15px] mx-0 p-[15px] rounded-[5px] border-0 outline:none bg-input-bg focus:border-input-bg focus:ring-0 focus:outline-none"
                />
                <p className="text-left text-[13px] text-[red] ml-2.5 mr-0 mt-0 mb-2.5">
                  {errors.password && touched.password && errors.password}
                </p>
                <button
                  type="submit"
                  className="uppercase w-full text-footer-bg text-sm transition-all duration-[0.3] ease-[ease] cursor-pointer p-[15px] rounded-[5px] border-0 outline-none bg-[#4b6cb7] active:bg-[#395591]"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login;
