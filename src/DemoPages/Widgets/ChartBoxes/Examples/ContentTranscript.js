import React from "react";
import { Link } from "react-router-dom";
import {
  TabContent,
  Table,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  ButtonGroup,
  Modal,
  Alert
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Transcript.css";
// import img from '../Dau.png'
import ModalTranscript from "../../../Components/Modal/Examples/ModalTranscript";
function ContentTranscript() {
  return (
    <>
      <Col lg="6">
        <Card className="main-card mb-3">
          <CardBody style={{padding:"0 !important"}}>
            <Table hover className="mb-0" >
              <thead style={{ backgroundColor: "#a8a3a3" }}>
                <tr>
                  <th style={{ width: "100px", paddingLeft: "20px" }}>STT</th>
                  <th style={{ width: "230px" }}>Mã môn học</th>
                  <th style={{ width: "250px" }}>Tên môn học</th>
                  <th style={{ width: "100px" }}>Số TC</th>
                  <th style={{ width: "100px" }}>Điểm</th>
                  <th style={{ width: "100px" }}>Điểm chữ</th>
                  <th style={{ width: "100px" }}>Kết quả</th>
                  <th style={{ width: "300px" }}>Ghi chú</th>
                  <th>Chi tiết</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="9" style={{ backgroundColor: "#c7d6f3" }}>
                    <b style={{ color: "blue" }}>Năm học: 2020 - Học kỳ: HKC</b>
                  </td>
                </tr>
                <tr colSpan={9}>
                  <th
                    scope="row"
                    style={{ width: "52px", paddingLeft: "20px" }}
                  >
                    1
                  </th>
                  <td>2DH0211</td>
                  <td>Nguyên lý thị giác</td>
                  <td style={{ paddingLeft: "20px" }}>2</td>
                  <td style={{ paddingLeft: "17px" }}>10</td>
                  <td style={{ paddingLeft: "30px" }}> A+</td>
                  <td style={{ paddingLeft: "20px" }}>
                    <i
                      className="pe-7s-check"
                      style={{ fontSize: "25px", color: "green" }}
                    ></i>
                  </td>
                  <td></td>
                  <td style={{ paddingLeft: "15px" }}>
                    <ModalTranscript />
                  </td>
                </tr>

                <tr>
                  <th
                    scope="row"
                    style={{ width: "52px", paddingLeft: "20px" }}
                  >
                    2
                  </th>
                  <td>2DH0211</td>
                  <td>Thiết kế giao diện web</td>
                  <td style={{ paddingLeft: "20px" }}>2</td>
                  <td style={{ paddingLeft: "17px" }}>10</td>
                  <td style={{ paddingLeft: "30px" }}> A+</td>
                  <td style={{ paddingLeft: "20px" }}>
                    <i
                      className="pe-7s-check"
                      style={{ fontSize: "25px", color: "green" }}
                    ></i>
                  </td>
                  <td></td>
                  <td style={{ paddingLeft: "15px" }}>
                    <ModalTranscript />
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    style={{ width: "52px", paddingLeft: "20px" }}
                  >
                    3
                  </th>
                  <td>2DH0211</td>
                  <td>Đồ án thiết kế nhãn hiệu bao bì</td>
                  <td style={{ paddingLeft: "20px" }}>3</td>
                  <td style={{ paddingLeft: "17px" }}>10</td>
                  <td style={{ paddingLeft: "30px" }}> A+</td>
                  <td style={{ paddingLeft: "20px" }}>
                    <i
                      className="pe-7s-check"
                      style={{ fontSize: "25px", color: "green" }}
                    ></i>
                  </td>
                  <td></td>
                  <td style={{ paddingLeft: "15px" }}>
                    <ModalTranscript />
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    style={{ width: "52px", paddingLeft: "20px" }}
                  >
                    4
                  </th>
                  <td>2DH0211</td>
                  <td>Kỹ xảo After Effect</td>
                  <td style={{ paddingLeft: "20px" }}>3</td>
                  <td style={{ paddingLeft: "17px" }}>10</td>
                  <td style={{ paddingLeft: "30px" }}> A+</td>
                  <td style={{ paddingLeft: "20px" }}>
                    <i
                      className="pe-7s-check"
                      style={{ fontSize: "25px", color: "green" }}
                    ></i>
                  </td>
                  <td></td>
                  <td style={{ paddingLeft: "15px" }}>
                    <ModalTranscript />
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    style={{ width: "52px", paddingLeft: "20px" }}
                  >
                    5
                  </th>
                  <td>2DH0211</td>
                  <td>Nguyên lý thị giác</td>
                  <td style={{ paddingLeft: "20px" }}>3</td>
                  <td style={{ paddingLeft: "17px" }}>10</td>
                  <td style={{ paddingLeft: "30px" }}> A+</td>
                  <td style={{ paddingLeft: "20px" }}>
                    <i
                      className="pe-7s-check"
                      style={{ fontSize: "25px", color: "green" }}
                    ></i>
                  </td>
                  <td></td>
                  <td style={{ paddingLeft: "15px" }}>
                    <ModalTranscript />
                  </td>
                </tr>
              </tbody>
            </Table>
            <Alert color="success">
              <tr>
                <td colSpan={10} style={{ paddingLeft: "20px" }}>
                  {" "}
                  Điểm trung bình học kỳ: 8.0{" "}
                </td>
              </tr>
            </Alert>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}
export default ContentTranscript;
