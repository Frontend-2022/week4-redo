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
                  <div className="Content-Table">
                    <div className="Table--left">
                      <div className="Table--left--content">
                        <div className="GPA_hk">
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
                    
                    <div className="Table--right" style={{backgroundColor: 'transparent'}}>
                    {item.map((item) => (
                        <div className="Table--right-content">
                          <div className="subject">
                            <div style={{ width: "50%" }}>{item.hkten}</div>
                            <div style={{ height: "100%" }}>
                              <div
                                className="subjectDetail"
                                style={{ marginTop: "20px" }}
                              >
                                Mã: {item.hkma}
                              </div>
                              <div className="subjectDetail">
                                {`Mã MH:\t\t`}
                                {item.mhma}
                              </div>
                            </div>
                          </div>
                          <div className="item--content">
                            <th
                              style={{
                                width: "100%",
                                textAlign: "center",
                                height: "50px",
                                borderTop: "1px solid white",
                                backgroundColor: " rgb(105 144 102)",
                                borderRadius: "0 0 50px 50px",
                              }}
                            >
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
                                <th style={{ width: "190px" }}> Điểm CK</th>
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
                                  }}
                                >
                                  {item.diemCK}
                                </td>
                              </tbody>
                            </th>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </tbody>
      

        </Col>
        </>
  );
}
export default TableHover;