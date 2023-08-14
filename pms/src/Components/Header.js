import React, { useState, useRef, useEffect } from "react";
import Slider from "@mui/material/Slider";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Checkbox } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rate } from "antd";
import {
  getProdcut,
  reset,
  setAvailability,
  setBrand,
  setCategory,
  setDosage,
  setMaxPrice,
  setMinPrice,
  setName,
  setOtc,
  setRating,
  setRoute,
  setSearchValue,
} from "../states/StoreSlice";

function Header({ set, check }) {
  const { userData, image } = useSelector((state) => state.authSlice);
  const { name, brand, category, dosage, route } = useSelector(
    (state) => state.storeSlice
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [placeHolder, setPlaceHolder] = useState("Search");
  const [showF, setShowF] = useState(false);
  const [showS, setShowS] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showP, setShowP] = useState(false);
  const [checkN, setCheckN] = useState(false);
  const [checkB, setCheckB] = useState(false);
  const [checkC, setCheckC] = useState(false);
  const [checkD, setCheckD] = useState(false);
  const [checkO1, setCheckO1] = useState(false);
  const [checkO0, setCheckO0] = useState(false);
  const [range, setRange] = useState([0, 0]);
  const [disable, setDisable] = useState(false);
  const [checkAv, setCheckAv] = useState(false);
  const [checkNAv, setCheckNAv] = useState(false);
  const [checkR, setCheckR] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const popF = useRef();
  const popS = useRef();
  const prof = useRef();

  useEffect(() => {
    let popHandler = (e) => {
      if (!popF.current.contains(e.target)) {
        setShowF(false);
      }
      if (!popS.current.contains(e.target)) {
        setShowS(false);
      }
      if (!prof?.current?.contains(e.target)) {
        setShowP(false);
      }
    };
    document.addEventListener("mousedown", popHandler);
    return () => {
      document.removeEventListener("mousedown", popHandler);
    };
  });

  useEffect(() => {
    if (
      checkAv === false &&
      checkNAv === false &&
      checkO0 === false &&
      checkO1 === false &&
      range[1] === 0
    ) {
      dispatch(setMaxPrice(null));
      dispatch(setMinPrice(null));
      dispatch(setAvailability(null));
      dispatch(setOtc(null));
    }
  }, [checkAv, checkNAv, checkO0, checkO1, range, dispatch]);

  const onChangeN = useCallback(() => {
    setCheckN(!checkN);
    setCheckB(false);
    setCheckC(false);
    setCheckD(false);
    setCheckR(false);
    !checkN ? setPlaceHolder("Search by name") : setPlaceHolder("Search");
    if (name === false || name === null) {
      dispatch(setName(true));
    } else {
      dispatch(setName(false));
    }
    dispatch(setBrand(false));
    dispatch(setCategory(false));
    dispatch(setDosage(false));
    dispatch(setRoute(false));
  }, [checkN]);
  const onChangeB = useCallback(() => {
    setCheckB(!checkB);
    setCheckN(false);
    setCheckC(false);
    setCheckD(false);
    setCheckR(false);
    !checkB ? setPlaceHolder("Search by brand") : setPlaceHolder("Search");
    if (brand === false || brand === null) {
      dispatch(setBrand(true));
    } else {
      dispatch(setBrand(false));
    }
    dispatch(setName(false));
    dispatch(setCategory(false));
    dispatch(setDosage(false));
    dispatch(setRoute(false));
  }, [checkB]);
  const onChangeC = useCallback(() => {
    setCheckC(!checkC);
    setCheckN(false);
    setCheckD(false);
    setCheckR(false);
    setCheckB(false);
    !checkC ? setPlaceHolder("Search by Category") : setPlaceHolder("Search");
    if (category === false || category === null) {
      dispatch(setCategory(true));
    } else {
      dispatch(setCategory(false));
    }
    dispatch(setBrand(false));
    dispatch(setName(false));
    dispatch(setDosage(false));
    dispatch(setRoute(false));
  }, [checkC]);
  const onChangeD = useCallback(() => {
    setCheckD(!checkD);
    setCheckC(false);
    setCheckN(false);
    setCheckR(false);
    setCheckB(false);
    !checkD
      ? setPlaceHolder("Search by dosage form")
      : setPlaceHolder("Search");
    if (dosage === false || dosage === null) {
      dispatch(setDosage(true));
    } else {
      dispatch(setDosage(false));
    }
    dispatch(setBrand(false));
    dispatch(setName(false));
    dispatch(setCategory(false));
    dispatch(setRoute(false));
  }, [checkD]);
  const onChangeR = useCallback(() => {
    setCheckR(!checkR);
    setCheckD(false);
    setCheckC(false);
    setCheckN(false);
    setCheckB(false);
    !checkR ? setPlaceHolder("Search by route") : setPlaceHolder("Search");
    if (route === false || route === null) {
      dispatch(setRoute(true));
    } else {
      dispatch(setRoute(false));
    }
    dispatch(setBrand(false));
    dispatch(setName(false));
    dispatch(setCategory(false));
    dispatch(setDosage(false));
  }, [checkR]);

  const onChangeP = (event, newValue) => {
    setRange(newValue);
  };
  const setHandler = () => {
    if (range[1] > 0) {
      setDisable(true);
      dispatch(setMaxPrice(range[1]));
      dispatch(setMinPrice(range[0]));
    }
  };
  const resetHandler = () => {
    setDisable(false);
    setRange([0, 0]);
    dispatch(setMaxPrice(0));
    dispatch(setMinPrice(0));
  };
  const onChangeAv = () => {
    setCheckAv(!checkAv);
    setCheckNAv(false);
    dispatch(setAvailability(1));
  };
  const onChangeNAv = () => {
    setCheckNAv(!checkNAv);
    setCheckAv(false);
    dispatch(setAvailability(0));
  };
  const onChangeO1 = () => {
    setCheckO1(!checkO1);
    setCheckO0(false);
    dispatch(setOtc(1));
  };
  const onChangeO0 = () => {
    setCheckO0(!checkO0);
    setCheckO1(false);
    dispatch(setOtc(0));
  };
  const onChangeRa = (e) => {
    dispatch(setRating(e));
  };
  const onSearch = (value) => {
    if (value) {
      setSearchInput(value);
      dispatch(setSearchValue(value));
    } else {
      setSearchInput("");
      dispatch(setSearchValue(null));
      dispatch(getProdcut());
    }
  };
  const onKey = (event) => {
    if (event.key === "Enter") {
      onSearch(searchInput);
      setCheckN(!checkN);
      dispatch(setName());
      setCheckB(false);
      setCheckC(false);
      setCheckD(false);
      setCheckR(false);
    }
  };
  const searchHandler = () => {
    if (showSearch === false) {
      navigate("store");
    }
    setShowSearch(!showSearch);
  };
  return (
    <div className=" p-1 flex justify-center md:justify-between   bg-white rounded-md shadow-sm ">
      <div className="hidden show:block">
        <i
          className="  fa fa-light fa-align-left  text-gray-500 cursor-pointer hover:text-blue-600 text-xl transition-all mt-2 ml-2"
          onClick={() => set(!check)}
        ></i>
      </div>
      <div className="block ">
        <i
          className={`fas fa-search absolute right-44
            w-fit -rotate-12 text-xl ${
              showSearch ? "text-Hmain" : "text-gray-500"
            } cursor-pointer transition-all hover:text-Hmain mt-2 mr-2 `}
          onClick={() => searchHandler()}
          title="Search in store tab"
        ></i>
        <div
          className={`  transition-all w-1/2  left-0 translate-x-1/2   absolute ${
            showSearch ? "top-full visible " : "invisible top-0 opacity-0"
          }   block  `}
        >
          <InputGroup>
            <div ref={popS}>
              <InputGroup.Text
                id="basic-addon1"
                class={` flex items-center justify-center ${
                  showS ? "bg-Hmain" : "bg-main"
                }  text-white p-2 h-full w-14  cursor-pointer hover:bg-Hmain duration-.3s`}
                onClick={() => {
                  setShowS(!showS);
                }}
              >
                <i className="fas fa-search"></i>
              </InputGroup.Text>

              <div
                className={`w-80 h-80 rounded-md bg-slate-100 absolute left-0 top-10 shadow-md transition duration-.3s overflow-auto ${
                  showS ? "opacity-100 visible z-10" : "opacity-0 invisible"
                } `}
              >
                <div className="relative">
                  <div className="absolute -top-12 w-full p-1 bg-main text-white font-bold text-center rounded-md">
                    Search by
                  </div>
                  <div className="absolute -bottom-16 w-full h-7  bg-main text-white font-bold text-center rounded-md"></div>
                  <div className="mt-5">
                    <div className="p-2  transition-all  border-gray-500">
                      <Checkbox onChange={onChangeN} checked={checkN}>
                        Name
                      </Checkbox>
                    </div>
                    <div className="p-2  transition-all  border-b-2 border-t-2 border-gray-300">
                      <Checkbox onChange={onChangeB} checked={checkB}>
                        Brand
                      </Checkbox>
                    </div>
                    <div className="p-2  transition-all border-b-2 border-gray-300">
                      <Checkbox onChange={onChangeC} checked={checkC}>
                        Categories
                      </Checkbox>
                    </div>
                    <div className="p-2  transition-all border-b-2 border-gray-300">
                      <Checkbox onChange={onChangeR} checked={checkR}>
                        Route
                      </Checkbox>
                    </div>
                    <div className="p-2  transition-all  border-gray-300">
                      <Checkbox onChange={onChangeD} checked={checkD}>
                        Dosage form
                      </Checkbox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Form.Control
              placeholder={placeHolder}
              aria-label="Search"
              aria-describedby="basic-addon2"
              style={{
                boxShadow: "none",
                border: "2px solid #2563eb",
              }}
              onChange={(e) => onSearch(e.target.value)}
              onKeyDown={(e) => onKey(e)}
            />
            <div ref={popF}>
              <InputGroup.Text
                id="basic-addon1"
                class={` flex items-center justify-center ${
                  showF ? "bg-Hmain" : "bg-main"
                }  text-white p-2 h-full w-14  cursor-pointer hover:bg-Hmain duration-.3s`}
                onClick={() => {
                  setShowF(!showF);
                }}
              >
                <i className="fa-solid fa-sitemap"></i>
              </InputGroup.Text>
              <div
                className={`w-80 h-80 rounded-md bg-slate-100 absolute right-0 top-10 shadow-md transition duration-.3s overflow-auto ${
                  showF ? "opacity-100 visible z-10" : "opacity-0 invisible"
                } `}
              >
                <div className="relative">
                  <div className="absolute -top-12 w-full p-1 bg-main text-white font-bold text-center rounded-md">
                    Filter
                  </div>
                  <div className="absolute -bottom-12 w-full h-7  bg-main text-white font-bold text-center rounded-md"></div>
                  <div className="mt-5">
                    <div className="p-2  transition-all border-b-2 border-gray-300">
                      <div className="text-sm mb-2">Otc</div>
                      <div className="flex gap-3">
                        <Checkbox onChange={onChangeO1} checked={checkO1}>
                          1
                        </Checkbox>
                        <Checkbox onChange={onChangeO0} checked={checkO0}>
                          0
                        </Checkbox>
                      </div>
                    </div>
                    <div className="p-2  transition-all border-b-2 border-gray-300">
                      <div className="text-sm mb-2">Price</div>
                      <Slider
                        value={range}
                        onChange={onChangeP}
                        valueLabelDisplay="auto"
                        min={0}
                        max={1000}
                        disabled={disable}
                      />
                      <div className="flex gap-1">
                        The price is {range[0]} $ - {range[1]} ${" "}
                        <button
                          className={`ml-3 ${
                            disable
                              ? "text-gray-400 border-gray-400 border-2"
                              : "text-main border-main border-2 hover:bg-main hover:text-white transition-all"
                          }   rounded-md`}
                          onClick={() => setHandler()}
                          disabled={disable}
                        >
                          <i className="fa fa-check ml-2 mr-2"></i>
                        </button>
                        <button
                          className={`ml-3 ${
                            !disable
                              ? "text-gray-400 border-gray-400 border-2"
                              : "text-main border-main border-2 hover:bg-main hover:text-white transition-all"
                          }   rounded-md`}
                          onClick={() => resetHandler()}
                          disabled={!disable}
                        >
                          <i className="fa fa-refresh ml-2 mr-2"></i>
                        </button>
                      </div>
                    </div>
                    <div className="p-2  transition-all border-b-2 border-gray-300">
                      <div className="text-sm mb-2">Availability</div>
                      <div className="flex gap-3">
                        <Checkbox onChange={onChangeAv} checked={checkAv}>
                          Available
                        </Checkbox>
                        <Checkbox onChange={onChangeNAv} checked={checkNAv}>
                          Not available
                        </Checkbox>
                      </div>
                    </div>
                    <div className="p-2  transition-all  border-gray-300">
                      <div className="text-sm mb-2">Rating</div>
                      <div>
                        <Rate onChange={(e) => onChangeRa(e)} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </InputGroup>
        </div>
      </div>
      <div className="flex ">
        <div className="text-gray-500 text-4xl">|</div>
        <div className=" transition-all  " ref={prof}>
          <div
            className="flex gap-6 cursor-pointer w-40"
            onClick={() => setShowP(!showP)}
          >
            <div className="mr-4">
              <div className="p-1">
                <img
                  src={image ? image : "/images/user.jpg"}
                  alt=""
                  className="rounded-full min-w-fit w-8 min-h-fit h-8"
                />
              </div>
            </div>
            <div className=" mt-1 mr-4 relative">
              <span className="block text-sm">
                {userData.first_name + "," + userData.id}
              </span>
              <span className="text-gray-500 block text-sm">Admin</span>
              <div
                className={`w-40 h-40 rounded-md bg-slate-100 absolute -right-10 top-11 shadow-md transition duration-.3s overflow-auto ${
                  showP ? "opacity-100 visible" : "opacity-0 invisible"
                } `}
              >
                <div className="p-2 flex gap-3 justify-center  hover:bg-slate-200 border border-b-4 border-gray-500 hover:text-SSReg transition-all">
                  <div>
                    <i className="fa-regular fa-user"></i>{" "}
                  </div>
                  <div>
                    <Link
                      className="no-underline text-gray-500 hover:text-gray-500"
                      to={"profile"}
                    >
                      My profile
                    </Link>
                  </div>
                </div>
                <div className="p-2 flex gap-3 justify-center  hover:bg-slate-200  border border-b-4 border-gray-500 hover:text-SSReg transition-all">
                  <div>
                    <i className="fa-regular fa-edit"></i>{" "}
                  </div>
                  <Link
                    className="no-underline text-gray-500 hover:text-gray-500"
                    to={"editProfile"}
                  >
                    Edit profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
