import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getPurchases } from "../states/supplySlice";
import AllReports from "../Components/AllReports";
import Loading from "../Components/loading";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { message } from "antd";

function Reports() {
  const { purchases, total, loadingP } = useSelector(
    (state) => state.supplySlice
  );

  const dispatch = useDispatch();
  const [PN, setPN] = useState(1);
  const [date, setDate] = useState("");

  const todayDate = new Date();
  let day = todayDate.getDate();
  let month = todayDate.getMonth() + 1;
  let year = todayDate.getFullYear();

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

  useEffect(() => {
    dispatch(getPurchases({ PN, date }));
  }, [dispatch, PN]);

  const dataInPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const dateHandler = (e) => {
    setDate(dayjs(e.$d).format("YYYY-MM-DD").toString());
    if (
      dayjs(e.$d).format("YYYY") <= year &&
      dayjs(e.$d).format("MM") <= month &&
      dayjs(e.$d).format("DD") <= day
    ) {
      setTimeout(() => {
        dispatch(
          getPurchases({
            PN,
            date: dayjs(e.$d).format("YYYY-MM-DD").toString(),
          })
        );
      }, 500);
    } else {
      msg("error", "The date field is wrong");
    }
  };

  return (
    <div>
      <Loading loading={loadingP}>
        <div className="bg-white rounded-md p-8 w-full">
          <div className="flex justify-end">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Filter by date"
                  onChange={(e) => dateHandler(e)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="mt-6">
            <Table striped bordered hover size="sm">
              <thead>
                <tr className="text-center ">
                  <th className="p-4">Id</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Total</th>
                  <th className="p-4">Date</th>
                  <th className="p-4"></th>
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
