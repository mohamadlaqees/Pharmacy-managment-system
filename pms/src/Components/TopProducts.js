import React from "react";
import { Container } from "react-bootstrap";

function topProduct({ title, data=[] }) {
  return (
    <>
      <Container className="overflow-auto text-white text-bold fs-5 bg-SReg h-100  shadow-md shadow-SReg rounded ">
        {title}
        <ol className="list-group m-0 p-0 overflow-auto ">
        {
          console.log("data",data)
        }  
        {
           
            data.map((product) => { 
            return (
              <li className="list-group-item hover:border-2 cursor-pointer hover:border-SReg  d-flex justify-content-between  mb-1 ">
                {product.name}
              </li>
            );
          })
        }
        </ol>
      </Container>
    </>
  );
}

export default topProduct;
