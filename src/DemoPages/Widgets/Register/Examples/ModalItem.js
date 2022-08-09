import React from 'react';
import { ModalBody, Table } from 'reactstrap';
import "./ModalItem.css";
const ModalItem = ({ cart }) => {
  return (
    <ModalBody className='modalInfo'>
      <Table className="mb-0">
        <thead>
          <tr>
            <th style={{ width: "450px" }}>Môn học</th>
            <th>TC</th>
            <th>Giảng viên</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr className='styleTr'>
              <td>{item.mhten}</td>
              <td>{item.mhsotc}</td>
              <td>{item.gvten}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ModalBody>
  )
}
export default ModalItem;