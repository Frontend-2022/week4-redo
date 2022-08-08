import React from 'react';
import { ModalBody,Table } from 'reactstrap';
const ModalItem = ({cart}) =>{
    return (
        <ModalBody>
            <Table className="mb-0">
        <tbody>
        {cart.map((item)=>(
          <tr>
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