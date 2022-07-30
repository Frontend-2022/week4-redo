import React from "react";
import "./Register.css";
import { Nav, NavItem } from "reactstrap";

const RegisterHeader = () => {
  return (
    <form className="register-header">
      <Nav justified>
        <NavItem>
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
        <NavItem>
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
        <NavItem>
          <div>Trong kế hoạch</div>
          <input type={"radio"} className="typeOfRegister"></input>
        </NavItem>
        <NavItem>
          <div>Học vượt</div>
          <input type={"radio"} className="typeOfRegister"></input>
        </NavItem>
        <NavItem>
          <div>Học lại</div>
          <input type={"radio"} className="typeOfRegister"></input>
        </NavItem>
        <NavItem>
          <div>Học cải thiện</div>
          <input type={"radio"} className="typeOfRegister"></input>
        </NavItem>
      </Nav>
      <div className="divider" />
    </form>
  );
};
export default RegisterHeader;
