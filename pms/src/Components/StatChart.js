import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Col, Container, Row } from "react-bootstrap";
 import {fetchChart} from '../store/ChartSlice'
import { useDispatch, useSelector } from "react-redux";

function StatChart() {
  const [period, setPeriod] = useState ('day');
  const [statType, setStatType] = useState ('revenue');
  const [stat, setstat] = useState(false);
  const dispatch = useDispatch()
  // const {data} =useSelector(state=>state.chart)
  // console.log(data)
  // a function to change the chart's data
useEffect(()=>{
      dispatch(fetchChart({stat:'revenue-chart',period:'year'}))
},[period,statType])

// fetch chart is a function to fetch the data 

    // if  stat is customers map two datasets 
    // if not map normally


  // const userData = {
  //                                   //peroid                                            
  //   labels: data.map((data1) => data1.year), // X axis
  //   datasets: [
  //     // lines
  //     {
  //       label: "user gained",
  //       data: data.map((data2) => data2.userGain), // y axis
  //       lineTension: 0.5,
  //     },
  //     {
  //       label: "user lost",
  //       data: data.map((data2) => data2.userLost),
  //       lineTension: 0.3,
  //     },
  //   ],
  // };
  return (
    <Container className="text-bold text-secondary bg-SSReg shadow-md shadow-SReg rounded px-3 pb-10 h-100">
      <Row>
        <Col //button to  select the period
          md={10}
          sm={10}
          className="h-10 bg-slate-300 rounded d-flex justify-content-around"
        >
          {["Day", "Weak", "Month", "Year"].map((period) => {
            return (
              <button 

              key={period} className="hover:bg-SReg  w-25 rounded duration-.3s hover:text-white mx-sm-1">
                {period}
              </button>
            );
          })}
        </Col>
        <Col sm={2}>
          <button // button to choose the statistic type
            className="hover:bg-SReg w-100 h-100 border-SReg border-2 rounded duration-.3s hover:text-white mx-sm-1"
            onClick={() => {
              setstat(!stat);
            }}
          >
            statistic
          </button>
          <div
            className={`w-40 h-30 absolute rounded-md 
      shadow transition duration-.2s overflow-auto ${
        stat ? "opacity-100 visible z-10" : "opacity-0 invisible"
      } `}
          >
            <ol className="list-group m-0 p-0">
            {
              ['orders','revenue'].map(statistic=>{
                return (
                  <li 
                  key={statistic}
                  onClick={()=>{handleChart()}}
                  className="list-group-item hover:border-2 cursor-pointer hover:border-SReg" >
                  {statistic}
                </li>
                )
              })
            }
            </ol>
          </div>
        </Col>
      </Row>
      {
        // <Line data={userData} />
      }
    </Container>
  );
}

export default StatChart;
