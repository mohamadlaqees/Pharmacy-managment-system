import { InputNumber, Menu, message } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Loading from "../Components/loading";
import { useDispatch, useSelector } from "react-redux";
import { addVaccancies, resetJ } from "../states/jobSlice";
import { useNavigate } from "react-router-dom";
import vac from '../images/vacancy.png'
function AddVacancy() {
  const { loading, successJ, errorJ } = useSelector((state) => state.jobSlice);
  const { userId } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(resetJ());
    if (successJ !== null) {
      msg("success", successJ);
      dispatch(resetJ());
      navigate("/dashboard");
    }
    if (errorJ !== null) {
      msg("error", errorJ);
    }
  }, [errorJ, successJ, navigate, dispatch]);

  const SignupSchema = Yup.object().shape({
    salary: Yup.number().required("Required"),
    Ddate: Yup.date().required("Required"),
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
      salary: "",
      Ddate: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async () => {
      if (nOfV !== "" && desc !== "" && Jtype !== "" && Jtitle !== "") {
        console.log(
          userId,
          Jtitle,
          Jtype,
          desc,
          nOfV,
          formik.values.salary,
          formik.values.Ddate
        );
        dispatch(
          addVaccancies({
            title: Jtitle,
            type: Jtype,
            desc,
            nOfV,
            salary: formik.values.salary,
            Ddate: formik.values.Ddate,
          })
        );
      } else {
        msg("error", "Please fill the rest field");
      }
    },
  });

  const [Jtitle, setJTitle] = useState("");
  const [Jtype, setJType] = useState("");
  const [desc, setDesc] = useState("");
  const [nOfV, setNOfV] = useState("");

  function getItem(label, key, children, type) {
    return {
      key,
      children,
      label,
      type,
    };
  }

  const title = [
    getItem("Job title", "sub1", [
      getItem("administrator", "administrator"),
      getItem("pharmacist", "pharmacist"),
    ]),
  ];
  const types = [
    getItem("Types", "sub1", [
      getItem("Full time", "Full time"),
      getItem("part time", "part time"),
    ]),
  ];

  const jobTitle = (item, key) => {
    setJTitle(item.key);
  };
  const jobTypes = (item, key) => {
    setJType(item.key);
  };

  return (
    <div className="bg-white pt-4 pb-4 shadow-md h-fit rounded-md w-full mt-1 relative">
      <div className="absolute top-0 w-full p-1  bg-blue-600 text-white font-bold text-center rounded-md">
        Add vacancy
      </div>
      <div className="absolute bottom-0 w-full h-7  bg-blue-600 text-white font-bold text-center rounded-md"></div>

      <div className="bg-white rounded-md p-4 shadow-lg  ">
        <Form onSubmit={formik.handleSubmit}>
          <div className="flex gap-4">
            <div className="rounded-md bg-white shadow-md  w-72 h-form    ">
              <div className=" text-center p-1">
                <img
                  src={vac}
                  alt=""
                  className="rounded-full w-64 h-64"
                />
              </div>
              <span className="p-2 block text-center text-font2">
                Jop title:
              </span>
              <span className="p-2 block text-center text-main">{Jtitle}</span>
            </div>
            <div
              className="rounded-md bg-white  shadow-md p-4  h-form   "
              style={{ width: "1000px" }}
            >
              <div className="w-job mt-8 ml-8">
                <div className="xl:flex justify-around border-b-2 border-slate-100">
                  <Form.Group className="mb-4 xl:col-md-6  text-font1">
                    <span className="p-2 block  text-main text-lg">
                      <Menu
                        onSelect={(item, key) => jobTitle(item, key)}
                        style={{
                          width: 256,
                          color: "#757575",
                        }}
                        items={title}
                      />{" "}
                    </span>
                  </Form.Group>
                  <Form.Group className="mb-4 xl:col-md-6  text-font1">
                    <span className="p-2 block  text-main text-lg">
                      <Menu
                        onSelect={(item, key) => jobTypes(item, key)}
                        style={{
                          width: 256,
                          color: "#757575",
                        }}
                        items={types}
                      />{" "}
                    </span>
                  </Form.Group>
                </div>
                <div className="xl:flex justify-around border-b-2 mt-4 border-slate-100">
                  <Form.Group className=" mt-4 xl:col-md-6 flex gap-3  text-font1">
                    <Form.Label>Number of vaccancies</Form.Label>
                    <div className="text-center">
                      <InputNumber
                        min={1}
                        value={nOfV}
                        onChange={(e) => {
                          setNOfV(e);
                        }}
                        style={{
                          color: "#757575",
                        }}
                      />{" "}
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-4 xl:col-md-6  text-font1">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control
                      name="salary"
                      type="text"
                      value={formik.values.salary}
                      onChange={formik.handleChange}
                      isInvalid={
                        formik.touched.salary && !!formik.errors.salary
                      }
                      isValid={formik.touched.salary && !formik.errors.salary}
                      onBlur={formik.handleBlur}
                      style={{
                        color: "#757575",
                        width: "300px",
                      }}
                    />
                  </Form.Group>
                </div>
                <div className="flex justify-around border-b-2 mt-4 border-slate-100">
                  <Form.Group className="mb-4 xl:col-md-6  text-font1">
                    <div>
                      <Form.Label>Deadline</Form.Label>
                      <Form.Control
                        name="Ddate"
                        type="date"
                        value={formik.values.Ddate}
                        onChange={formik.handleChange}
                        isInvalid={
                          formik.touched.Ddate && !!formik.errors.Ddate
                        }
                        isValid={formik.touched.Ddate && !formik.errors.Ddate}
                        onBlur={formik.handleBlur}
                        style={{
                          width: "300px",
                          color: "#757575",
                        }}
                      />
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-4 xl:col-md-6  text-font1">
                    <div className="flex gap-2 ">
                      <label
                        className="flex items-center text-font1"
                        htmlFor="desc"
                      >
                        Description
                      </label>
                      <textarea
                        className="border-2 p-2 rounded-md outline-none border-gray-200"
                        value={desc}
                        id="desc"
                        cols="30"
                        rows="2"
                        onChange={(e) => setDesc(e.target.value)}
                        style={{
                          color: "#757575",
                          width: "300px",
                        }}
                      ></textarea>
                    </div>
                  </Form.Group>
                </div>
              </div>
            </div>
          </div>

          <div className="flex mt-4 gap-2 ">
            <div className="d-grid  ">
              <Loading
                loading={loading}
                error={errorJ}
                clss={
                  "w-64 p-1  border-main border-2 text-main rounded-md  duration-.3s"
                }
              >
                <button
                  type="submit"
                  className="  w-64 p-1 border-main border-2 text-main rounded-md hover:text-white hover:bg-Hmain hover:border-Hmain duration-.3s  text-center"
                >
                  Add{" "}
                </button>
              </Loading>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AddVacancy;
