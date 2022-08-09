import React from "react";
import "./RegisterHeader.css";
import { Nav, NavItem, Button, CardTitle } from "reactstrap";
import { get } from "react-scroll/modules/mixins/scroller";

const RegisterHeader = ({ items }) => {
  let gethkid = items.map((a) => a.hockyid);
  return (
    <>
      <form className="register-header">
        <div className="register-header-child">
          <div>
            <div className="choose-term">
              <div style={{ textAlign: "center" }}>Chọn học kì</div>
              <select className="slec">
                <option>{`Học kỳ ${gethkid[0]}`}</option>
              </select>
            </div>
          </div>
          <div>
            <div className="choose-term">
              <div style={{ textAlign: "center" }}>Chọn đợt đăng kí</div>
              <select className="slec">
                <option>Đợt đăng kí mới</option>
              </select>
            </div>
          </div>
        </div>
        <div className="divider" />
      </form>
      <CardTitle>Môn học chờ đăng kí</CardTitle>
    </>
  );
};
export default RegisterHeader;
