import React from "react";
import "./Register.css";
import { Alert, Nav, NavItem, NavLink } from "reactstrap";
import RegisterHeader from "./RegisterHeader";
import RegisterContent from "./RegisterContent";
class RegisterCoures extends React.Component {
  render() {
    return (
      <>
        <RegisterHeader />
        <RegisterContent />
      </>
    );
  }
}

export default RegisterCoures;
