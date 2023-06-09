import * as React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import { message } from "antd";
import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox } from "antd";
export default function Register() {
  const [checked, setChecked] = React.useState(false);
  const navigate = useNavigate();
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required").min(8, "Too Short!"),
    Fname: Yup.string().required("Required").min(2, "Too Short!"),
    Lname: Yup.string().required("Required").min(2, "Too Short!"),
    phone: Yup.number().required("Required"),
    birthDate: Yup.date().required("Required"),
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
      Fname: "",
      Lname: "",
      email: "",
      password: "",
      phone: "",
      birthDate: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async () => {
      if (checked) {
        msg(
          "success",
          "your request was sent to admin \n please check your email"
        );
        navigate("/login");
      } else {
        msg("error", "WorkDays must not be empty");
      }
    },
  });
  const plainOptions = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  const onChange = (checkedValues) => {
    if (checkedValues.length !== 0) {
      setChecked(true);
    } else if (checkedValues.length == 0) {
      setChecked(false);
    }
    console.log("checked = ", checkedValues);
  };
  return (
    <React.Fragment>
      <div className="flex justify-between">
        <div className="flex gap-8 w-form md:w-form2  m-auto relative translate-y-3% md:translate-y-20% xl:translate-y-30%  text-start shadow-xl pt-5 pb-5 pr-4 pl-4 rounded-md bg-slate-100 xl:-translate-x-1% xl:bottom-48 tra">
          <Form onSubmit={formik.handleSubmit}>
            <div className="flex gap-3 mb-3">
              <Form.Group className="col-sm-6 ">
                <Form.Label className="text-blue-600">First name</Form.Label>
                <Form.Control
                  name="Fname"
                  type="text"
                  placeholder="First name"
                  value={formik.values.Fname}
                  onChange={formik.handleChange}
                  isInvalid={formik.touched.Fname && !!formik.errors.Fname}
                  isValid={formik.touched.Fname && !formik.errors.Fname}
                  onBlur={formik.handleBlur}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.Fname}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="col-sm-6 ">
                <Form.Label className="text-blue-600">Last name</Form.Label>
                <Form.Control
                  name="Lname"
                  type="text"
                  placeholder="Last name"
                  value={formik.values.Lname}
                  onChange={formik.handleChange}
                  isInvalid={formik.touched.Lname && !!formik.errors.Lname}
                  isValid={formik.touched.Lname && !formik.errors.Lname}
                  onBlur={formik.handleBlur}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.Lname}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </div>

            <Form.Group className="mb-3">
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

            <Form.Group className="mb-3">
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
            <div className="flex gap-3 mb-3">
              <Form.Group className="col-sm-6 ">
                <Form.Label className="text-blue-600">Phone</Form.Label>
                <Form.Control
                  name="phone"
                  type="text"
                  vlaue={formik.values.phone}
                  onChange={formik.handleChange}
                  isInvalid={formik.touched.phone && !!formik.errors.phone}
                  isValid={formik.touched.phone && !formik.errors.phone}
                  placeholder="Phone"
                  onBlur={formik.handleBlur}
                />
              </Form.Group>

              <Form.Group className="col-sm-6 ">
                <Form.Label className="text-blue-600">Birth date</Form.Label>
                <Form.Control
                  name="birthDate"
                  type="date"
                  vlaue={formik.values.birthDate}
                  onChange={formik.handleChange}
                  isInvalid={
                    formik.touched.birthDate && !!formik.errors.birthDate
                  }
                  isValid={formik.touched.birthDate && !formik.errors.birthDate}
                  onBlur={formik.handleBlur}
                />
              </Form.Group>
            </div>
            <div className="block mt-4 mb-4 w-72 text-center ml-auto mr-auto md:hidden md:invisible">
              <span className="  text-blue-600 md:ml-5">WorkDays</span>
              <Checkbox.Group
                className="days"
                options={plainOptions}
                defaultValue={["Apple"]}
                onChange={onChange}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "20px",
                  marginLeft: "20px",
                  marginRight: "20px",
                  marginTop: "30px",
                }}
              />
            </div>
            <div className="d-grid gap-2 mb-8">
              <Button variant="outline-primary" type="submit">
                Register
              </Button>
            </div>
            <span className=" block text-center">
              Already have an account ?{" "}
              <span>
                <Link
                  className="hover:text-blue-600 text-gray-400  transition no-underline"
                  to={"/login"}
                >
                  Login
                </Link>
              </span>
            </span>
          </Form>
          <div className=" hidden md:block md:visible ">
            <span className=" text-blue-600 ml-5">WorkDays</span>
            <Checkbox.Group
              className="days"
              options={plainOptions}
              defaultValue={["Apple"]}
              onChange={onChange}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginLeft: "20px",
                marginRight: "20px",
                marginTop: "30px",
              }}
            />
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
