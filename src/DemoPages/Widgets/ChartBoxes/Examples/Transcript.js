import React from "react";
import ContentTranscript from "./ContentTranscript";
import "./Transcript.css";
import { CardTitle, Card } from "reactstrap";
import axios from "axios";
import ContentHeader from "./ContentHeader";
import HighChartTs from "./HightChartTs";
class Transcript extends React.Component {
  state = {
    TableTranscript: [],
  };

  async componentDidMount() {
    var res = await axios.get(
      "http://ims-api.viendong.edu.vn/api/beta/hocvien/bangdiemhocky",
      {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU2NjQsImhvY3ZpZW5pZCI6MTc4ODMsImdpYW5ndmllbmlkIjpudWxsLCJ1c2VyaWQiOiIyMDA1MDIwMDI5IiwicGFzcyI6IjEyMzQ1NiIsImhvY1ZpZW5JZCI6MTc4ODMsImhvY1ZpZW4iOnsiaWQiOjE3ODgzLCJtc2h2IjoiMjAwNTAyMDAyOSIsImhvIjoiVGjDoWkgVGjhu4sgS2ltIiwidGVuIjoiTmfDom4iLCJoaW5oYW5oIjpudWxsLCJtYWxvcCI6IjE0S1RDIiwibmFtbmhhcGhvYyI6MjAyMCwia2hvYWhvYyI6MTQsImdoaWNodSI6Ik5oYXAgdHUgZmlsZSBleGNlbCBEU1NWX0sxNC54bHMiLCJuZ2F5bGFwIjoiMjAyMS0wMS0yOVQxNjoyMjowMC4wMDBaIiwibWF0cmFuZ3RoYWkiOm51bGwsIm5nYXlzaW5oIjoiMjAwMi0wMi0xM1QwMDowMDowMC4wMDBaIiwiZW1haWwiOm51bGwsInNkdCI6IjA4OTgyODAzNzQiLCJjbW5kIjoiMzAxNzk2Mjc3IiwiZ2lvaXRpbmgiOm51bGwsIm5vaXNpbmgiOm51bGwsImtob2luZ2FuaGlkIjo1Njh9LCJnaWFuZ1ZpZW4iOm51bGwsImlhdCI6MTY1Nzk1MTYyOX0.MC_ezgd5xPIax_h6c0xEhjrqppvQ88ZlxnNz4Z6MMsk",
        },
      }
    );

    const data = res?.data?.data ?? [];
    let arr = [];

    for (const item of data) {
      let existed = arr.findIndex((r) => r.hkid === item.hkid);

      if (existed < 0) {
        const hk = {
          hkid: item.hkid,
          hkten: item.hkten,
          trungbinhhk: item.trungbinhhk,
          totalCredits: item.soTinChi,
          totalAccumulationCompleted: !item.datyn ? 0 : item.soTinChi,
          result: !item.datyn ? "pe-7s-close-circle" : "pe-7s-check",
          subjects: [
            {
              mhid: item.mhid,
              mhten: item.mhten,
              soTinChi: item.soTinChi,
              mhma: item.mhma,
              tongdiem: item.tongdiem,
              diemCK: item.diemCK,
              diemGK: item.diemGK,
              diemchu: item.diemchu,
              datyn: item.datyn,
            },
          ],
        };
        arr.push(hk);
      } else {
        const hk = arr[existed];
        hk.totalCredits += item.soTinChi;
        hk.totalAccumulationCompleted += !item.datyn ? 0 : item.soTinChi;
        hk.subjects.push({
          mhid: item.mhid,
          mhten: item.mhten,
          soTinChi: item.soTinChi,
          mhma: item.mhma,
          tongdiem: item.tongdiem,
          diemCK: item.diemCK,
          diemGK: item.diemGK,
          diemchu: item.diemchu,
          datyn: item.datyn,
        });
        arr[existed] = hk;
      }
    }

    this.setState({
      TableTranscript: arr.sort((a, b) => b.hkid - a.hkid),
    });
  }

  render() {
    return (
      <>
        <div className="contentMiddle">
          <ContentHeader item={this.state.TableTranscript} />
          <ContentTranscript item={this.state.TableTranscript} />
          <HighChartTs item={this.state.TableTranscript} />
          <Card className="mb-3 mb-3a" body inverse color="danger">
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
  }
}

export default Transcript;
