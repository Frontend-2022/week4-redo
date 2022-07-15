import React, { Fragment } from "react";
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
  Alert,
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Transcript.css";
import ModalTranscript from "../../../Components/Modal/Examples/ModalTranscript";


function ContentTable ()
{
    return(<>
      <Table hover
                      scope="row"
                      style={{
                        width: "75%",
                        height: "10%",
                        backgroundColor: "#D5E8D4",
                        border:"1px solid white",
                        borderCollapse:"collapse",
                        marginBottom:"15px !important",
                      }}
                    >
                      <tr
                        style={{
                          height: "50px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <th
                          style={{
                            width: "516px",
                            textAlign: "center",
                            // fontSize: "30px",
                            border: "1px solid white",
                            height: "50px",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center"
                          }}
                        >
                          Nguyên lý thị giác
                        </th>
                        <th
                          style={{
                            width: "200px",

                            height: "50px",
                            border: "1px solid white",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center"
                          }}
                        >
                          Điểm: <span style={{fontSize:"20px",paddingLeft:"33px"}}>8.0</span>
                        </th>
                        <th
                          style={{
                            width: "100px",
                            height: "50px",
                            border: "1px solid white",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center"
                          }}
                        >
                          Kết quả
                        </th>
                        <th
                          style={{
                            width: "300px",

                            height: "50px",
                            border: "1px solid white",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center"
                          }}
                        >
                          Chi tiết
                        </th>
                      </tr>

                      <tr
                        style={{
                          height: "50px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <th
                          style={{
                            width: "516px",
                            textAlign: "center",
                            height: "50px",
                            borderRight:"1px solid white",
                            borderTop:"1px solid white",
                          }}
                        >
                          <thead
                            style={{
                              width: "190px",
                              borderBottom: "1px solid white",

                            }}
                          >
                            <th
                              style={{
                                width: "190px",
                                borderRight: "1px solid white",

                              }}
                            >
                              Số TC
                            </th>
                            <th style={{ width: "280px" }}>Mã môn học</th>
                          </thead>
                          <tbody>
                            <td
                              style={{
                                width: "280px",
                                borderTop: "1px solid white",
                                borderRight: "1px solid white",
                              }}
                            >
                              2
                            </td>
                            <td
                              style={{
                                width: "280px",
                                borderTop: "1px solid white",
                              }}
                            >
                              2DH0211
                            </td>
                          </tbody>
                        </th>
                        <th
                          style={{
                            width: "200px",
                            textAlign: "center",
                            height: "50px",
                            border: "1px solid white",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center"
                          }}
                        >
                          Điểm chữ: <span style={{fontSize:"20px",paddingLeft:"20px",}}>A</span>
                        </th>
                        <td
                          style={{
                            width: "100px",
                            height: "50px",
                            border: "1px solid white",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center"
                          }}
                        >
                          <i
                            className="pe-7s-check"
                            style={{ fontSize: "25px", color: "green" }}
                          ></i>
                        </td>
                        <th
                          style={{
                            width: "300px",
                            textAlign: "center",
                            paddingTop: "10px",
                            height: "50px",
                            border: "1px solid white",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center"
                          }}
                        >
                          <ModalTranscript />
                        </th>
                      </tr>
                    </Table>
    </>)
}
export default ContentTable;