import React from "react";
import { Table, Col, Card, CardBody } from "reactstrap";
import "./Transcript.css";
const ContentTranscript = ({ item }) => {
  return (
    <>
      {item.map((item) => (
        <Col lg="6">
          <Card style={{ marginBottom: "6.5rem" }}>
            <CardBody style={{ padding: "0 !important" }}>
              <Table responsive className="mb-0">
                <thead style={{ backgroundColor: "#DCDCDC" }}>
                  <tr>
                    <td colSpan="9" style={{ borderBottomColor: "white" }}>
                      <b style={{ color: "#808080" }}>{item.hkten}</b>
                    </td>
                  </tr>
                </thead>

                <tbody>
                  <div className="Content-Table">
                    <div className="Table--left">
                      <div className="Table--left--content">
                        <div className="GPA_hk">
                          <div
                            style={{
                              verticalAlign: "middle",
                              paddingTop: "25%",
                            }}
                          >
                            <div style={{ fontWeight: "700" }}>
                              Điểm trung bình học kỳ
                            </div>
                            <div style={{ fontSize: "80px" }}>
                              {item.trungbinhhk}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    {/* Table left */}
                    <div className="Table--right">
                      {item.subjects.map((subject) => (
                        <div className="Table--right-content">
                          <div className="subject">
                            <div style={{ width: "50%" }}>{subject.mhten}</div>
                            <div style={{ height: "100%" }}>
                              <div
                                className="subjectDetail"
                                style={{ marginTop: "20px" }}
                              >
                                Số TC: {subject.soTinChi}
                              </div>
                              <div className="subjectDetail">
                                {`Mã MH:\t\t`}
                                {subject.mhma}
                              </div>
                            </div>
                          </div>
                          <div className="subject--content">
                            <th className="subject--content--child">
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
                                  Điểm số
                                </th>
                                <th
                                  style={{
                                    width: "190px",
                                    borderRight: "1px solid white",
                                  }}
                                >
                                  Điểm chữ
                                </th>
                                <th
                                  style={{
                                    width: "190px",
                                    borderRight: "1px solid white",
                                  }}
                                >
                                  Điểm GK
                                </th>
                                <th style={{ width: "190px" }}> Điểm CK</th>
                              </thead>
                              <tbody>
                                <td
                                  style={{
                                    width: "280px",
                                    borderTop: "1px solid white",
                                    borderRight: "1px solid white",
                                  }}
                                >
                                  {subject.tongdiem}
                                </td>
                                <td
                                  style={{
                                    width: "280px",
                                    borderTop: "1px solid white",
                                    borderRight: "1px solid white",
                                  }}
                                >
                                  {subject.diemchu}
                                </td>
                                <td
                                  style={{
                                    width: "280px",
                                    borderTop: "1px solid white",
                                    borderRight: "1px solid white",
                                  }}
                                >
                                  {subject.diemGK}
                                </td>
                                <td
                                  style={{
                                    width: "280px",
                                    borderTop: "1px solid white",
                                  }}
                                >
                                  {subject.diemCK}
                                </td>
                              </tbody>
                            </th>
                          </div>
                          {/* subject content */}
                        </div>
                      ))}
                      {/* Table right Content */}
                    </div>
                  </div>
                  {/* Content-Table */}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};
export default ContentTranscript;
