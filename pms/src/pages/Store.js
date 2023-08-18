import React from "react";
import { useState, useEffect } from "react";
import { message, Pagination } from "antd";
import AllProducts from "../Components/AllProducts";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilteredProducts,
  getProdcut,
  reset,
  searchByBrand,
  searchByCategories,
  searchByDosageForm,
  searchByName,
  searchByRoute,
} from "../states/storeSlice";
function Store() {
  const {
    success,
    error,
    data,
    total,
    name,
    brand,
    category,
    dosage,
    route,
    searchInput,
    maxPrice,
    minPrice,
    otc,
    rating,
    availability,
  } = useSelector((state) => state.storeSlice);
  const dispatch = useDispatch();
  const [PN, setPN] = useState(1);

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

  React.useEffect(() => {
    if (success !== null) {
      msg("success", `${success}`);
    }
    if (error !== null) {
      msg("error", `${error}`);
    }
  }, [success, error]);

  useEffect(() => {
    if (name === true && searchInput !== null) {
      dispatch(reset());
      setTimeout(() => {
        dispatch(searchByName({ PN, name: searchInput }));
      }, 500);
    } else if (brand === true && searchInput !== null) {
      dispatch(reset());
      setTimeout(() => {
        dispatch(searchByBrand({ PN, brand: searchInput }));
      }, 500);
    } else if (category === true && searchInput !== null) {
      dispatch(reset());
      setTimeout(() => {
        dispatch(searchByCategories({ PN, category: searchInput }));
      }, 500);
    } else if (dosage === true && searchInput !== null) {
      dispatch(reset());
      setTimeout(() => {
        dispatch(searchByDosageForm({ PN, dosage: searchInput }));
      }, 500);
    } else if (route === true && searchInput !== null) {
      dispatch(reset());
      setTimeout(() => {
        dispatch(searchByRoute({ PN, route: searchInput }));
      }, 500);
    } else if (maxPrice > 0) {
      dispatch(
        getFilteredProducts({
          PN,
          availability: availability !== null ? availability : "",
          otc: otc !== null ? otc : "",
          maxPrice,
          minPrice,
          rating: rating !== null ? rating : "",
        })
      );
    } else if (availability !== null) {
      dispatch(
        getFilteredProducts({
          PN,
          availability,
          otc: otc !== null ? otc : "",
          maxPrice: maxPrice !== null ? maxPrice : "",
          minPrice: minPrice !== null ? minPrice : "",
          rating: rating !== null ? rating : "",
        })
      );
    } else if (otc !== null) {
      dispatch(
        getFilteredProducts({
          PN,
          availability: availability !== null ? availability : "",
          otc,
          maxPrice: maxPrice !== null ? maxPrice : "",
          minPrice: minPrice !== null ? minPrice : "",
          rating: rating !== null ? rating : "",
        })
      );
    } else if (rating > 0) {
      dispatch(
        getFilteredProducts({
          PN,
          availability: availability !== null ? availability : "",
          otc: otc !== null ? otc : "",
          maxPrice: maxPrice !== null ? maxPrice : "",
          minPrice: minPrice !== null ? minPrice : "",
          rating,
        })
      );
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

  const dataInPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="page">
      <div className=" grid grid-cols-fluid grid-rows-fluid    ">
        <AllProducts data={data} img={"/images/med.jpg"}></AllProducts>
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

export default Store;
