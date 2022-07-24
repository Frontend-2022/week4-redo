import { React } from 'react';
import {Table,Col,Card,CardBody } from 'reactstrap';
import '../index.css'
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
    <>
    <Col lg="6">
    <Table responsive className="mb-0">
          <thead style={{ backgroundColor: "#DCDCDC" }}>
            <tr>
              <td colSpan="9" style={{ borderBottomColor: "white" }}>
              </td>
            </tr>
          </thead>
        {/* <tbody>
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
          <tr>
          <th colSpan={5}></th>
          <td style={{marginLeft:'8px', color:'red', fontWeight:'bold', fontSize:'1rem'}}>Tổng nợ</td>
          <td style={{fontWeight:'bold', fontSize:'1rem' }}>{Tongconlai(0)}</td>
          <td></td>
          <td></td>
          </tr>
        </tbody> */}
        <tbody>
                  <div className="Content-Table1">
                    <div className="Table--left1">
                      <div className="Table--left1--content">
                        <div className="Tongno">
                          <div
                            style={{
                              verticalAlign: "middle",
                              paddingTop: "25%",
                            }}
                          >
                            <div style={{ fontWeight: "700" }}>
                              Học phí nợ
                            </div>
                            <div style={{ fontSize: "45px" }}>
                              {Tongconlai(0)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    {/* Table left */}
                    
                    <div className="Table--right1" style={{backgroundColor: 'transparent'}}>
                    {item.map((item) => (
                       <div className="Table--right1-content">
                       <div className="item" >
                         {/* <div style={{ width: "50%"}}>{item.hkten}                    </div>
                         <div style={{ width: "auto", marginLeft:'60px'}}>{item.hkma}</div> */}
                         <div style={{width: "520px", marginLeft:'50px', marginTop:'40px'}}>{item.soTien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} 
                         <div style={{width: "auto"}}> {item.ngayTao}</div>
                         </div>
                         <div style={{ height: "100%", marginLeft:'100px' }}>
                         <div
                             className="itemDetail"
                             style={{ margin: '20px 0 0 0', width: '150px'}}
                           >
                            {item.hkten}
                            </div>
                            <div
                             className="itemDetail"  style={{width: '150px', margin: " 4px 0 0 0px" }}>
                            Mã học kỳ: {item.hkma}
                           </div> 
                           <div
                             className="itemDetail"  style={{width: '150px', margin: " 4px 0 0 0px" }}>
                            Mã học phí: {item.lptma}
                           </div> 
                           </div>
                         <div style={{ height: "100%"}}>
                           <div
                             className="itemDetail"
                             style={{ margin: " 20px 0 0 10px" }}
                           >
                             Mã: {item.ptma}
                           </div>
                           <div className="itemDetail" style={{ margin: " 4px 0 0 10px" }} >
                             ID: {item.ptid}
                           </div>
                           <div className="itemDetail" style={{ margin: " 4px 0 0 10px" }} >
                             Loại học phí: {item.lptten}
                           </div>
                         </div>
                       </div>
                        {/* <div className="item--content">
                         <th className="item--content--child">
                           <thead
                             style={{
                               width: "190px",
                               borderBottom: "1px solid white",
                             }}
                           >
                             <th
                               style={{
                                 width: "190px",
                                 borderRight: "1px solid white",
                               }}
                             >
                               Điểm số
                             </th>
                             <th
                               style={{
                                 width: "190px",
                                 borderRight: "1px solid white",
                               }}
                             >
                               Điểm chữ
                             </th>
                             <th
                               style={{
                                 width: "190px",
                                 borderRight: "1px solid white",
                               }}
                             >
                               Điểm GK
                             </th>
                             <th
                               style={{
                                 width: "190px",
                                 borderRight: "1px solid white",
                               }}
                             >
                               Điểm CK
                             </th>
                             <th style={{ width: "190px" }}> Kết quả</th>
                           </thead>
                           <tbody>
                             <td
                               style={{
                                 width: "280px",
                                 borderTop: "1px solid white",
                                 borderRight: "1px solid white",
                               }}
                             >
                               {item.tongdiem}
                             </td>
                             <td
                               style={{
                                 width: "280px",
                                 borderTop: "1px solid white",
                                 borderRight: "1px solid white",
                               }}
                             >
                               {item.diemchu}
                             </td>
                             <td
                               style={{
                                 width: "280px",
                                 borderTop: "1px solid white",
                                 borderRight: "1px solid white",
                               }}
                             >
                               {item.diemGK}
                             </td>
                             <td
                               style={{
                                 width: "280px",
                                 borderTop: "1px solid white",
                                 borderRight: "1px solid white",
                               }}
                             >
                               {item.diemCK}
                             </td>
                             <td
                               style={{
                                 width: "280px",
                                 borderTop: "1px solid white",
                               }}
                             >
                                  {item.diemCK}
                                </td>
                              </tbody>
                            </th>
                          </div> */}
                        </div>
                      ))}
                    </div>
                  </div>
                </tbody>
                </Table>

        </Col>
        </>
  );
}
export default TableHover;