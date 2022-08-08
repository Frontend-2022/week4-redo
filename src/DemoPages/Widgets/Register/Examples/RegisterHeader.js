import React from "react";
import "./RegisterHeader.css";
import { Nav, NavItem, Button, CardTitle } from "reactstrap";

const RegisterHeader = () => {
  return (
    <form className="register-header">
      <div className="register-header-child">
        <div>
          <div className="choose-term">
            <div style={{ textAlign: "center" }}>Chọn học kì</div>
            <select className="slec">
              <option>Học kì mới</option>
              <option>Học kỳ 1</option>
              <option>Học kỳ 1</option>
              <option>Học kỳ 1</option>
              <option>Học kỳ 1</option>
            </select>
          </div>
        </div>
        <div>
          <div className="choose-term">
            <div style={{ textAlign: "center" }}>Chọn đợt đăng kí</div>
            <select className="slec">
              <option>Tất cả</option>
              <option>Học kỳ 1</option>
              <option>Học kỳ 1</option>
              <option>Học kỳ 1</option>
              <option>Học kỳ 1</option>
            </select>
          </div>
        </div>
      </div>
      <div className="divider" />
      {/* <CardTitle>Môn học chờ đăng kí</CardTitle> */}
    </form>
  );
};
export default RegisterHeader;
