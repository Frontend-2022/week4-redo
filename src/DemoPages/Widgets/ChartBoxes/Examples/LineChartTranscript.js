// import Transcript from "./Transcript";
import { Line } from "react-chartjs-2";
import React from "react";
import { Col, Progress } from "reactstrap";

const LineChartTranscript = ({ item }) => {
  let xLable = item.map((item) => item.hkten);
  let yScore = item.map((item) => item.trungbinhhk);
  const Countavg = item.map((item) => item.trungbinhhk);
  const average = Countavg.reduce((a, b) => a + b, 0) / Countavg.length;
  const roundedAverage = average.toFixed(2);
  const roundedAveragePercent = ((roundedAverage / 10) * 100).toFixed(2);
  console.log("xlable", xLable.reverse());
  console.log("yScore", yScore.reverse());
  console.log(roundedAverage);
  console.log(roundedAveragePercent);
  const state = {
    labels: xLable,
    datasets: [
      {
        label: "Điểm trung bình học kỳ",
        fill: true,
        lineTension: 0.2,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "#008B8B",
        borderCapStyle: "round",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#ed0f51",
        pointBackgroundColor: "#ed0f51",
        pointBorderWidth: 3,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "#ed0f51",
        pointHoverBorderColor: "#ed0f51",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: yScore,
      },
    ],
  };

  return (
    <>
      <Col md="12">
        <div className="widget-content">
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
      <Line data={state} width={600} height={150} />
    </>
  );
};

export default LineChartTranscript;
