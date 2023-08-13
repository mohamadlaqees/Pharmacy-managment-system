import * as React from "react";
import { message } from "antd";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetA, resetPassword } from "../states/authSlice";
import Loading from "../Components/loading";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function ResetPassword() {
  const { errorA, successA, loadingA } = useSelector(
    (state) => state.authSlice
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();
  const [searchParam] = useSearchParams();
  React.useEffect(() => {
    if (successA !== null) {
      navigate("/");
      msg("sucesss", successA);
      dispatch(resetA());
    } else {
      if (errorA !== null) {
        msg("error", errorA);
      }
    }
  }, [successA, errorA, navigate, dispatch]);
  const msg = (type, msg) => {
    switch (type) {
      case "sucesss":
        message.success(msg);
        break;
      case "error":
        message.error(msg);
        break;
      default:
        return "";
    }
  };
  const SignupSchema = Yup.object().shape({
    password: Yup.string().required("Required").min(8, "Too Short!"),
    passwordConfirm: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  const formik = useFormik({
    initialValues: {
      password: "",
      passwordConfirm: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async () => {
      dispatch(
        resetPassword({
          email: searchParam.get("email"),
          token,
          password: formik.values.password,
          passwordConfirm: formik.values.passwordConfirm,
        })
      );
    },
  });

  return (
    <React.Fragment>
      <div className="flex justify-between">
        <div className="Rpass ">
          <div className="mt-24 text-lg text-center ">
            <div className="d-grid gap-2 ">
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    isInvalid={
                      formik.touched.password && !!formik.errors.password
                    }
                    isValid={formik.touched.password && !formik.errors.password}
                    onBlur={formik.handleBlur}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    name="passwordConfirm"
                    type="password"
                    vlaue={formik.values.passwordConfirm}
                    onChange={formik.handleChange}
                    isInvalid={
                      formik.touched.passwordConfirm &&
                      !!formik.errors.passwordConfirm
                    }
                    isValid={
                      formik.touched.passwordConfirm &&
                      !formik.errors.passwordConfirm
                    }
                    placeholder="Confirm password "
                    onBlur={formik.handleBlur}
                  />
                </Form.Group>
                <div className="d-grid gap-2 mt-20">
                  <Loading error={errorA} loading={loadingA}>
                    <button
                      type="submit"
                      className="p-1  border-main border-2 text-main rounded-md hover:text-white hover:bg-main hover:border-Hmain duration-.3s"
                    >
                      Login
                    </button>
                  </Loading>
                </div>
              </Form>
            </div>
          </div>
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
