import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { message } from "antd";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Checkbox } from "antd";

function EditProfile() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [birthDate, setbirthDate] = useState(null);

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    fullName: Yup.string().required("Required").min(2, "Too Short!"),
    phone: Yup.number().required("Required").min(3, "Too Short!"),
    address: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
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
    enableReinitialize: true,
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      date: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async () => {
      console.log("registered");
      msg("success", "Updated");
      navigate("profile");
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
    console.log("checked = ", checkedValues);
  };
  return (
    <Form onSubmit={formik.handleSubmit}>
      <div className="page flex justify-center gap-4">
        <div className="rounded-md bg-white shadow-md p-4 w-64 h-form  mt-24  ">
          <div className="p-3">
            <img src="/images/user.jpg" alt="" className="rounded-full" />
          </div>
          <span className="p-2 block text-center font-bold">
            Mohammad laqees
          </span>
          <span className="p-2 block text-center text-font2">User</span>
          <div className="d-grid gap-2 mb-8">
            <button
              type="submit"
              className=" mt-3 p-1 border-secondry border-2 text-secondry rounded-md hover:text-white hover:bg-secondry hover:border-secondry duration-.3s  text-center"
            >
              Save
            </button>
          </div>
        </div>
        <div className="rounded-md bg-white shadow-md p-4 w-form h-form   mt-24  ">
          <Form.Group>
            <div className="flex justify-between mb-2 border-b-2 border-slate-100 p-3 text-font1">
              <span className="flex item-center">Full name</span>
              <Form.Control
                name="fullName"
                type="text"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                isInvalid={formik.touched.fullName && !!formik.errors.fullName}
                isValid={formik.touched.fullName && !formik.errors.fullName}
                onBlur={formik.handleBlur}
                style={{
                  width: "300px",
                  color: "#757575",
                }}
              />
            </div>
          </Form.Group>
          <Form.Group>
            <div className="flex justify-between mb-2 border-b-2 border-slate-100 p-3 text-font1">
              <span className="flex item-center"> Email</span>
              <Form.Control
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                isInvalid={formik.touched.email && !!formik.errors.email}
                isValid={formik.touched.email && !formik.errors.email}
                onBlur={formik.handleBlur}
                style={{
                  width: "300px",
                  color: "#757575",
                }}
              />
            </div>
          </Form.Group>
          <Form.Group>
            <div className="flex justify-between mb-2 border-b-2 border-slate-100 p-3 text-font1">
              <span className="flex item-center"> Phone</span>
              <Form.Control
                name="phone"
                type="text"
                value={formik.values.phone}
                onChange={formik.handleChange}
                isInvalid={formik.touched.phone && !!formik.errors.phone}
                isValid={formik.touched.phone && !formik.errors.phone}
                onBlur={formik.handleBlur}
                style={{
                  width: "300px",
                  color: "#757575",
                }}
              />
            </div>
          </Form.Group>
          <Form.Group>
            <div className="flex justify-between mb-2 border-b-2 border-slate-100 p-3 text-font1">
              <span className="flex item-center"> Address</span>
              <Form.Control
                name="address"
                type="text"
                value={formik.values.address}
                onChange={formik.handleChange}
                isInvalid={formik.touched.address && !!formik.errors.address}
                isValid={formik.touched.address && !formik.errors.address}
                onBlur={formik.handleBlur}
                style={{
                  width: "300px",
                  color: "#757575",
                }}
              />
            </div>
          </Form.Group>
          <Form.Group>
            <div className="flex justify-between mb-2  p-3 text-font1">
              <span className="flex item-center">Birthdate</span>
              <Form.Control
                name="date"
                type="date"
                value={formik.values.date}
                onChange={formik.handleChange}
                isInvalid={formik.touched.date && !!formik.errors.date}
                isValid={formik.touched.date && !formik.errors.date}
                onBlur={formik.handleBlur}
                style={{
                  width: "300px",
                  color: "#757575",
                }}
              />
            </div>
          </Form.Group>
        </div>
        <div className=" rounded-md bg-white shadow-md p-4 w-64 h-form  mt-24  hidden md:block md:visible    ">
          <span className=" text-blue-600 ml-5">WorkDays</span>
          <Checkbox.Group
            className="days"
            options={plainOptions}
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
    </Form>
  );
}

export default EditProfile;
