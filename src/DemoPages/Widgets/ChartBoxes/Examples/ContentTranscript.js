import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Col,
  Card,
  CardBody,
} from "reactstrap";
import "./Transcript.css";
import ContentTable from "./ContentTable";
function ContentTranscript() {
  return (
    <>
      <Col lg="6">
        <Card className="main-card mb-3">
          <CardBody style={{ padding: "0 !important" }}>
            <Table responsive className="mb-0">
              <thead style={{ backgroundColor: "#DCDCDC" }}>
                <tr>
                  <td colspan="9" style={{ borderBottomColor: "white" }}>
                    <b style={{ color: "#808080" }}>
                      Năm học: 2020 - Học kỳ: HKC
                    </b>
                  </td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <div
                    style={{
                      width:"360px",
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
                        // borderWidth: "1px",
                        padding:"0 !important"
                      }}
                    >
                      <div className="GPA_hk">
                        <div
                          style={{ verticalAlign: "middle", paddingTop: "25%" }}
                        >
                          <div>Điểm trung bình học kì</div>
                          <div style={{ fontSize: "80px" }}> 8.0 </div>
                        </div>
                      </div>
                    </th>
                  </div>
                  <th
                    scope="row"
                    style={{ width: "75%", padding: "0 !important" }}
                  >
                    <ContentTable />
                    <ContentTable />
                    <ContentTable />
                    <ContentTable />
                  </th>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}
export default ContentTranscript;
