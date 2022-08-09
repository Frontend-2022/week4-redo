import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";
import ModalItem from "./ModalItem";
import "./RegisterModal.css";
const RegisterModal = ({ cart }) => {
  const [modal, SetModal] = useState(false);

  const toggle = () => {
    SetModal(!modal);
  };
  return (
    <span className="d-inline-block mb-2 me-2">
      <Button color="success" onClick={toggle}>
        <i
          className="pe-7s-pen"
          style={{ fontWeight: "700", fontSize: "20px" }}
        ></i>{" "}
        <span style={{ fontSize: "15px" }}>Xem kết quả</span>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className='modalContent'>
        <ModalHeader toggle={toggle} charCode="Y" style={{ backgroundColor: "#fd898c" }}>
          <span className="resultModal">Kết quả đăng kí môn học</span>
        </ModalHeader>
        <ModalItem cart={cart} />
        <ModalFooter>
          <Button color="link" onClick={toggle} className='cancelRegister'>
            Hủy đăng ký
          </Button>
          <Button onClick={toggle} className='acceptRegister'>
            Xác nhận
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </span>
  );
};

export default RegisterModal;
