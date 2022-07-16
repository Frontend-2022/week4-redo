import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Col, Card, CardBody } from "reactstrap";
import "./Transcript.css";
import ContentTable from "./ContentTable";
import axios from "axios";
const ContentTranscript = ({ data }) => {

  if (!data||data.length==0) {
    return <></>
  }
  return (
    <>
      <Col lg="6">
        <Card className="main-card mb-3">
          <CardBody style={{ padding: "0 !important" }}>
            <Table responsive className="mb-0">
              <thead style={{ backgroundColor: "#DCDCDC" }}>
                <tr>
                  <td colSpan="9" style={{ borderBottomColor: "white" }}>
                    <b style={{ color: "#808080" }}>{data[0].hkten}</b>
                  </td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <div
                    style={{
                      width: "360px",
                      height: "461px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderWidth: "1px solid white",
                    }}
                  >
                    <th
                      scope="row"
                      style={{
                        width: "99%",
                        height: "320px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0 !important",
                      }}
                    >
                      <div className="GPA_hk">
                        <div
                          style={{ verticalAlign: "middle", paddingTop: "25%" }}
                        >
                          <div>Điểm trung bình học kì</div>
                          <div style={{ fontSize: "80px" }}>
                            {" "}
                            {data[0].trungbinhhk}
                          </div>
                        </div>
                      </div>
                    </th>
                  </div>
                  <th
                    scope="row"
                    style={{ width: "75%", padding: "0 !important" }}
                  >
                    {data.map((item) => (
                      <ContentTable item={item} />
                    ))}
                  </th>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
export default ContentTranscript;
