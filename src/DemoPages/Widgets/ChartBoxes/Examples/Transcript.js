import React, {useState, useEffect, } from "react";
import ContentTranscript from "./ContentTranscript";
import LineChartTranscript from "./LineChartTranscript";
import "./Transcript.css";
import {CardTitle, Card,} from "reactstrap";
import axios from "axios";
import ContentHeader from "./ContentHeader";
const Transcript = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Get items from database
    axios
      .get(
        "http://ims-api.viendong.edu.vn/api/beta/hocvien/bangdiemhocky?hocKyId=60",
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

  if (!data||data.length===0) {
    return <></>
  }

  return (
    <>
      <div className="contentMiddle">
      <ContentHeader data={data}/>
      <ContentTranscript data={data} />
      <LineChartTranscript data={data} />
        {/* Note */}
        <Card className="mb-3" body inverse color="danger">
          <CardTitle
            className="text-white"
            style={{ paddingTop: "20px", paddingLeft: "20px" }}
          >
            Ghi Chú
          </CardTitle>
          <div
            style={{
              paddingLeft: "20px",
              paddingBottom: "20px",
            }}
          >
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
                color: " #DCDCDC",
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
                color: "#DCDCDC",
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
};

export default Transcript;
