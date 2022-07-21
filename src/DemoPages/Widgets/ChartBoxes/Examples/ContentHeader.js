import React from "react";
import { Col } from "reactstrap";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Transcript.css";
import { Button, Alert } from "reactstrap";
import { get } from "react-scroll/modules/mixins/scroller";

const ContentHeader = ({ item }) => {
  const Countavg = item.map((item) => item.trungbinhhk);
  const average = Countavg.reduce((a, b) => a + b, 0) / Countavg.length;
  const roundedAverage = average.toFixed(2);

  let TotalCredits = item.map((item) =>
    item.subjects.map((subject) => subject.soTinChi)
  );
  var arr = [];
  for (let i = 0; i < TotalCredits.length; i++) {
    var getTotalCredits = TotalCredits[i].reduce((a, b) => a + b, 0);
    arr[i] = [getTotalCredits];
  }

  console.log("arr =", arr);

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
              Tín chỉ tích lũy : <span style={{ fontSize: "25px" }}>10</span>
            </div>
            <div className="widget-description text-success"></div>
            <FontAwesomeIcon icon={faAngleUp} />
          </div>
          <div className="widget-chart-wrapper chart-wrapper-relative"></div>
        </div>
      </Col>

      <div className="Sort">
        <div className="Sort-1">
          <label style={{ fontSize: "14px" }}>Năm học - Học kỳ</label>

          <select className="slect" defaultValue={0}>
            <option value={0}>Tất cả</option>
            {item.map((item) => (
              <>
                <option value={item.hkten}>{item.hkten.toLowerCase()}</option>
              </>
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

      <hr style={{ border: 0, borderTop: "1px solid #eee", width: "90%" }} />
      {/* warning */}
      <Alert color="warning" style={{ width: "98%", marginLeft: "1%" }}>
        <strong
          style={{
            width: "130px",
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "20px",
            marginTop: "5px",
          }}
        >
          <u>Chú ý:</u>
        </strong>

        <div
          style={{
            width: "300px",
            display: "flex",
            marginLeft: "20px",
            marginTop: "5px",
          }}
        >
          <i
            className="pe-7s-check"
            style={{
              fontSize: "25px",
              color: "green",
              marginLeft: "12px",
              marginTop: "15px",
            }}
          ></i>
          <p style={{ marginTop: "16px", marginLeft: "10px" }}> Học phần đậu</p>
          <i
            className="pe-7s-close-circle"
            style={{
              fontSize: "25px",
              color: "red",
              marginLeft: "12px",
              marginTop: "15px",
            }}
          ></i>
          <p style={{ marginTop: "16px", marginLeft: "10px" }}> Học phần rớt</p>
        </div>
      </Alert>
    </>
  );
};

export default ContentHeader;
