import React from "react";
import { Link } from "react-router-dom";
import "./schedule.css";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import {
    Alert,
    Row, Col,
    Card, CardBody,
    CardTitle,
    FormGroup, Label, Input
} from 'reactstrap';
import TableBordered from "./table-schedule/table-border";
import FormSchedule from "./index";
import { DateRangePicker } from 'rsuite';

function Schedule() {

    return (
        <div className="scheduleCSS">
            <FormSchedule />

            <div className="schedule__student">
                <span>Nguyễn Đức Tiến - MSSV: 1812020001 - Lớp : 12ĐHC - Ngành : THIẾT KẾ ĐỒ HỌA</span>
            </div>

            <div className="schedule__contents">
                <div className="schedule__contents-name">
                    <span>THỜI KHÓA BIỂU THEO TUẦN HỌC KỲ HÈ, 2021 - 2022 <br />TUẦN 3 ( 04/07/2022 - 10/07/2022 )</span>
                </div>

                <div className="schedule__header">
                    {/* <div className="schedule__header-button">
                        <BsFillCaretLeftFill />
                    </div> */}
                    <span className="schedule__header-form--title">Xem TKB theo tuần học</span>
                    
                    <div className="schedule__header-form">
                        <DateRangePicker appearance="subtle" placeholder="Subtle" style={{ width: 230 }} />
                        {/* <FormGroup>
                            <Input type="select" name="select" id="exampleSelect" >
                                <option >from <span >xx/yy/zzzz</span> to <span >xx/yy/zzzz</span></option>
                                <option >from <span >xx/yy/zzzz</span> to <span >xx/yy/zzzz</span></option>
                                <option >from <span >xx/yy/zzzz</span> to <span >xx/yy/zzzz</span></option>
                                <option >from <span >xx/yy/zzzz</span> to <span >xx/yy/zzzz</span></option>
                                <option >from <span >xx/yy/zzzz1</span> to <span >xx/yy/zzzz1</span></option>
                            </Input>
                        </FormGroup> */}
                    </div>
                    {/* <div className="schedule__header-button">
                        <BsFillCaretRightFill />
                    </div> */}
                </div>

                <div className="schedule__contents-table">
                    <Card className="main-card mb-0">
                        <CardBody>
                            <TableBordered />
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