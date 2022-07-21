import React from "react";
import Highcharts from "highcharts";
import LineChart from "highcharts-react-official";

import { Col, Progress } from "reactstrap";
const HighChartTs = ({ item }) => {
  let xLable = item.map((item) => item.hkten).reverse();
  let yScore = item.map((item) => item.trungbinhhk).reverse();
  const Countavg = item.map((item) => item.trungbinhhk);
  const average = Countavg.reduce((a, b) => a + b, 0) / Countavg.length;
  const roundedAverage = average.toFixed(2);
  const roundedAveragePercent = ((roundedAverage / 10) * 100).toFixed(2);
  const dataChart = {
    maintainAspectRatio: true,
    title: {
      text: "",
    },
    chart: {
      type: "area",
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "top",
      x: 10,
      y: 50,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
      shadow: true,
    },
    xAxis: {
      categories: xLable,
      labels: {
        enabled: true,
      },
      title: {
        text: null,
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
      },
      labels: {
        overflow: "justify",
      },
    },
    plotOptions: {
      area: {
        dataLabels: {
          enabled: true,
        },
      },
      series: {
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "round",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
    },
    series: [
      {
        name: "Điểm trung bình học kỳ ",
        data: yScore,
        fillColor: "rgba(75,192,192,0.4)",
      },
      // {
      //   name: "My second dataset",
      //   data: [40, 50, 60, 70, 80, 30, 10],
      // },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <div>
      <Col md="12">
        <div className="widget-content widget-content-cus ">
          <div className="widget-content-outer">
            <div className="widget-content-wrapper">
              <div className="widget-content-left me-3">
                <div className="widget-numbers fsize-3 text-muted">
                  {roundedAverage}
                </div>
              </div>
              <div className="widget-content-center">
                <div className="text-muted opacity-6">
                  Điểm trung bình tích lũy
                </div>
              </div>
            </div>
            <div className="widget-progress-wrapper mt-1">
              <Progress
                className="progress-bar-sm progress-bar-animated-alt"
                color="success"
                value={roundedAveragePercent}
              />
            </div>
          </div>
        </div>
      </Col>
      <LineChart highcharts={Highcharts} options={dataChart} />
    </div>
  );
};

export default HighChartTs;
