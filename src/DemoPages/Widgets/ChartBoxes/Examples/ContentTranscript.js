import React, { useEffect, useState } from "react";
import { Table, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import "./Transcript.css";
const ContentTranscript = ({ items }) => {
  useEffect(() => setTerms(items), [items]);

  console.log(items.map((item) => item.hkid));
  const [terms, setTerms] = useState([]);
  const changeSelect = (e) => {
    console.log(e.target.value);
    if (!+e.target.value) {
      setTerms(items);
      return;
    }
    setTerms(items.filter((item) => +item.hkid === +e.target.value));
  };

  useEffect(() => setScore(items.subjects));
  const [score, setScore] = useState([]);
  const changeScoreType = (i) => {
    console.log(+i.target.value);
    setScore(items.filter((item) => +item.subjects.diem4 == +i.target.value));
  };

  return (
    <>
      <div className="Sort">
        <div className="Sort-1">
          <label style={{ fontSize: "14px" }}>Năm học - Học kỳ</label>

          <select className="slect" onChange={changeSelect}>
            <option value={0}>Tất cả</option>
            {items.map((item) => (
              <option value={+item.hkid}>{item.hkten.toLowerCase()}</option>
            ))}
          </select>
        </div>
        {/* <div className="Sort-1">
          <label style={{ fontSize: "14px" }}>Hệ điểm</label>
          <select className="slect" onChange={changeScoreType}>
            {items.map((item) => (
              <option value={item.hkid}>{item.hkid}</option>
            ))}
          </select>
        </div> */}
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

      <div>
        {terms.map((item) => (
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

                          <div className="Note">
                            <Card
                              className="mb-3"
                              body
                              inverse
                              color=""
                              style={{
                                height: "100%",
                                borderRadius: "0 115px 115px 0",
                              }}
                            >
                              <CardTitle className="text-focus">
                                Ghi chú
                              </CardTitle>

                              <div className="text-focus">
                                Số tín chỉ học kỳ đăng kí:{`\t \t`}
                                {item.totalCredits}
                              </div>

                              <div
                                className="text-focus"
                                style={{ paddingTop: "3px" }}
                              >
                                Số tín chỉ học kỳ tích lũy:{"\t \t"}
                                {item.totalAccumulationCompleted}
                              </div>
                              <div>
                                <div style={{ display: "flex" }}>
                                  <i
                                    className="pe-7s-check"
                                    style={{
                                      fontSize: "25px",
                                      color: "green",
                                      marginTop: "8px",
                                    }}
                                  ></i>
                                  <span
                                    className="text-focus"
                                    style={{
                                      paddingTop: "10px",
                                      paddingLeft: "10px",
                                    }}
                                  >
                                    Học phần đậu
                                  </span>
                                </div>
                                <div style={{ display: "flex" }}>
                                  <i
                                    className="pe-7s-close-circle"
                                    style={{
                                      fontSize: "25px",
                                      color: "red",
                                      marginTop: "8px",
                                    }}
                                  ></i>
                                  <span
                                    className="text-focus"
                                    style={{
                                      paddingTop: "10px",
                                      paddingLeft: "10px",
                                    }}
                                  >
                                    Học phần rớt
                                  </span>
                                </div>
                              </div>
                            </Card>
                          </div>
                        </div>
                      </div>
                      {/* Table left */}
                      <div className="Table--right">
                        {item.subjects.map((subject) => (
                          <div className="Table--right-content">
                            <div className="subject1">
                              <div style={{ width: "50%" }}>
                                {subject.mhten}
                              </div>
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
                                    Điểm hệ 10
                                  </th>
                                  <th
                                    style={{
                                      width: "190px",
                                      borderRight: "1px solid white",
                                    }}
                                  >
                                    Điểm hệ 4
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
                                  <th
                                    style={{
                                      width: "190px",
                                      borderRight: "1px solid white",
                                    }}
                                  >
                                    Điểm CK
                                  </th>
                                  <th style={{ width: "190px" }}> Kết quả</th>
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
                                    {subject.diem4}
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
                                      borderRight: "1px solid white",
                                    }}
                                  >
                                    {subject.diemCK}
                                  </td>
                                  <td
                                    style={{
                                      width: "280px",
                                      borderTop: "1px solid white",
                                    }}
                                  >
                                    <i
                                      className={item.result}
                                      style={{
                                        fontSize: "22px",
                                        color: "#a07f7f",
                                        fontWeight: "bold",
                                      }}
                                    ></i>
                                    {/* {item.totalAccumulationCompleted} */}
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
      </div>
    </>
  );
};

export default ContentTranscript;
