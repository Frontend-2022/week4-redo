import React, { Component, useEffect, useState} from "react";
import { Table } from 'reactstrap';
import "./table-border.css";
import "./schedule.css";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import {
    Alert,
    Row, Col,
    Card, CardBody,
    CardTitle,
    FormGroup, Label, Input
} from 'reactstrap';
import FormSchedule from "./index";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import axios from 'axios';

function Schedule() {

    // state = {
    //     schedule: []
    // }
    // async componentDidMount() {
    //     // Get items from database
    //     let res = await axios.get('http://ims-api.viendong.edu.vn/api/beta/hocvien/tkbtheongay', {
    //         headers: {
    //             "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU2NjQsImhvY3ZpZW5pZCI6MTc4ODMsImdpYW5ndmllbmlkIjpudWxsLCJ1c2VyaWQiOiIyMDA1MDIwMDI5IiwicGFzcyI6IjEyMzQ1NiIsImhvY1ZpZW5JZCI6MTc4ODMsImhvY1ZpZW4iOnsiaWQiOjE3ODgzLCJtc2h2IjoiMjAwNTAyMDAyOSIsImhvIjoiVGjDoWkgVGjhu4sgS2ltIiwidGVuIjoiTmfDom4iLCJoaW5oYW5oIjpudWxsLCJtYWxvcCI6IjE0S1RDIiwibmFtbmhhcGhvYyI6MjAyMCwia2hvYWhvYyI6MTQsImdoaWNodSI6Ik5oYXAgdHUgZmlsZSBleGNlbCBEU1NWX0sxNC54bHMiLCJuZ2F5bGFwIjoiMjAyMS0wMS0yOVQxNjoyMjowMC4wMDBaIiwibWF0cmFuZ3RoYWkiOm51bGwsIm5nYXlzaW5oIjoiMjAwMi0wMi0xM1QwMDowMDowMC4wMDBaIiwiZW1haWwiOm51bGwsInNkdCI6IjA4OTgyODAzNzQiLCJjbW5kIjoiMzAxNzk2Mjc3IiwiZ2lvaXRpbmgiOm51bGwsIm5vaXNpbmgiOm51bGwsImtob2luZ2FuaGlkIjo1Njh9LCJnaWFuZ1ZpZW4iOm51bGwsImlhdCI6MTY1NzY4Nzc3MH0.w9lduwIS3ULlyKaPvaQisrI9_TMF2xj918JpGp_Wauo"
    //         }
    //     })

    //     this.setState({ schedule: res && res.data && res.data.data ? res.data.data : [] })
    // };
    
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        axios.get(
            "http://ims-api.viendong.edu.vn/api/beta/hocvien/tkbtheongay?ngay=2021-11-20",
            {
                headers: {
                token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU2NjQsImhvY3ZpZW5pZCI6MTc4ODMsImdpYW5ndmllbmlkIjpudWxsLCJ1c2VyaWQiOiIyMDA1MDIwMDI5IiwicGFzcyI6IjEyMzQ1NiIsImhvY1ZpZW5JZCI6MTc4ODMsImhvY1ZpZW4iOnsiaWQiOjE3ODgzLCJtc2h2IjoiMjAwNTAyMDAyOSIsImhvIjoiVGjDoWkgVGjhu4sgS2ltIiwidGVuIjoiTmfDom4iLCJoaW5oYW5oIjpudWxsLCJtYWxvcCI6IjE0S1RDIiwibmFtbmhhcGhvYyI6MjAyMCwia2hvYWhvYyI6MTQsImdoaWNodSI6Ik5oYXAgdHUgZmlsZSBleGNlbCBEU1NWX0sxNC54bHMiLCJuZ2F5bGFwIjoiMjAyMS0wMS0yOVQxNjoyMjowMC4wMDBaIiwibWF0cmFuZ3RoYWkiOm51bGwsIm5nYXlzaW5oIjoiMjAwMi0wMi0xM1QwMDowMDowMC4wMDBaIiwiZW1haWwiOm51bGwsInNkdCI6IjA4OTgyODAzNzQiLCJjbW5kIjoiMzAxNzk2Mjc3IiwiZ2lvaXRpbmgiOm51bGwsIm5vaXNpbmgiOm51bGwsImtob2luZ2FuaGlkIjo1Njh9LCJnaWFuZ1ZpZW4iOm51bGwsImlhdCI6MTY1Nzk1MTYyOX0.MC_ezgd5xPIax_h6c0xEhjrqppvQ88ZlxnNz4Z6MMsk",
                },
            }
        )
            .then(res => {
                console.log(res.data)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    // let arrPost = posts.map((post)=> post.data);

    const InforPosts = (temp) => {
        var namePost = [];
        for(var i = 0, l = temp.length; i < l; i++) {
            namePost.push(temp[i]);
        }
        return namePost;
    }
    
    const handleApply = (event, picker) => {
        picker.element.val(
            picker.startDate.day(0).format('DD/MM/YYYY') +
            ' - ' +
            picker.startDate.day(6).format('DD/MM/YYYY')
            );
        };
        const handleCancel = (event, picker) => {
            picker.element.val('');
        };
    
        const [state1, setState1] = useState();
        const handleCallback = (start, end) => {
            setState1({ start, end });
        };    
        
    return (
        
        <div className="scheduleCSS">
            <FormSchedule />

            <div className="schedule__student">
                <span>Nguyễn Đức Tiến - MSSV: 1812020001 - Lớp : 12ĐHC - Ngành : THIẾT KẾ ĐỒ HỌA</span>
                <br/> 
                <>
                    {InforPosts(posts).map((post)=>(
                        <div>{post.data}</div>
                    ))}
                </>
            </div>

            <div className="schedule__contents">
                <div className="schedule__contents-name">
                    <span>THỜI KHÓA BIỂU THEO TUẦN HỌC KỲ HÈ, 2021 - 2022 <br />(<small>{state1?.start?.day(0).format('DD/MM/YYYY')}</small> - <small>{state1?.start?.day(6).format('DD/MM/YYYY')}</small>)</span>
                </div>

                <div className="schedule__header">
                    <span className="schedule__header-form--title">Xem TKB theo tuần học</span>
                    <div className="schedule__header-button">
                        <BsFillCaretLeftFill />
                    </div>

                    <div className="schedule__header-form">
                        <DateRangePicker
                            initialSettings={{
                                autoUpdateInput: false,
                                locale: {
                                    cancelLabel: 'Clear',
                                },
                            }}
                            onApply={handleApply}
                            onCancel={handleCancel}
                            onCallback={handleCallback}
                        >
                            <input type="text" className="form-control col-4" defaultValue="" />
                        </DateRangePicker>
                    </div>
                    <div className="schedule__header-button">
                        <BsFillCaretRightFill />
                    </div>
                </div>

                <div className="schedule__contents-table">
                    <Card className="main-card mb-0">
                        <CardBody>
                            <Table className="mb-0" bordered>
                                <thead className='thead-style'>
                                    <tr className='tr-style'>
                                        <th className='th-style'>Buổi</th>
                                        <th className='th-style'>Tiết</th>
                                        <th className='th-style'>
                                            Chủ nhật <br />
                                            <small>{state1?.start?.day(0).format('DD/MM/YYYY')}</small>
                                        </th>
                                        <th className='th-style'>
                                            Thứ 2 <br />
                                            <small>{state1?.start?.day(1).format('DD/MM/YYYY')}</small>
                                        </th>
                                        <th className='th-style'>
                                            Thứ 3 <br />
                                            <small>{state1?.start?.day(2).format('DD/MM/YYYY')}</small>
                                        </th>
                                        <th className='th-style'>
                                            Thứ 4 <br />
                                            <small>{state1?.start?.day(3).format('DD/MM/YYYY')}</small>
                                        </th>
                                        <th className='th-style'>
                                            Thứ 5 <br />
                                            <small>{state1?.start?.day(4).format('DD/MM/YYYY')}</small>
                                        </th>
                                        <th className='th-style'>
                                            Thứ 6 <br />
                                            <small>{state1?.start?.day(5).format('DD/MM/YYYY')}</small>
                                        </th>
                                        <th className='th-style'>
                                            Thứ 7 <br />
                                            <small>{state1?.start?.day(6).format('DD/MM/YYYY')}</small>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='tbody-style'>
                                    <tr>
                                        <th style={{ backgroundColor: '#699066' }} className='th-style' rowspan="6" scope="row">Sáng</th>
                                        <th style={{ backgroundColor: '#699066' }} className='th-style' scope="row">Tiết 1 <br /> 06:40 - 07:30</th>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                    </tr>
                                    <tr>
                                        <th style={{ backgroundColor: '#699066' }} className='th-style' scope="row">Tiết 2 <br /> 07:30 - 08:15</th>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                    </tr>
                                    <tr>
                                        <th style={{ backgroundColor: '#699066' }} className='th-style' scope="row">Tiết 3 <br /> 8:15 - 9:00</th>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                    </tr>
                                    <tr>
                                        <th style={{ backgroundColor: '#699066' }} className='th-style' scope="row">Tiết 4 <br /> 9:00 - 9:45</th>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                    </tr>
                                    <tr>
                                        <th style={{ backgroundColor: '#699066' }} className='th-style' scope="row">Tiết 5 <br />10:00 - 10:45</th>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                    </tr>
                                    <tr>
                                        <th style={{ backgroundColor: '#699066' }} className='th-style' scope="row">Tiết 6 <br /> 10:45 - 11:30</th>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                    </tr>
                                    <tr>
                                        <th style={{ backgroundColor: '#699066' }} className='th-style' rowspan="6" scope="row">Chiều</th>
                                        <th style={{ backgroundColor: '#699066' }} className='th-style' scope="row">Tiết 7 <br /> 13:00 - 13:50</th>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'>

                                        </td>
                                    </tr>
                                    <tr>
                                        <th style={{ backgroundColor: '#699066' }} className='th-style' scope="row">Tiết 8 <br /> 13:50 - 14:40</th>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                    </tr>
                                    <tr>
                                        <th style={{ backgroundColor: '#699066' }} className='th-style' scope="row">Tiết 9 <br /> 14:45 - 15:35</th>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                    </tr>
                                    <tr>
                                        <th style={{ backgroundColor: '#699066' }} className='th-style' scope="row">Tiết 10 <br /> 15:45 - 16:35</th>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                    </tr>
                                    <tr>
                                        <th style={{ backgroundColor: '#699066' }} className='th-style' scope="row">Tiết 11 <br /> 16:35 - 17:25</th>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                    </tr>
                                    <tr>
                                        <th style={{ backgroundColor: '#699066' }} className='th-style' scope="row">Tiết 12 <br /> 17:25 - 18:15</th>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                    </tr>
                                    <tr>
                                        <th style={{ backgroundColor: '#699066' }} className='th-style' rowspan="4" scope="row">Tối</th>
                                        <th style={{ backgroundColor: '#699066' }} className='th-style' scope="row">Tiết 13 <br /> 18:15 - 19:05</th>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                    </tr>
                                    <tr>
                                        <th style={{ backgroundColor: '#699066' }} className='th-style' scope="row">Tiết 14 <br /> 19:05 - 19:55</th>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                    </tr>
                                    <tr>
                                        <th style={{ backgroundColor: '#699066' }} className='th-style' scope="row">Tiết 15 <br /> 19:55 - 20:45</th>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                    </tr>
                                    <tr>
                                        <th style={{ backgroundColor: '#699066' }} className='th-style' scope="row">Tiết 16 <br /> 20:45 - 21:35</th>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                        <td className='td-style'></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <Alert color="warning" className="schedule__note">
                <span className="schedule__note-title">Ghi chú:</span> <br />
                <span className="schedule__note-contents">
                    - Hai môn học trùng giờ học nhưng có ngày bắt đầu khác nhau thì Sinh viên vẫn học được. <br />
                    - Học kỳ Hè năm học 2021 - 2022 có tuần 1 bắt đầu từ ngày 20/06/2022.<br />
                    - Sinh viên chú ý điều chỉnh mốc thời gian hiển thị khi xem lịch học và lịch thi.<br />
                    - Lưu ý cập nhật các môn chưa có lịch học thường xuyên trên trang cá nhân.<br />
                    - Những vấn đề thắc mắc sinh viên liên hệ với Phòng Đào tạo qua các phương thức sau:<br />
                    Cách 1: Đăng ký giải đáp thắc mắc, lên lịch hẹn qua website www.viendong.edu.vn<br />
                    Cách 2: Điện thoại trong giờ hành chính 028 3715 4288;<br />
                    Cách 3: Liên hệ trực tiếp với Phòng Đào Tạo (tầng 1) hoặc qua email: pdt@vido.edu.vn;
                </span>
            </Alert>

        </div>  
        
    )
}

export default Schedule;