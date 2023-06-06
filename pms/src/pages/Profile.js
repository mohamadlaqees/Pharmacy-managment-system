import React from "react";

function Profile() {
  return (
    <div className="page flex justify-center gap-4">
      <div className="rounded-md bg-white shadow-md p-4 h-fit w-64  mt-24  ">
        <div className="p-3">
          <img src="/images/user.jpg" alt="" className="rounded-full" />
        </div>
        <span className="p-2 block text-center font-bold">Mohammad laqees</span>
        <span className="p-2 block text-center text-font2">User</span>
      </div>
      <div className="rounded-md bg-white shadow-md p-4 w-form h-fit  mt-24  ">
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
          <span className="text-font2  w-72  ">
            "Saturday"
          </span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
