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
    Line,
    ResponsiveContainer,
    LineChart
} from 'recharts';

import {
    faAngleUp
} from '@fortawesome/free-solid-svg-icons';
const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    {name: 'Page C', uv: 2000, pv: 6800, amt: 2290},
    {name: 'Page D', uv: 4780, pv: 7908, amt: 2000},
    {name: 'Page E', uv: 2890, pv: 9800, amt: 2181},
    {name: 'Page F', uv: 1390, pv: 3800, amt: 1500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
const RegularTables = (props) => {
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
                            <Label for="exampleSelect" style={{width: 'auto', padding: '6px 18px 0 0', fontWeight: 'bold',lineHeight: '1.42857143;'}}>Học kỳ</Label>
                                <Input type="select" name="select" id="exampleSelect"  style={{width: '94.6%'}}>
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
                                            <CardTitle style={{color:'black', fontWeight: 'bold', fontSize:'20px'}} >BẢNG KÊ CHI TIẾT HỌC PHÍ</CardTitle>
                                            <TableHover />
                                        </CardBody>
                                    </Card>
                                    <Row style={{marginLeft:'auto'}}>
                                    <Card className="main-card mb-3" style={{width:'46%', marginRight:'36px', paddingLeft:'0', height:'250px'}}>
                                        <CardBody >
                                            <CardTitle style={{textTransform:'none', color:'red', fontSize:'20px'}}>Ghi chú:</CardTitle>
                                                <p style={{color:'black'}}> - Phần mềm tính học phí và hiển thị học phí của sinh viên (SV) đang trong thời gian chạy thử nghiệm. Phòng Đào tạo mong Quý Phụ huynh và SV thông cảm về những sai sót có thể phát sinh trong giai đoạn này.</p>
                                                <p style={{color:'black'}}> - SV đóng thừa học phí sẽ được cấn trừ vào học kỳ tiếp theo. Nếu vẫn còn thừa, sẽ được nhận lại sau khi nhận bằng tốt nghiệp khóa học.</p>
                                                <p style={{color:'black'}}> - SV có trách nhiệm tự kiểm tra học phí, khi có thắc mắc liên hệ số ĐT: 0353 4138 06 hoặc email: trangnguyen@vido.edu.vn</p>
                                        </CardBody>
                                    </Card>
                                    <Card className="main-card " style={{width:'50%', display:'flex', height:'auto'}}>
                                        <Row>
                                    <Col lg='4'>
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
                                                    <ResponsiveContainer height={100}>
                                                        <LineChart data={data}
                                                                margin={{top: 5, right: 5, left: 5, bottom: 0}}>
                                                            <Line type='monotone' dataKey='pv' stroke='#3ac47d'
                                                                strokeWidth={3}/>
                                                        </LineChart>
                                                    </ResponsiveContainer>
                                                </div>
                                            </div>
                                            </Col>
                                            <Col lg='4'>
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
                                                        Đã thanh toán
                                                    </div>
                                                    <div className="widget-description text-success">
                                                        <FontAwesomeIcon icon={faAngleUp}/>
                                                        <span className="ps-1">175.5%</span>
                                                    </div>
                                                </div>
                                                <div className="widget-chart-wrapper chart-wrapper-relative">
                                                    <ResponsiveContainer height={100}>
                                                        <LineChart data={data}
                                                                margin={{top: 5, right: 5, left: 5, bottom: 0}}>
                                                            <Line type='monotone' dataKey='pv' stroke='#3ac47d'
                                                                strokeWidth={3}/>
                                                        </LineChart>
                                                    </ResponsiveContainer>
                                                </div>
                                            </div>
                                            </Col>
                                            <Col lg='4' >
                                    <div className="card mb-3 widget-chart" style={{padding:'1rem 0 0 0',boxShadow:'none'}}>
                                                <div className="widget-chart-content" >
                                                    <div className="icon-wrapper rounded-circle">
                                                        <div className="icon-wrapper-bg bg-primary"/>
                                                        <i className="lnr-cog text-primary"/>
                                                    </div>
                                                    <div className="widget-numbers">
                                                        45.8k
                                                    </div>
                                                    <div className="widget-subheading">
                                                        Học phí nợ
                                                    </div>
                                                    <div className="widget-description text-success">
                                                        <FontAwesomeIcon icon={faAngleUp}/>
                                                        <span className="ps-1">175.5%</span>
                                                    </div>
                                                </div>
                                                <div className="widget-chart-wrapper chart-wrapper-relative">
                                                    <ResponsiveContainer height={100}>
                                                        <LineChart data={data}
                                                                margin={{top: 5, right: 5, left: 5, bottom: 0}}>
                                                            <Line type='monotone' dataKey='pv' stroke='#3ac47d'
                                                                strokeWidth={3}/>
                                                        </LineChart>
                                                    </ResponsiveContainer>
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

export default RegularTables;
