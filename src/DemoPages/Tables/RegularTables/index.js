import React, {Fragment,useState,useEffect, Component} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle,FormGroup,Label,Input
} from 'reactstrap';
import axios from 'axios';
import PageTitle from '../../../Layout/AppMain/PageTitle';


import TableHover from './Examples/TableHover';
import Chart from './Chart.js';




 class RegularTables extends Component{
    
    state ={
        HocPhi:[]
    }
    async componentDidMount() {
    // Get items from database
    let res = await axios.get('http://ims-api.viendong.edu.vn/api/beta/hocvien/hocphi', {
      headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU2NjQsImhvY3ZpZW5pZCI6MTc4ODMsImdpYW5ndmllbmlkIjpudWxsLCJ1c2VyaWQiOiIyMDA1MDIwMDI5IiwicGFzcyI6IjEyMzQ1NiIsImhvY1ZpZW5JZCI6MTc4ODMsImhvY1ZpZW4iOnsiaWQiOjE3ODgzLCJtc2h2IjoiMjAwNTAyMDAyOSIsImhvIjoiVGjDoWkgVGjhu4sgS2ltIiwidGVuIjoiTmfDom4iLCJoaW5oYW5oIjpudWxsLCJtYWxvcCI6IjE0S1RDIiwibmFtbmhhcGhvYyI6MjAyMCwia2hvYWhvYyI6MTQsImdoaWNodSI6Ik5oYXAgdHUgZmlsZSBleGNlbCBEU1NWX0sxNC54bHMiLCJuZ2F5bGFwIjoiMjAyMS0wMS0yOVQxNjoyMjowMC4wMDBaIiwibWF0cmFuZ3RoYWkiOm51bGwsIm5nYXlzaW5oIjoiMjAwMi0wMi0xM1QwMDowMDowMC4wMDBaIiwiZW1haWwiOm51bGwsInNkdCI6IjA4OTgyODAzNzQiLCJjbW5kIjoiMzAxNzk2Mjc3IiwiZ2lvaXRpbmgiOm51bGwsIm5vaXNpbmgiOm51bGwsImtob2luZ2FuaGlkIjo1Njh9LCJnaWFuZ1ZpZW4iOm51bGwsImlhdCI6MTY1NzY4Nzc3MH0.w9lduwIS3ULlyKaPvaQisrI9_TMF2xj918JpGp_Wauo"
      }
    })

    this.setState({HocPhi: res.data && res.data.data ? res.data.data :[]})
    console.log('res>>>>',res.data.data)
    //   .then(response => {
    //     this.setState({post : (response.data.data ? response.data.data : [])});
    //     console.log(post)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   }
    //   );
    // eslint-disable-next-line
  };
  render() {
    return (
        <Fragment>
            <TransitionGroup>
                <CSSTransition component="div" appear={true}
                    timeout={0} enter={false} exit={false}>
                    <div>
                        <PageTitle
                        heading="Học phí"
                        icon="pe-7s-calculator icon-gradient bg-happy-itmeo" />
                        <div>
                        <FormGroup style={{display:'flex'}}>
                            <Label for="exampleSelect" style={{width: 'auto', padding: '6px 18px 0 0', fontWeight: 'bold', fontSize:'1rem'}}>Học kỳ</Label>
                                <Input type="select" name="select" id="exampleSelect"  style={{width: '94%'}}>
                                    <option >Tất cả</option>
                                    <option >Học kỳ</option>
                                    <option >Học kỳ</option>
                                    <option >Học kỳ</option>
                                    <option >Học kỳ</option>
                                </Input>
                        </FormGroup>
                            <Row>
                                <Col lg="13">
                                    <Card className="main-card mb-3">
                                        <CardBody>
                                            <CardTitle style={{color:'rgb(169, 0, 1)', fontWeight: 'bold', fontSize:'20px'}} >BẢNG KÊ CHI TIẾT HỌC PHÍ</CardTitle>
                                            <TableHover item={this.state.HocPhi}  />
                                        </CardBody>
                                    </Card>
                                    <Row style={{marginLeft:'auto'}}>
                                    <Card className="main-card mb-3" style={{width:'46%', marginRight:'60px', paddingLeft:'0', height:'250px'}}>
                                        <CardBody >
                                            <CardTitle style={{textTransform:'none', color:'red', fontSize:'20px'}}>Ghi chú</CardTitle>
                                                <p style={{color:'black'}}> - Phần mềm tính học phí và hiển thị học phí của sinh viên (SV) đang trong thời gian chạy thử nghiệm. Phòng Đào tạo mong Quý Phụ huynh và SV thông cảm về những sai sót có thể phát sinh trong giai đoạn này.</p>
                                                <p style={{color:'black'}}> - SV đóng thừa học phí sẽ được cấn trừ vào học kỳ tiếp theo. Nếu vẫn còn thừa, sẽ được nhận lại sau khi nhận bằng tốt nghiệp khóa học.</p>
                                                <p style={{color:'black'}}> - SV có trách nhiệm tự kiểm tra học phí, khi có thắc mắc liên hệ số ĐT: 0353 4138 06 hoặc email: trangnguyen@vido.edu.vn</p>
                                        </CardBody>
                                    </Card>
                                    <Card className="main-card " style={{width:'48%', display:'flex', height:'auto'}}>
                                        <Row>
                                    <Col>
                                        <Chart item={this.state.HocPhi}/>
                                            </Col>
                                            </Row>
                                    </Card>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </Fragment>
    );
};
 }
export default RegularTables;