import React from "react";
import "./RegisterHeader.css";
import { Nav, NavItem} from "reactstrap";

const RegisterHeader = () => {
  
  return (
    <form className="register-header">
      <Nav justified  >
         <NavItem style={{marginLeft:'27vw'}}  > {/* style={{marginLeft:'390px'}} */}
          <div className="choose-term" >
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
        <NavItem style={{marginRight:'26vw '}} > {/* style={{marginLeft:'-470px'}}*/}
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
        {/* <Nav style={{marginTop:'40px', textAlign:'center'}}> 
        <NavItem style={{marginRight:'50px', marginLeft:'360px',}}>
          <div>Trong kế hoạch</div>
          <Input type={"checkbox"} className="typeOfRegister" ></Input>
        </NavItem>
        <NavItem style={{marginRight:'60px'}}>
          <div>Học vượt</div>
          <Input type={"checkbox"} className="typeOfRegister"></Input>
        </NavItem>
        <NavItem>
          <div>Học lại</div>
          <Input type={"checkbox"} className="typeOfRegister"></Input>
        </NavItem>
      </Nav> */}
      <div className="divider" />
    </form>
  );
};
export default RegisterHeader;
