import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";
import ModalItem from "./ModalItem";
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
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} charCode="Y">
          Kết quả
        </ModalHeader>
        <ModalItem cart={cart} />
        <ModalFooter>
          <Button color="link" onClick={toggle}>
            Hủy
          </Button>
          <Button color="primary" onClick={toggle}>
            Xác nhận
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </span>
  );
};

export default RegisterModal;
