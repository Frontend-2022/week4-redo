import { useState, useEffect, React } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

const TableHover = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    // Get items from database
    axios.get('http://ims-api.viendong.edu.vn/api/beta/hocvien/hocphi', {
      headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU2NjQsImhvY3ZpZW5pZCI6MTc4ODMsImdpYW5ndmllbmlkIjpudWxsLCJ1c2VyaWQiOiIyMDA1MDIwMDI5IiwicGFzcyI6IjEyMzQ1NiIsImhvY1ZpZW5JZCI6MTc4ODMsImhvY1ZpZW4iOnsiaWQiOjE3ODgzLCJtc2h2IjoiMjAwNTAyMDAyOSIsImhvIjoiVGjDoWkgVGjhu4sgS2ltIiwidGVuIjoiTmfDom4iLCJoaW5oYW5oIjpudWxsLCJtYWxvcCI6IjE0S1RDIiwibmFtbmhhcGhvYyI6MjAyMCwia2hvYWhvYyI6MTQsImdoaWNodSI6Ik5oYXAgdHUgZmlsZSBleGNlbCBEU1NWX0sxNC54bHMiLCJuZ2F5bGFwIjoiMjAyMS0wMS0yOVQxNjoyMjowMC4wMDBaIiwibWF0cmFuZ3RoYWkiOm51bGwsIm5nYXlzaW5oIjoiMjAwMi0wMi0xM1QwMDowMDowMC4wMDBaIiwiZW1haWwiOm51bGwsInNkdCI6IjA4OTgyODAzNzQiLCJjbW5kIjoiMzAxNzk2Mjc3IiwiZ2lvaXRpbmgiOm51bGwsIm5vaXNpbmgiOm51bGwsImtob2luZ2FuaGlkIjo1Njh9LCJnaWFuZ1ZpZW4iOm51bGwsImlhdCI6MTY1NzY4Nzc3MH0.w9lduwIS3ULlyKaPvaQisrI9_TMF2xj918JpGp_Wauo"
      }
    })
      .then(response => {
        setData(response.data.data ? response.data.data : []);
      })
      .catch((error) => {
        console.log(error)
      });
    // eslint-disable-next-line
  }, [data]);

  const Tongconlai = (temp) => {
      for( let i of data){
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
            <th>Học phí</th>
            <th>Đã thanh toán</th>
            <th>Thanh toán</th>
            <th>In</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
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