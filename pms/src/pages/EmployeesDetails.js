import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import dayjs from "dayjs";
import { TimePicker } from "antd";

function EmployeesDetails() {
  const [Saturday, setSaturday] = useState([]);
  const [Sunday, setSunday] = useState([]);
  const [Monday, setMonday] = useState([]);
  const [Tuesday, setTuesday] = useState([]);
  const [Wednesday, setWednesday] = useState([]);
  const [Thursday, setThursday] = useState([]);
  const [Friday, setFriday] = useState([]);
  console.log(dayjs(Saturday[0]).format("HH:mm:ss"));
  return (
    <div className="page flex gap-4">
      <div className="rounded-md bg-white shadow-md p-4 h-form w-64  mt-24  ">
        <div className="p-3">
          <img src="/images/user.jpg" alt="" className="rounded-full" />
        </div>
        <span className="p-2 block text-center font-bold">Mohammad laqees</span>
        <span className="p-2 block text-center text-font2">User</span>
        <div className="d-grid gap-2 mb-8">
          <button
            type="submit"
            className=" mt-3 p-1 m-2 border-secondry border-2 text-secondry rounded-md hover:text-white hover:bg-secondry hover:border-secondry duration-.3s  text-center"
          >
            Send to employee
          </button>
        </div>
      </div>
      <div className="rounded-md bg-white shadow-md p-4 w-form h-form  mt-24  ">
        <div className="flex justify-between  border-b-2 border-slate-100 p-3 text-font1">
          <span className="block">Full name</span>
          <span className="text-font2  w-72 flex flex-wrap">bla bla</span>
        </div>
        <div className="flex justify-between  border-b-2 border-slate-100 p-3 text-font1">
          <span className="block"> Email</span>
          <span className="text-font2  w-72 flex flex-wrap">bla bla</span>
        </div>
        <div className="flex justify-between  border-b-2 border-slate-100 p-3 text-font1">
          <span className="block"> Phone</span>
          <span className="text-font2  w-72 flex flex-wrap">bla bla</span>
        </div>
        <div className="flex justify-between  border-b-2 border-slate-100 p-3 text-font1">
          <span className="block"> Address</span>
          <span className="text-font2  w-72 flex flex-wrap">bla bla</span>
        </div>
        <div className="flex justify-between  border-b-2 border-slate-100  p-3 text-font1">
          <span className="block"> Date</span>
          <span className="text-font2  w-72 flex flex-wrap">bla bla</span>
        </div>
        <div className="flex justify-between   p-3 text-font1">
          <span className="block">WorkDays</span>
          <span className="text-font2  w-72  ">"Saturday"</span>
        </div>
      </div>
      <div className="hidden md:block md:visible rounded-md relative bg-white shadow-md  w-form h-form  mt-24   ">
        <div className="absolute -top-6 w-full p-1  bg-blue-600 text-white font-bold text-center rounded-md">
          Available days in week
        </div>
        <div className="m-4 flex justify-between">
          <Form.Label className="text-blue-600">Saturday</Form.Label>
          <TimePicker.RangePicker
            value={Saturday}
            onChange={(e, timeString) => {
              setSaturday(e);
            }}
          />
        </div>
        <div className="m-4 flex justify-between">
          <Form.Label className="text-blue-600">Sunday</Form.Label>
          <TimePicker.RangePicker
            value={Sunday}
            onChange={(e, timeString) => {
              setSunday(e);
            }}
          />
        </div>
        <div className="m-4 flex justify-between">
          <Form.Label className="text-blue-600">Monday</Form.Label>
          <TimePicker.RangePicker
            value={Monday}
            onChange={(e, timeString) => {
              setMonday(e);
            }}
          />
        </div>
        <div className="m-4 flex justify-between">
          <Form.Label className="text-blue-600">Tuesday</Form.Label>
          <TimePicker.RangePicker
            value={Tuesday}
            onChange={(e, timeString) => {
              setTuesday(e);
            }}
          />
        </div>
        <div className="m-4 flex justify-between">
          <Form.Label className="text-blue-600">Wednesday</Form.Label>
          <TimePicker.RangePicker
            value={Wednesday}
            onChange={(e, timeString) => {
              setWednesday(e);
            }}
          />
        </div>
        <div className="m-4 flex justify-between">
          <Form.Label className="text-blue-600">Thursday</Form.Label>
          <TimePicker.RangePicker
            value={Thursday}
            onChange={(e, timeString) => {
              setThursday(e);
            }}
          />
        </div>
        <div className="m-4 flex justify-between">
          <Form.Label className="text-blue-600">Friday</Form.Label>
          <TimePicker.RangePicker
            value={Friday}
            onChange={(e, timeString) => {
              setFriday(e);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default EmployeesDetails;
