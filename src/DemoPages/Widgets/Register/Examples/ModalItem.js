import React from 'react';
import { ModalBody, Table } from 'reactstrap';
import "./ModalItem.css";
const ModalItem = ({ cart }) => {
  return (
    <ModalBody className='modalInfo'>
      <Table className="mb-0">
        <thead>
          <tr>
            <th style={{ textAlign: "center", width: "400px" }}>Môn học</th>
            <th style={{ textAlign: "center", width: "20px" }}>TC</th>
            <th style={{ textAlign: "center" }}>Giảng viên</th>
            <th style={{ textAlign: "center", width: "90px" }}>Tình trạng</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr className='styleTr'>
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