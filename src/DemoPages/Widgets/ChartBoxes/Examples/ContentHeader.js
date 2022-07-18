import React,{useState,} from "react";
import "./Transcript.css";
import {  Button, Alert,  } from "reactstrap";
import axios from "axios";
class ContentHeader extends React.Component
{

    state ={
        UserInfors:[]

    }
    state2={
        khoiNganh:[]
    }
      async componentDidMount(){
        let res = await axios.get('http://ims-api.viendong.edu.vn/api/beta/user/info',
        {
            headers: {
              token:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU2NjQsImhvY3ZpZW5pZCI6MTc4ODMsImdpYW5ndmllbmlkIjpudWxsLCJ1c2VyaWQiOiIyMDA1MDIwMDI5IiwicGFzcyI6IjEyMzQ1NiIsImhvY1ZpZW5JZCI6MTc4ODMsImhvY1ZpZW4iOnsiaWQiOjE3ODgzLCJtc2h2IjoiMjAwNTAyMDAyOSIsImhvIjoiVGjDoWkgVGjhu4sgS2ltIiwidGVuIjoiTmfDom4iLCJoaW5oYW5oIjpudWxsLCJtYWxvcCI6IjE0S1RDIiwibmFtbmhhcGhvYyI6MjAyMCwia2hvYWhvYyI6MTQsImdoaWNodSI6Ik5oYXAgdHUgZmlsZSBleGNlbCBEU1NWX0sxNC54bHMiLCJuZ2F5bGFwIjoiMjAyMS0wMS0yOVQxNjoyMjowMC4wMDBaIiwibWF0cmFuZ3RoYWkiOm51bGwsIm5nYXlzaW5oIjoiMjAwMi0wMi0xM1QwMDowMDowMC4wMDBaIiwiZW1haWwiOm51bGwsInNkdCI6IjA4OTgyODAzNzQiLCJjbW5kIjoiMzAxNzk2Mjc3IiwiZ2lvaXRpbmgiOm51bGwsIm5vaXNpbmgiOm51bGwsImtob2luZ2FuaGlkIjo1Njh9LCJnaWFuZ1ZpZW4iOm51bGwsImlhdCI6MTY1Nzk1MTYyOX0.MC_ezgd5xPIax_h6c0xEhjrqppvQ88ZlxnNz4Z6MMsk",
            },
          }
        );
        this.setState({
            UserInfors: res && res.data && res.data.hocVien ? res.data.hocVien :[],
            khoiNganh:  res && res.data && res.data.hocVien ? res.data.hocVien.khoiNganh :[]
        })
        // console.log('>>> res:  ', res.data.hocVien.khoiNganh.ten);
    }
    render(){
        // let {UserInfors,khoiNganh} =this.state;
        return(
            <>
                 <Alert className="bgTittle" color="dark">
      <div
        style={{
          color: "#A90001",
          font: "0.8em  Tahoma, Arial, Sans-Serif",
          fontSize: "15px",
          fontWeight: "bold",
          textTransform: "uppercase",
          padding: "0",
          paddingLeft: "40px",
        }}
      >
        Thông tin sinh viên
      </div>
    </Alert>

    <Alert
      color="light"
      className="Table_header"
      style={{ margin: "0 auto", display: "flex", width: "98%" }}
    >
      <table
        style={{ marginLeft: "50px", width: "90%" }}
        cellSpacing="0"
        cellPadding="5"
      >
        <tbody style={{ margin: 0, padding: 0 }}>
          <tr>
            <th colSpan={2}>Họ và tên: </th>
            <td colSpan={3} className="td-css">
            {this.state.UserInfors.ho} {this.state.UserInfors.ten}
            </td>


            <th colSpan={2}>Chuyên ngành: </th>
            <td colSpan={3} className="td-css">
              {" Kế toán"}
            </td>

          </tr>

          <tr>
            <th colSpan={2}>MSSV: </th>
            <td colSpan={3} className="td-css">
            {this.state.UserInfors.mshv}
            </td>
            <th colSpan={2}>Hệ ĐT: </th>
            <td colSpan={3} className="td-css">
              {" Cao đẳng chính quy"}
            </td>
          </tr>

          <tr>
            <th colSpan={2}>Khóa học: </th>
            <td colSpan={3} className="td-css">
            {this.state.UserInfors.khoahoc}
            </td>
            <th colSpan={2}>Lớp: </th>
            <td colSpan={3} className="td-css">
            {this.state.UserInfors.malop}
            </td>
          </tr>
        </tbody>
      </table>
    </Alert>
    <div className="Sort">
      <div className="Sort-1">
        <label style={{ fontSize: "14px" }}>Năm học</label>
        <select className="slect" defaultValue={0}>
          <option value={2026}>2026</option>
          <option value={2025}>2025</option>
          <option value={2024}>2024</option>
          <option value={2023}>2023</option>
          <option value={2022}>2022</option>
          <option value={2021}>2021</option>
          <option value={2020}>2020</option>
          <option value={2019}>2019</option>
          <option value={0}>
            Tất cả
          </option>
        </select>
      </div>
      <div className="Sort-1">
        <label style={{ fontSize: "14px" }}>Học kỳ</label>
        <select className="slect" defaultValue={0}>
          <option value={"HKĐ"}>Học kì đầu</option>
          <option value={"HKG"}>Học kì giữa</option>
          <option value={"HKC"}>Học kì cuối</option>
          <option value={0}>
            Tất cả
          </option>
        </select>
      </div>
      <div className="Sort-1">
        <label style={{ fontSize: "14px" }}>Hệ điểm</label>
        <select className="slect" defaultValue={10}>
          <option value={10}>10</option>
          <option value={4}>4</option>
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
    {/* warning */}
    <Alert color="warning" style={{ width: "98%", marginLeft: "1%" }}>
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
            </>
        )
    }


}
export default ContentHeader;