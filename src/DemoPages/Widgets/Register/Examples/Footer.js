import React, {Fragment} from 'react';

class AppFooter extends React.Component {
    render() {


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
                                        Tổng số tín chỉ:
                                </li>
                                <li className="nav-item">
                                        Tổng số môn học:
                                </li>
                                </ul>
                        </div>
                        <div className="app-footer-right">
                            <ul className="nav">
                                <li className="nav-item">
                                        <div className="badge bg-success me-1 ms-0">
                                            <small>Icon giỏ hàng / Xem chi tiết</small>
                                        </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        )}
}

export default AppFooter;