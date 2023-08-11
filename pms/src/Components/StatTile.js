import React from 'react'

function StatTile({icon,title,data}) {
  return (
    <div className="h-14 bg-SSReg rounded overflow-hidden shadow-md shadow-primary text-primary d-flex align-items-center justify-content-around">
   <i className={`${icon} text-4xl` }></i>
    <div className="text-2xl ">{title}</div>
    <div className="text-4xl ">{data}</div>
  </div>
  )
}

export default StatTile