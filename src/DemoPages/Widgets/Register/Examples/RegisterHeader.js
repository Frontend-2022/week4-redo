import React from "react";
import "./RegisterHeader.css";
import { Nav, NavItem, Button, CardTitle } from "reactstrap";

const RegisterHeader = () => {
  return (
    <form className="register-header">
      <Nav justified style={{ flexWrap: "nowrap", marginLeft: "27vw" }}>
        <NavItem style={{ flexGrow: "0" }}>
          {" "}
          {/* style={{marginLeft:'390px'}} */}
          <div className="choose-term">
            <div>Chọn học kì</div>
            <select className="slec">
              <option>Học kì mới</option>
              <option>Học kỳ 1</option>
              <option>Học kỳ 1</option>
              <option>Học kỳ 1</option>
              <option>Học kỳ 1</option>
            </select>
          </div>
        </NavItem>
        <NavItem style={{ marginRight: "50vw ", flexGrow: "0" }}>
          {" "}
          {/* style={{marginLeft:'-470px'}}*/}
          <div className="choose-term">
            <div>Chọn đợt đăng kí</div>
            <select className="slec">
              <option>Tất cả</option>
              <option>Học kỳ 1</option>
              <option>Học kỳ 1</option>
              <option>Học kỳ 1</option>
              <option>Học kỳ 1</option>
            </select>
          </div>
        </NavItem>
      </Nav>
      <div className="divider" />
      <CardTitle>Môn học chờ đăng kí</CardTitle>
    </form>
  );
};
export default RegisterHeader;
