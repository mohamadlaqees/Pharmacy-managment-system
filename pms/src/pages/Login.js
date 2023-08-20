import * as React from "react";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import { message } from "antd";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../states/loginSlice";
import { getUserData } from "../states/authSlice";
import Loading from "../Components/loading";

export default function Login() {
  const { errorL, successL, loading } = useSelector(
    (state) => state.loginSlice
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required").min(8, "Too Short!"),
  });
  const msg = (type, msg) => {
    switch (type) {
      case "success":
        message.success(msg);
        break;
      case "error":
        message.error(msg);
        break;
      default:
        return "";
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async () => {
      dispatch(
        login({ email: formik.values.email, password: formik.values.password })
      );
    },
  });

  React.useEffect(() => {
    if (successL !== null) {
      msg("success", successL);
      dispatch(getUserData());
      localStorage.setItem("email", formik.values.email);
      navigate("dashboard", { replace: true });
    }
    if (errorL !== null) {
      msg("error", errorL);
    }
  }, [errorL, successL, dispatch, navigate, formik.values.email]);

  return (
    <React.Fragment>
      <div className="flex justify-between">
        <div className="w-96  m-auto relative translate-y-1/2  text-start shadow-xl p-5 rounded-md bg-slate-100 xl:-translate-x-10% xl:bottom-48 ">
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-blue-600">Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                value={formik.values.email}
                onChange={formik.handleChange}
                isInvalid={formik.touched.email && !!formik.errors.email}
                isValid={formik.touched.email && !formik.errors.email}
                onBlur={formik.handleBlur}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-blue-600">Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                vlaue={formik.values.password}
                onChange={formik.handleChange}
                isInvalid={formik.touched.password && !!formik.errors.password}
                isValid={formik.touched.password && !formik.errors.password}
                placeholder="Password"
                onBlur={formik.handleBlur}
              />
            </Form.Group>
            <div className="d-grid gap-2 mb-8">
              <Loading loading={loading} error={errorL}>
                <button
                  type="submit"
                  className="p-1 border-main border-2 text-main rounded-md hover:text-white hover:bg-Hmain hover:border-Hmain duration-.3s"
                >
                  Login
                </button>
              </Loading>

              <span className=" block text-center text-main ">
                <span>
                  <Link
                    className="hover:text-main text-gray-400  transition no-underline"
                    to={"/forgot-password"}
                  >
                    Forgot password
                  </Link>
                </span>
              </span>
            </div>
          </Form>
        </div>
        <div className="h-full">
          <img
            src="../images/a.png"
            alt=""
            className="h-photo hidden xl:block "
          />
        </div>
      </div>
    </React.Fragment>
  );
}
