import React from 'react';
import { ModalBody, Table } from 'reactstrap';
import "./ModalItem.css";
const ModalItem = ({ cart }) => {
  return (
    <ModalBody className='modalInfo'>
      <Table className="mb-0">
        <thead>
          <tr>
            <th style={{  }}>Mã MH</th>
            <th style={{ width: "350px" }}>Tên môn học</th>
            <th style={{ width: "20px" }}>Số TC</th>
            <th style={{  }}>Giảng viên</th>
            <th style={{ width: "90px" }}>Tình trạng</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr className='styleTr'>
              <td>{item.mhma}</td>
              <td>{item.mhten}</td>
              <td>{item.mhsotc}</td>
              <td>{item.gvten}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ModalBody>
  )
}
export default ModalItem;