import React, {  useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import "./Transcript.css";
import ModalTranscript from "../../../Components/Modal/Examples/ModalTranscript";
import axios from "axios";
// import { array } from "prop-types";
const ContentTable = ({ item }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Get items from database
    axios
      .get(
        "http://ims-api.viendong.edu.vn/api/beta/hocvien/bangdiemhocky?hocKyId=61",
        {
          headers: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU2NjQsImhvY3ZpZW5pZCI6MTc4ODMsImdpYW5ndmllbmlkIjpudWxsLCJ1c2VyaWQiOiIyMDA1MDIwMDI5IiwicGFzcyI6IjEyMzQ1NiIsImhvY1ZpZW5JZCI6MTc4ODMsImhvY1ZpZW4iOnsiaWQiOjE3ODgzLCJtc2h2IjoiMjAwNTAyMDAyOSIsImhvIjoiVGjDoWkgVGjhu4sgS2ltIiwidGVuIjoiTmfDom4iLCJoaW5oYW5oIjpudWxsLCJtYWxvcCI6IjE0S1RDIiwibmFtbmhhcGhvYyI6MjAyMCwia2hvYWhvYyI6MTQsImdoaWNodSI6Ik5oYXAgdHUgZmlsZSBleGNlbCBEU1NWX0sxNC54bHMiLCJuZ2F5bGFwIjoiMjAyMS0wMS0yOVQxNjoyMjowMC4wMDBaIiwibWF0cmFuZ3RoYWkiOm51bGwsIm5nYXlzaW5oIjoiMjAwMi0wMi0xM1QwMDowMDowMC4wMDBaIiwiZW1haWwiOm51bGwsInNkdCI6IjA4OTgyODAzNzQiLCJjbW5kIjoiMzAxNzk2Mjc3IiwiZ2lvaXRpbmgiOm51bGwsIm5vaXNpbmgiOm51bGwsImtob2luZ2FuaGlkIjo1Njh9LCJnaWFuZ1ZpZW4iOm51bGwsImlhdCI6MTY1Nzk1MTYyOX0.MC_ezgd5xPIax_h6c0xEhjrqppvQ88ZlxnNz4Z6MMsk",
          },
        }
      )
      .then((response) => {
        setData(response.data.data ? response.data.data : []);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Table
        hover
        scope="row"
        style={{
          width: "75%",
          height: "10%",
          backgroundColor: "#D5E8D4",
          border: "1px solid white",
          borderCollapse: "collapse",
          marginBottom: "15px !important",
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
              border: "1px solid white",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {item.mhten}
          </th>
          <th
            style={{
              width: "200px",

              height: "50px",
              border: "1px solid white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Điểm:{" "}
            <span style={{ fontSize: "20px", paddingLeft: "33px" }}>
              {" "}
              {item.tongdiem}
            </span>
          </th>
          <th
            style={{
              width: "100px",
              height: "50px",
              border: "1px solid white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Kết quả
          </th>
          <th
            style={{
              width: "300px",

              height: "50px",
              border: "1px solid white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
              borderRight: "1px solid white",
              borderTop: "1px solid white",
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
                {item.soTinChi}
              </td>
              <td
                style={{
                  width: "280px",
                  borderTop: "1px solid white",
                }}
              >
                {item.mhma}
              </td>
            </tbody>
          </th>
          <th
            style={{
              width: "200px",
              textAlign: "center",
              height: "50px",
              border: "1px solid white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Điểm chữ:{" "}
            <span style={{ fontSize: "20px", paddingLeft: "20px" }}>
              {" "}
              {item.diemchu}
            </span>
          </th>
          <td
            style={{
              width: "100px",
              height: "50px",
              border: "1px solid white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* {data.map((item) => ( <ModalTranscript  item={item}/>))} */}
            <ModalTranscript />
          </th>
        </tr>
      </Table>
    </>
  );
};
export default ContentTable;
