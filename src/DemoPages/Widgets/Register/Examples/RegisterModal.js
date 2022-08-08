import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import ModalItem from './ModalItem';
const RegisterModal = ({cart}) => {
  const [modal,SetModal] = useState(false)

  const toggle = () =>{
    SetModal(!modal)
  }
    return (
        <span className="d-inline-block mb-2 me-2">
        <Button color="primary" onClick={toggle}>Icon giỏ hàng / Xem chi tiết</Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle} charCode="Y">Kết quả</ModalHeader>
           <ModalItem cart={cart}/>
          <ModalFooter>
            <Button color="link" onClick={toggle}>Hủy</Button>
            <Button color="primary" onClick={toggle}>Xác nhận</Button>{' '}
          </ModalFooter>
        </Modal>
      </span>
    );
  
}

export default RegisterModal;

