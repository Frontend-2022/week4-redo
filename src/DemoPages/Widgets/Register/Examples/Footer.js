import React, {Fragment} from 'react';
import { Button } from 'reactstrap';

const AppFooter = ({ quantity,tc}) => {


        return (
            <Fragment>
                <div className="app-footer">
                    <div className="app-footer__inner">
                        <div className="app-footer-left">
                            <ul className="nav">
                                <li className="nav-item" style={{marginRight:'30px'}}>
                                        Kết quả đăng ký
                                </li>
                           
                                <li className="nav-item" style={{marginRight:'30px'}}>
                                        Tổng số tín chỉ: {tc}
                                </li>
                                <li className="nav-item">
                                        Tổng số môn học: {quantity}
                                </li>
                                </ul>
                        </div>
                        <div className="app-footer-right">
                            <ul className="nav">
                                <li className="nav-item">
                                        <div className="badge bg-success me-1 ms-0">
                                            <Button>Icon giỏ hàng / Xem chi tiết</Button>
                                        </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
}

export default AppFooter;