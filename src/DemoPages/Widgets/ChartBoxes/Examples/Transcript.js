import React, { Component, Fragment } from "react";
import ContentTranscript from "./ContentTranscript";
import "./Transcript.css";
import ModalTranscript from "../../../Components/Modal/Examples/ModalTranscript";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  Row,
  Col,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  Nav,
  NavItem,
  NavLink,
  Table,
  CardBody,
  CardTitle,
  Card,
  Alert,
} from "reactstrap";

import {
  AreaChart,
  Area,
  LineChart,
  Line,
  ResponsiveContainer,
  BarChart,
  Bar,
  ComposedChart,
  CartesianGrid,
} from "recharts";

import {
  faAngleUp,
  faAngleDown,
  faArrowLeft,
  faArrowRight,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

import bg1 from "../../../../assets/utils/images/dropdown-header/abstract1.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
  { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
  { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
  { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const data2 = [
  { name: "Page A", uv: 5400, pv: 5240, amt: 1240 },
  { name: "Page B", uv: 7300, pv: 4139, amt: 3221 },
  { name: "Page C", uv: 8200, pv: 7980, amt: 5229 },
  { name: "Page D", uv: 6278, pv: 4390, amt: 3200 },
  { name: "Page E", uv: 3189, pv: 7480, amt: 6218 },
  { name: "Page D", uv: 9478, pv: 6790, amt: 2200 },
  { name: "Page E", uv: 1289, pv: 1980, amt: 7218 },
  { name: "Page F", uv: 3139, pv: 2380, amt: 5150 },
  { name: "Page G", uv: 5349, pv: 3430, amt: 3210 },
];
class Transcript extends Component {
  render() {
    return (
      <>
        <div
          className="contentMiddle"
          style={{
            // borderRadius: "5px",
            // boxShadow: "0px 0px 5px 0px rgb(0 0 0 / 25%)",
          }}
        >
          <div className="bgTittle">
            <span
              style={{
                color: "#A90001",
                font: "0.8em  Tahoma, Arial, Sans-Serif",
                fontSize: "15px",
                fontWeight: "bold",
                textTransform: "uppercase",
                paddingLeft: "40px",
              }}
            >
              Thông tin sinh viên
            </span>
          </div>

          <div
            className="Table_header"
            style={{ margin: "0 auto", display: "flex", width: "100%" }}
          >
            <table
              style={{ marginLeft: "50px", width: "90%" }}
              cellspacing="0"
              cellpadding="5"
            >
              <tbody style={{ margin: 0, padding: 0 }}>
                <tr>
                  <th colSpan={2}>Họ và tên: </th>
                  <td colSpan={3} className="td-css">
                    Tạ Đức Minh{" "}
                  </td>
                  <th colSpan={2}>Ngành: </th>
                  <td colSpan={3}>Thương mại điện tử </td>
                </tr>

                <tr>
                  <th colSpan={2}>MSSV: </th>
                  <td colSpan={3} className="td-css">
                    {" "}
                  </td>
                  <th colSpan={2}>Chuyên ngành: </th>
                  <td colSpan={3} className="td-css">
                    {" "}
                  </td>
                </tr>

                <tr>
                  <th colSpan={2}>Ngày sinh: </th>
                  <td colSpan={3} className="td-css">
                    {" "}
                  </td>
                  <th colSpan={2}>Hệ ĐT: </th>
                  <td colSpan={3} className="td-css">
                    {" "}
                  </td>
                </tr>

                <tr>
                  <th colSpan={2}>Nơi sinh: </th>
                  <td colSpan={3} className="td-css">
                    {" "}
                  </td>
                  <th colSpan={2}>Lớp: </th>
                  <td colSpan={3} className="td-css">
                    {" "}
                  </td>
                </tr>

                <tr>
                  <th colSpan={2}>Khóa học: </th>
                  <td colSpan={3} className="td-css">
                    {" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <hr
            style={{ border: 0, borderTop: "1px solid #eee", width: "90%" }}
          ></hr> */}
          <div className="Sort">
            <div className="Sort-1">
              <label style={{ fontSize: "14px" }}>Năm học</label>
              <select className="slect">
                <option value={2026}>2026</option>
                <option value={2025}>2025</option>
                <option value={2024}>2024</option>
                <option value={2023}>2023</option>
                <option value={2022}>2022</option>
                <option value={2021}>2021</option>
                <option value={2020}>2020</option>
                <option value={2019}>2019</option>
                <option selected={"select"} value={0}>
                  Tất cả
                </option>
              </select>
            </div>
            <div className="Sort-1">
              <label style={{ fontSize: "14px" }}>Học kỳ</label>
              <select className="slect">
                <option value={"HKĐ"}>Học kì đầu</option>
                <option value={"HKG"}>Học kì giữa</option>
                <option value={"HKC"}>Học kì cuối</option>
                <option selected={"select"} value={0}>
                  Tất cả
                </option>
              </select>
            </div>
            <div className="Sort-1">
              <label style={{ fontSize: "14px" }}>Hệ điểm</label>
              <select className="slect">
                <option value={"10"}>10</option>
                <option value={"4"}>4</option>
              </select>
            </div>
            <Button
              outline
              className="mb-2 me-2 btn-transition btn-primary "
              color="primary"
              style={{
                display: "flex",
                width: "15%",
                height: "34px",
                marginTop: "9px",
                justifyContent:"center",
              }}
            >
              <i
                class="pe-7s-print"
                style={{ fontSize: "17px", marginRight: "8px" }}
              >
                {" "}
              </i>{" "}
              <p>Xem bản in</p>
            </Button>
          </div>
          {/* <hr
            style={{ border: 0, borderTop: "1px solid #eee", width: "90%" }}
          ></hr> */}
          <Alert color="warning">
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
              <p style={{ marginTop: "16px", marginLeft: "10px" }}>
                {" "}
                Học phần đậu
              </p>
              <i
                className="pe-7s-close-circle"
                style={{
                  fontSize: "25px",
                  color: "red",
                  marginLeft: "12px",
                  marginTop: "15px",
                }}
              ></i>
              <p style={{ marginTop: "16px", marginLeft: "10px" }}>
                {" "}
                Học phần rớt
              </p>
            </div>
          </Alert>
          <ContentTranscript />
          <ContentTranscript />



          <Col lg="6">
            <div className="card mb-3 widget-chart">
              <div className="widget-chart-content">
                <div className="icon-wrapper rounded-circle">
                  <div className="icon-wrapper-bg bg-primary" />
                  <i className="lnr-graduation-hat icon-gradient bg-happy-itmeo" />
                </div>
                <div className="widget-numbers">10.0</div>
                <div className="widget-subheading">
                  Điểm trung bình tích lũy
                </div>
                <div className="widget-description text-success">
                  <FontAwesomeIcon icon={faAngleUp} />
                  <span className="ps-1">100%</span>
                </div>
              </div>
              <div className="widget-chart-wrapper chart-wrapper-relative">
                <ResponsiveContainer height={100}>
                  <LineChart
                    data={data}
                    margin={{ top: 5, right: 5, left: 5, bottom: 0 }}
                  >
                    <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#3ac47d"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Col>
          <Card className="mb-3" body inverse color="danger">
            <CardTitle className="text-white">Ghi Chú</CardTitle>
            <div>
              {" "}
              - Điểm trung bình tích lũy = Tổng điểm các môn
              <b>TRONG CTDT ĐÃ HỌC & ĐẠT</b>/ Tổng số tín chỉ{" "}
              <b>TRONG CTDT ĐÃ HỌC & ĐẠT</b>
              <br></br> - Điểm trung bình tổng kết = Tổng điểm các môn{" "}
              <b>ĐÃ HỌC & ĐẠT</b>/ Tổng số tín chỉ <b>ĐÃ HỌC & ĐẠT</b>
              <br></br> - Sinh viên kiểm tra thông tin đăng ký lớp học ôn - thi
              tin chuẩn đầu ra, điểm số, kết quả và cấp phát bằng theo{" "}
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: " #0c1272",
                  fontWeight: "bold",
                }}
              >
                link sau. (TIN HỌC)
              </a>
              <br></br> - Sinh viên kiểm tra thông tin đăng ký lớp học ôn - thi
              ngoại ngữ đầu ra, điểm số, kết quả và cấp phát bằng theo{" "}
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: " #0c1272",
                  fontWeight: "bold",
                }}
              >
                link sau. (NGOẠI NGỮ)
              </a>
            </div>
          </Card>
        </div>
      </>
    );
  }
}
export default Transcript;
