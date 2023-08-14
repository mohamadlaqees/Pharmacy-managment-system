import React, { useEffect, useRef, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Pagination } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProdcut, reset, searchByName } from "../states/storeSlice";
import Loading from "../Components/loading";
function Supplier() {
  const {
    error,
    loading,
    data,
    total,
    name,
    brand,
    category,
    dosage,
    route,
    maxPrice,
    minPrice,
    otc,
    rating,
    availability,
  } = useSelector((state) => state.storeSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [PN, setPN] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const dataInPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    if (searchInput !== "") {
      dispatch(reset());
      dispatch(searchByName({ PN, name: searchInput }));
    } else {
      dispatch(reset());
      dispatch(getProdcut(PN));
    }
  }, [
    dispatch,
    PN,
    name,
    brand,
    category,
    dosage,
    route,
    searchInput,
    maxPrice,
    minPrice,
    availability,
    otc,
    rating,
  ]);
  const onSearch = (value) => {
    setSearchInput(value);
    if (value) {
      dispatch(searchByName({ PN, name: value }));
    } else {
      setSearchInput("");
      dispatch(getProdcut());
    }
  };
  const onKey = (event) => {
    if (event.key === "Enter") {
      onSearch(searchInput);
    }
  };
  return (
    <div>
      <div className="bg-white rounded-md p-8 w-full">
        <div className=" w-full m-auto show:w-1/2 block mb-3  ">
          <InputGroup>
            <InputGroup.Text
              id="basic-addon1"
              class="flex items-center justify-center  bg-secondry text-white p-2 rounded-md cursor-pointer hover:bg-blue-600 duration-.3s"
            >
              <i className="fas fa-search"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder={"Search"}
              aria-label="Search"
              aria-describedby="basic-addon2"
              style={{
                boxShadow: "none",
                border: "2px solid #2563eb",
              }}
              onChange={(e) => onSearch(e.target.value)}
              onKeyDown={(e) => onKey(e)}
            />
          </InputGroup>
        </div>
        <div>
          <Loading loading={loading}>
            <div>
              {data.map(({ name, id, product_id, labeller, price }, i) => {
                return (
                  <div
                    className={`p-2 ${
                      i === data.length - 1 ? "border-b-0 mb-1" : "border-b-2"
                    } border-gray-200 ${
                      i === 0 ? "mt-2" : ""
                    } flex justify-between cursor-pointer hover:bg-slate-200 transition-all relative`}
                    key={id}
                  >
                    <div className="flex gap-3 flex-1">
                      <div>
                        <img
                          src="/images/med.jpg"
                          alt=""
                          className="rounded-full w-20 h-20"
                        />
                      </div>
                      <div className="flex justify-center items-center">
                        <span className="text-font2">{name}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-gray-500 hover:text-blue-600 text-xl transition-all">
                        <i
                          className="fa-solid fa-arrow-right"
                          onClick={() =>
                            navigate(
                              `SupplyProducts/${
                                id ? id : product_id ? product_id : ""
                              }`
                            )
                          }
                        ></i>
                      </div>
                    </div>
                  </div>
                );
              })}
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
    </div>
  );
}

export default Supplier;
