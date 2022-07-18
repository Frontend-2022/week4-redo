import { React } from 'react';
import { Table } from 'reactstrap';

const TableHover = ({item}) => {
  const Tongconlai = (temp) => {
      for( let i of item){
        temp += i.soTien;
      }
      return temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  const handleHocphi = (it) => {
    if (it.toString().includes("-")){
        return '' ;}
    else return it.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") ;
}
const handleThanhtoan = (it) => {
    if (it.toString().includes("-")){
        return it.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") ;}
    else return '' ;
}
  return (
      <Table hover className="mb-0" style={{ color: 'black' }} tabIndex>
        <thead style={{ backgroundColor: '#a8a3a3' }}>
          <tr >
            <th scope='col'>STT</th>
            <th>Học kỳ</th>
            <th>Ngày tạo</th>
            <th>Loại PT</th>
            <th>Mã</th>
            <th>Đã thanh toán</th>
            <th>Học phí phát sinh</th>
            <th>Thanh toán</th>
            <th>In</th>
          </tr>
        </thead>
        <tbody>
          {item.map((item) => (
            <tr>
            <th scope="row"></th>
            <td>{item.hkma}</td>
            <td>{item.ngayTao}</td>
            <td>{item.lptma}</td>
            <td>{item.ptma}</td>
            <td>{handleHocphi(item.soTien)}</td>
            <td>{handleThanhtoan(item.soTien)}</td>
            <td><a href="/"> <i class="pe-7s-piggy " > </i></a></td>
            <td><a href="/" ><i class="pe-7s-print " > </i></a></td>
        </tr>
            ))}
          <tr>
          <th colSpan={5}></th>
          <td style={{marginLeft:'8px', color:'red', fontWeight:'bold', fontSize:'1rem'}}>Tổng nợ</td>
          <td style={{fontWeight:'bold', fontSize:'1rem' }}>{Tongconlai(0)}</td>
          <td></td>
          <td></td>
          </tr>
        </tbody>
      </Table>
  );
}
export default TableHover;