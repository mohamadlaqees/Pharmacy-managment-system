import React from 'react'

function StatCard({ icon, title, data }) {
  return (
    <div
    style={{
      backgroundImage: "url('/images/pngwing.com.png')",
      backgroundSize: "cover",
    }}
    className="pl-5 pb-5 h-100 bg-primary  rounded shadow-md text-white d-flex align-items-center justify-content-between"
  >
    <div>
      <i className={`${icon} text-4xl`}></i>
      <div className="text-2xl text-gray-100">{title}</div>
    </div>
    <div className="text-4xl p-lg-5">{data}</div>
  </div>
  )
}

export default StatCard