import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import AllStockProducts from "../Components/AllStockProducts";
import Loading from "../Components/loading";
import { getStockProducts } from "../states/stockSlice";

function Stock() {
  const { stockProducts, total, loadingS } = useSelector(
    (state) => state.stockSlice
  );

  const dispatch = useDispatch();

  const [PN, setPN] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const dataInPage = 15;

  useEffect(() => {
    dispatch(getStockProducts());
  }, [dispatch]);

  return (
    <div className="page">
      <div className="bg-white rounded-md p-8 w-full">
        <Loading loading={loadingS}>
          <div>
            <Table striped bordered hover size="sm">
              <thead>
                <tr className="text-center ">
                  <th className="p-4">Id</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Order limit</th>
                  <th className="p-4">Minimum stock level</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <AllStockProducts data={stockProducts} />
            </Table>
          </div>
        </Loading>
      </div>
      <div className="mt-3 p-2   ">
        <ul className="flex justify-center gap-3 ">
          <Pagination
            defaultCurrent={currentPage}
            total={total !== null ? total : 0}
            pageSize={dataInPage}
            onChange={(pN, pS) => {
              setCurrentPage(PN);
              setPN(pN);
            }}
            showSizeChanger={false}
          />
        </ul>
      </div>
    </div>
  );
}

export default Stock;
