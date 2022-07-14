import React, {Fragment} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {
    Row, Col,
    Card, CardBody,
    CardTitle,FormGroup,Label,Input
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import TableHover from './Examples/TableHover';
import {
    ResponsiveContainer,
} from 'recharts';
import {Pie} from 'react-chartjs-2';

import {
    faAngleUp
} from '@fortawesome/free-solid-svg-icons';
import {Doughnut} from 'react-chartjs-2';

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
    labels: [
        'Cars',
        'Trains',
        'Airplanes'
    ],
    datasets: [{
        data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
        backgroundColor: [
            '#cbd5dc',
            '#71deb9',
            '#ef869e'
        ],
        hoverBackgroundColor: [
            '#7097e1',
            '#4dd6a7',
            '#eb6886'
        ]
    }]
});
export default class RegularTables extends React.Component {
    constructor() {
        super();
        this.state = {
          data: {
            labels: ["Đã thanh toán", "Học phí nợ"],
            datasets: [
              {
                data: [
                  200000000,
                  100000000,
                ],
                backgroundColor: ['#070597',"#9a0505"],
                hoverBackgroundColor: ['#070597ad', "#9a050591"],
              },
            ],
          },
          option:{
            plugins: {
                legend: {
                    display: true,
                }
            }
          }
        };
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
                                            <TableHover />
                                        </CardBody>
                                    </Card>
                                    <Row style={{marginLeft:'auto'}}>
                                    <Card className="main-card mb-3" style={{width:'46%', marginRight:'100px', paddingLeft:'0', height:'250px'}}>
                                        <CardBody >
                                            <CardTitle style={{textTransform:'none', color:'red', fontSize:'20px'}}>Ghi chú</CardTitle>
                                                <p style={{color:'black'}}> - Phần mềm tính học phí và hiển thị học phí của sinh viên (SV) đang trong thời gian chạy thử nghiệm. Phòng Đào tạo mong Quý Phụ huynh và SV thông cảm về những sai sót có thể phát sinh trong giai đoạn này.</p>
                                                <p style={{color:'black'}}> - SV đóng thừa học phí sẽ được cấn trừ vào học kỳ tiếp theo. Nếu vẫn còn thừa, sẽ được nhận lại sau khi nhận bằng tốt nghiệp khóa học.</p>
                                                <p style={{color:'black'}}> - SV có trách nhiệm tự kiểm tra học phí, khi có thắc mắc liên hệ số ĐT: 0353 4138 06 hoặc email: trangnguyen@vido.edu.vn</p>
                                        </CardBody>
                                    </Card>
                                    <Card className="main-card " style={{width:'40%', display:'flex', height:'auto'}}>
                                        <Row>
                                    <Col>
                                    <div className="card mb-3 widget-chart" style={{padding:'1rem 0 0 0',boxShadow:'none'}}>
                                                <div className="widget-chart-content">
                                                    <div className="icon-wrapper rounded-circle">
                                                        <div className="icon-wrapper-bg bg-primary"/>
                                                        <i className="lnr-cog text-primary"/>
                                                    </div>
                                                    <div className="widget-numbers">
                                                        45.8k
                                                    </div>
                                                    <div className="widget-subheading">
                                                        Học phí
                                                    </div>
                                                    <div className="widget-description text-success">
                                                        <FontAwesomeIcon icon={faAngleUp}/>
                                                        <span className="ps-1">175.5%</span>
                                                    </div>
                                                </div>
                                                <div className="widget-chart-wrapper chart-wrapper-relative">
                                                        <Doughnut data={this.state.data} width={600} height={250} options={{ maintainAspectRatio: false }}/>
                                                </div>
                                            </div>
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
