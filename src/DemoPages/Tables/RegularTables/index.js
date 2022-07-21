import React, {Fragment,useState,useEffect, Component} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle,FormGroup,Label,Input
} from 'reactstrap';
import axios from 'axios';
import PageTitle from '../../../Layout/AppMain/PageTitle';
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import TableHover from './Examples/TableHover';
import Chart from './Chart.js';




 class RegularTables extends Component{
    
    state ={
        HocPhi:[],
        filter:[]
    }
    async componentDidMount() {
    // Get items from database
    let res = await axios.get('http://ims-api.viendong.edu.vn/api/beta/hocvien/hocphi', {
      headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU2NjQsImhvY3ZpZW5pZCI6MTc4ODMsImdpYW5ndmllbmlkIjpudWxsLCJ1c2VyaWQiOiIyMDA1MDIwMDI5IiwicGFzcyI6IjEyMzQ1NiIsImhvY1ZpZW5JZCI6MTc4ODMsImhvY1ZpZW4iOnsiaWQiOjE3ODgzLCJtc2h2IjoiMjAwNTAyMDAyOSIsImhvIjoiVGjDoWkgVGjhu4sgS2ltIiwidGVuIjoiTmfDom4iLCJoaW5oYW5oIjpudWxsLCJtYWxvcCI6IjE0S1RDIiwibmFtbmhhcGhvYyI6MjAyMCwia2hvYWhvYyI6MTQsImdoaWNodSI6Ik5oYXAgdHUgZmlsZSBleGNlbCBEU1NWX0sxNC54bHMiLCJuZ2F5bGFwIjoiMjAyMS0wMS0yOVQxNjoyMjowMC4wMDBaIiwibWF0cmFuZ3RoYWkiOm51bGwsIm5nYXlzaW5oIjoiMjAwMi0wMi0xM1QwMDowMDowMC4wMDBaIiwiZW1haWwiOm51bGwsInNkdCI6IjA4OTgyODAzNzQiLCJjbW5kIjoiMzAxNzk2Mjc3IiwiZ2lvaXRpbmgiOm51bGwsIm5vaXNpbmgiOm51bGwsImtob2luZ2FuaGlkIjo1Njh9LCJnaWFuZ1ZpZW4iOm51bGwsImlhdCI6MTY1NzY4Nzc3MH0.w9lduwIS3ULlyKaPvaQisrI9_TMF2xj918JpGp_Wauo"
      }
    })

    this.setState({HocPhi: res.data && res.data.data ? res.data.data :[]})
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
    const checkFilter = (option) => {
        // No need to check for searched value
          if (option[0] === 'all')
            return this.state.HocPhi;
          else if (option[0] === 'Học kỳ 2, 2021 - 2022')
            return this.state.HocPhi.filter((item) => item["hkma"] === '212');
        else if (option[0] === 'Học kỳ 1, 2021 - 2022')
            return this.state.HocPhi.filter((item) => item["hkma"] === '211');
        else if (option[0] === 'Học kỳ hè, 2020 - 2021')
            return this.state.HocPhi.filter((item) => item["hkma"] === '203');
        else if (option[0] === 'Học kỳ 2, 2020 - 2021')
            return this.state.HocPhi.filter((item) => item["hkma"] === '202');
        else
            return this.state.HocPhi.filter((item) => item["hkma"] === '201');
    }
    const Tongconlai = (temp) => {
        for( let i of this.state.HocPhi){
                temp += i.soTien;
        }
        return temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    const toFindDuplicates = (temp) => {
        var uniques = [];
        var itemsFound = {};
        for(var i = 0, l = temp.length; i < l; i++) {
            var stringified = JSON.stringify(temp[i]['hkma']);
            if(itemsFound[stringified]) { continue; }
            uniques.push(temp[i]);
            itemsFound[stringified] = true;
        }
        return uniques;
    }
    return (
        <Fragment>
            <TransitionGroup>
                <CSSTransition component="div" appear={true}
                    timeout={0} enter={false} exit={false}>
                    <div>
                        <PageTitle
                        heading="Học phí"
                        icon="pe-7s-calculator icon-gradient bg-happy-itmeo" />
                        <Col lg="6">
        <div className="card2 mb-3 widget-chart">
          <div className="widget-chart-content">
            <div className="icon-wrapper rounded-circle">
              <div className="icon-wrapper-bg bg-dark" />
              <i className="pe-7s-calculator icon-gradient bg-happy-itmeo " />
            </div>
            <div className="average">{Tongconlai(0)}</div>
            <div className="textavg ">Học phí nợ</div>
            <div className="widget-description text-success"></div>
            <FontAwesomeIcon icon={faAngleUp} />
          </div>
          <div className="widget-chart-wrapper chart-wrapper-relative"></div>
        </div>
      </Col>
                        <div>
                        <FormGroup style={{display:'flex'}}>
                            <Label for="exampleSelect" style={{width: 'auto', padding: '6px 18px 0 0', fontWeight: 'bold', fontSize:'1rem'}}>Học kỳ</Label>
                                <Input type="select" name="select" id="exampleSelect"  style={{width: '94%'}} defaultValue={0}>
                                    <option value={0}>Tất cả</option>
                                    {toFindDuplicates(this.state.HocPhi).map((item) => (
              <>
                                <option value={item.hkten}>{item.hkten}</option>
              </>
            ))}
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