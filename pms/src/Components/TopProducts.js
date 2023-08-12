import React from "react";
import { Container } from "react-bootstrap";

function topProduct({ title, data=[] }) {
  return (
    <>
      <Container className="overflow-auto text-white text-bold fs-5 bg-text-blue-600 h-100  shadow-md shadow-text-blue-600 rounded ">
        {title}
        <ol className="list-group m-0 p-0 overflow-auto ">
        {
          console.log("data",data)
        }  
        {
           
            data.map((product) => { 
            return (
              <li className="list-group-item hover:border-2 cursor-pointer hover:border-text-blue-600  d-flex justify-content-between  mb-1 ">
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
