import React, { useState } from "react";
import { Col } from "reactstrap";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Transcript.css";
import { Button } from "reactstrap";
const ContentHeader = ({ items }) => {
  const Countavg = items.map((item) => item.trungbinhhk);
  const average = Countavg.reduce((a, b) => a + b, 0) / Countavg.length;
  const roundedAverage = average.toFixed(2);

  let TotalCredits = items.map((item) =>
    item.subjects.map((subject) => subject.soTinChi)
  );
  let arr = [];
  for (let i = 0; i < TotalCredits.length; i++) {
    let getTotalCredits = TotalCredits[i].reduce((a, b) => a + b, 0);
    arr[i] = [getTotalCredits];
  }
  let j = 0;
  for (let i of arr) {
    let k = Number(i);
    j = j + k;
  }

  return (
    <>
      <Col lg="6">
        <div className="card2 mb-3 widget-chart">
          <div className="widget-chart-content">
            <div className="icon-wrapper rounded-circle">
              <div className="icon-wrapper-bg bg-dark" />
              <i className="lnr-graduation-hat icon-gradient bg-happy-itmeo " />
            </div>
            <div className="textavg ">Điểm trung bình tích lũy</div>
            <div className="average">{roundedAverage}</div>
            <div
              className="textavg "
              style={{ fontSize: "15px", opacity: 0.8 }}
            >
              {"Tín chỉ tích lũy : \t"}
              <span style={{ fontSize: "25px" }}>{j}</span> {"tín chỉ"}
            </div>
            <div className="widget-description text-success"></div>
            <FontAwesomeIcon icon={faAngleUp} />
          </div>
          <div className="widget-chart-wrapper chart-wrapper-relative"></div>
        </div>
      </Col>
      {/* <div className="Sort">
        <div className="Sort-1">
          <label style={{ fontSize: "14px" }}>Năm học - Học kỳ</label>

          <select className="slect">
            <option value="Tat ca">Tất cả</option>
            {item.map((item) => (
              <option value="hi">{item.hkten.toLowerCase()}</option>
            ))}
          </select>
        </div>
        <div className="Sort-1">
          <label style={{ fontSize: "14px" }}>Hệ điểm</label>
          <select className="slect" defaultValue={10}>
            <option value={10}>10</option>
            <option value={4}>4</option>
          </select>
        </div>
        <Button
          outline
          className="mb-2 me-2 btn-transition btn-primary "
          color="primary"
          style={{
            display: "flex",
            width: "150px",
            height: "34px",
            marginTop: "9px",
            justifyContent: "center",
          }}
        >
          <i
            className="pe-7s-print"
            style={{ fontSize: "17px", marginRight: "8px" }}
          >
            {" "}
          </i>{" "}
          <p>Xem bản in</p>
        </Button>
      </div>

      <hr style={{ border: 0, borderTop: "1px solid #eee", width: "90%" }} /> */}
    </>
  );
};

export default ContentHeader;
