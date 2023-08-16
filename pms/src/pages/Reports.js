import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getPurchases } from "../states/supplySlice";
import AllReports from "../Components/AllReports";
import Loading from "../Components/loading";

function Reports() {
  const { purchases, total, loadingP } = useSelector(
    (state) => state.supplySlice
  );

  const dispatch = useDispatch();
  const [PN, setPN] = useState(1);

  useEffect(() => {
    dispatch(getPurchases(PN));
  }, [dispatch, PN]);

  const dataInPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <Loading loading={loadingP}>
        <div className="bg-white rounded-md p-8 w-full">
          <div className="mt-8">
            <Table striped bordered hover size="sm">
              <thead>
                <tr className="text-center ">
                  <th className="p-4">Id</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Total</th>
                  <th className="p-4">Date</th>
                </tr>
              </thead>
              <AllReports data={purchases} />
            </Table>
          </div>
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
      </Loading>
    </div>
  );
}

export default Reports;
