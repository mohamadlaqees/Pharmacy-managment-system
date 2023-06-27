import * as React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import { message, Space } from "antd";
import { useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Login() {
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
      navigate("/dashboard", { replace: true });
      msg("success", "Login success");
    },
  });
  return (
    <React.Fragment>
      <div className="flex justify-between">
        <div className="w-96 h-96 m-auto relative translate-y-1/2  text-start shadow-xl p-5 rounded-md bg-slate-100 xl:-translate-x-10% xl:bottom-48 tra">
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
              <Button variant="outline-primary" type="submit">
                Login
              </Button>
            </div>
            <span className=" block text-center">
              Don't have an account{" ? "}
              <span>
                <Link
                  className="hover:text-blue-600 text-gray-400  transition no-underline"
                  to={"/register"}
                >
                  Register
                </Link>
              </span>
            </span>
          </Form>
        </div>
        <div className="h-full">
          <img
            src="/images/a.png"
            alt=""
            className="h-photo hidden xl:block "
          />
        </div>
      </div>
    </React.Fragment>
  );
}
