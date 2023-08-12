import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Col, Container, Row } from "react-bootstrap";
import { fetchChart } from "../states/ChartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Dropdown, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

function StatChart() {
  const items = ["orders", "revenue", "customers"].map((statistic) => {
    return {
      key: statistic,
      label: (
        <li
          key={statistic}
          onClick={() => {
            handleChart({
              statisticChange: statistic,
              periodChange: period,
            });
          }}
        >
          {statistic.toUpperCase()}
        </li>
      ),
    };
  });

  const [period, setPeriod] = useState("day");
  const [statType, setStatType] = useState("revenue-chart");
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.ChartReducer);
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );
  const handleChart = ({ statisticChange, periodChange }) => {
    if (periodChange.toLocaleLowerCase() !== period) {
      setPeriod(periodChange.toLocaleLowerCase());
    }
    if (statisticChange.toLocaleLowerCase() !== statType) {
      setStatType(`${statisticChange.toLocaleLowerCase()}-chart`);
    }
  };
  useEffect(() => {
    dispatch(fetchChart({ stat: statType, period: period }));
  }, [period, statType, dispatch]);

  const chartData = {
    //peroid
    labels: data.map((data1) => {
      if (data1[Object.keys(data1)[0]] === 18) {
        console.log(data1[Object.keys(data1)]);
      }
      return data1[Object.keys(data1)[0]];
    }),
    datasets: [
      {
        label: statType,
        data: data.map((data2) => {
          return data2[Object.keys(data2)[1]];
        }),
        lineTension: 0.5,
      },
    ],
  };
  useEffect(() => {
    console.log(
      data.map((data1) => {
        if (data1[Object.keys(data1)[0]] === 18) {
          console.log(data1[Object.keys(data1)[2]]);
        }
        return data1[Object.keys(data1)[0]];
      })
    );
  }, [data]);

  return (
    <Container className="text-bold text-secondary  overflow-auto bg-Stext-blue-600 shadow-md shadow-text-blue-600 rounded px-3 pt-1 ">
      <Row>
        <Col //button to  select the period
          md={10}
          sm={10}
          className="h-10 bg-slate-300 rounded d-flex justify-content-around "
        >
          {["Day", "Week", "Month", "Year"].map((Period) => {
            return (
              <button
                onClick={() => {
                  handleChart({
                    statisticChange: statType,
                    periodChange: Period,
                  });
                }}
                key={Period}
                className={`${
                  Period.toLowerCase() === period
                    ? "bg-text-blue-600  text-white"
                    : "hover:border-text-blue-600 hover:text-text-blue-600"
                } border-slate-300  border-2   w-25 rounded
                 duration-.25s  mx-sm-1`}
              >
                {Period}
              </button>
            );
          })}
        </Col>
        <Col sm={2}>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            arrow
          >
            <Button size="large" className=" hover:text-white ">
              {statType.slice(0, -6).toUpperCase()}
            </Button>
          </Dropdown>
        </Col>
      </Row>
      <div className="">
        <Spin
          tip={`Loading ${statType}..`}
          indicator={antIcon}
          spinning={loading}
        >
          <Line data={chartData} />
        </Spin>
      </div>
    </Container>
  );
}

export default StatChart;

// if  stat is customers map two datasets
// if not map normally
