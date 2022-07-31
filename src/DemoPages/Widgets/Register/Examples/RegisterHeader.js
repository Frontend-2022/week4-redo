import React from "react";
import "./RegisterHeader.css";
import { Nav, NavItem, Input} from "reactstrap";

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
          <Input type={"checkbox"} className="typeOfRegister" ></Input>
        </NavItem>
        <NavItem>
          <div>Học vượt</div>
          <Input type={"checkbox"} className="typeOfRegister"></Input>
        </NavItem>
        <NavItem>
          <div>Học lại</div>
          <Input type={"checkbox"} className="typeOfRegister"></Input>
        </NavItem>
       
      </Nav>
      <div className="divider" />
    </form>
  );
};
export default RegisterHeader;
