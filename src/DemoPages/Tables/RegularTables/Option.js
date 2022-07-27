import React, {useEffect,useState} from 'react';
import {
    Row, Col,
    Card, CardBody,
    CardTitle,FormGroup,Label,Input
} from 'reactstrap';import PageTitle from '../../../Layout/AppMain/PageTitle';
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import TableHover from './Examples/TableHover';
import Chart from './Chart.js';
const Option = ({ item }) => {
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
    useEffect(() => setTerms(item), [item]);
    const [terms, setTerms] = useState([]);
    const changeSelect = (e) => {
        console.log(e.target.value);
        if (!+e.target.value) {
        setTerms(item);
        return;
        }
        setTerms(item.filter((item) => +item.hkma === +e.target.value));
    };
    const Tongconlai = (temp) => {
         for( let i of item){
                 temp += i.soTien;
        }
         return temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
     }
    return(
        <div>
        <PageTitle
        heading="Học phí"
        icon="pe-7s-calculator icon-gradient bg-happy-itmeo" />
<Col >
<div className="card2 mb-3 widget-chart">
<div className="widget-chart-content">
<div className="icon-wrapper rounded-circle">
<div className="icon-wrapper-bg bg-dark" />
<i className="pe-7s-calculator icon-gradient bg-happy-itmeo " />
</div>
<div className="average">{Tongconlai(0)}</div>
<div className="textavg ">Tổng học phí nợ</div>
<div className="widget-description text-success"></div>
<FontAwesomeIcon icon={faAngleUp} />
</div>
<div className="widget-chart-wrapper chart-wrapper-relative"></div>
</div>
</Col>
        <div>
        <FormGroup style={{display:'flex'}}>
            <Label for="exampleSelect" style={{width: 'auto', padding: '6px 18px 0 0', fontWeight: 'bold', fontSize:'1rem'}}>Học kỳ</Label>
                <Input type="select" name="select" id="exampleSelect"  style={{width: '94%'}} defaultValue={0} onChange={changeSelect}>
                    <option value={0}>Tất cả</option>
                    {toFindDuplicates(item).map((item) => (
<>
                <option  value={+item.hkma}>{item.hkten}</option>
</>
))}
                </Input>
        </FormGroup>
            <Row>
                <Col lg="13">
                    <Card className="main-card mb-3">
                        <CardBody>
                            <CardTitle style={{color:'rgb(169, 0, 1)', fontWeight: 'bold', fontSize:'20px'}} >BẢNG KÊ CHI TIẾT HỌC PHÍ</CardTitle>
                            <TableHover item={terms}  />
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
                        <Chart item={item}/>
                            </Col>
                            </Row>
                    </Card>
                    </Row>
                </Col>
            </Row>
        </div>
    </div>
    )
};
export default Option;