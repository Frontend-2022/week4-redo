import React from "react";
import "./Register.css";
import "./RegisterContent.css";
import { CardTitle, Button } from "reactstrap";
import AppFooter from './Footer';
const RegisterContent = () => {
  return (
    <>
      <CardTitle>Môn học chờ đăng kí</CardTitle>
      <div className="container">
        <div className="row sm-gutter container-flow2-1">
          <div className="col l-3">
            <div className="container__list-title">
              <span className="container__title-name">Trong kế hoạch</span>
              <span className="container__title-number">6 môn</span>
            </div>
          </div>
          <div className="col l-3">
            <div className="container__list-title">
              <span className="container__title-name">Học vượt</span>
              <span className="container__title-number">1 môn</span>
            </div>
          </div>
          <div className="col l-3">
            <div className="container__list-title">
              <span className="container__title-name">Học lại</span>
              <span className="container__title-number">1 môn</span>
            </div>
          </div>
        </div>

        <div className="row sm-gutter container-flow2-2">
          <div className="col l-3">
            <div className="container__list">
              <div className="contentsflow2">
                <div className="Cart_Code">
                  <div className="Cart">
                    {" "}
                    <i className="pe-7s-note2 icon-subject"></i>
                  </div>
                  <div className="Code">Nguyên lý lập trình</div>
                </div>{" "}
                {/* Cart_Code */}
                <div className="Content">Mã môn học: </div>
                <div className="address">Số Tín chỉ: </div>
                <div className="Order_Info">
                  <div className="Customer_Infor">
                    <div className="Name">Giảng Viên: </div>
                  </div>
                  <div className="Datetime">Tình trạng:</div>

                  <div className="price-toggle">
                    <div className="toggle">
                      <button className="btn-toggle">
                        <i className="pe-7s-angle-up-circle icon-toggle"></i>
                        <span>Đăng ký</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contentsflow2">
                <div className="Cart_Code">
                  <div className="Cart">
                    {" "}
                    <i className="pe-7s-note2 icon-subject"></i>
                  </div>
                  <div className="Code">Nguyên lý lập trình</div>
                </div>{" "}
                {/* Cart_Code */}
                <div className="Content">Mã môn học: </div>
                <div className="address">Số Tín chỉ: </div>
                <div className="Order_Info">
                  <div className="Customer_Infor">
                    <div className="Name">Giảng Viên: </div>
                  </div>
                  <div className="Datetime">Tình trạng:</div>

                  <div className="price-toggle">
                    <div className="toggle">
                      <button className="btn-toggle">
                        <i className="pe-7s-angle-up-circle icon-toggle"></i>
                        <span>Đăng ký</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contentsflow2">
                <div className="Cart_Code">
                  <div className="Cart">
                    {" "}
                    <i className="pe-7s-note2 icon-subject"></i>
                  </div>
                  <div className="Code">Nguyên lý lập trình</div>
                </div>{" "}
                {/* Cart_Code */}
                <div className="Content">Mã môn học: </div>
                <div className="address">Số Tín chỉ: </div>
                <div className="Order_Info">
                  <div className="Customer_Infor">
                    <div className="Name">Giảng Viên: </div>
                  </div>
                  <div className="Datetime">Tình trạng:</div>

                  <div className="price-toggle">
                    <div className="toggle">
                      <button className="btn-toggle">
                        <i className="pe-7s-angle-up-circle icon-toggle"></i>
                        <span>Đăng ký</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col l-3">
            <div className="container__list">
              <div className="container__list">
                <div className="contentsflow2">
                  <div className="Cart_Code">
                    <div className="Cart">
                      {" "}
                      <i className="pe-7s-note2 icon-subject"></i>
                    </div>
                    <div className="Code">Nguyên lý lập trình</div>
                  </div>{" "}
                  {/* Cart_Code */}
                  <div className="Content">Mã môn học: </div>
                  <div className="address">Số Tín chỉ: </div>
                  <div className="Order_Info">
                    <div className="Customer_Infor">
                      <div className="Name">Giảng Viên: </div>
                    </div>
                    <div className="Datetime">Tình trạng:</div>

                    <div className="price-toggle">
                      <div className="toggle">
                        <button className="btn-toggle">
                          <i className="pe-7s-angle-up-circle icon-toggle"></i>
                          <span>Đăng ký</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col l-3">
            <div className="container__list">
              <div className="container__list">
                <div className="contentsflow2">
                  <div className="Cart_Code">
                    <div className="Cart">
                      {" "}
                      <i className="pe-7s-note2 icon-subject"></i>
                    </div>
                    <div className="Code">Nguyên lý lập trình</div>
                  </div>{" "}
                  {/* Cart_Code */}
                  <div className="Content">Mã môn học: </div>
                  <div className="address">Số Tín chỉ: </div>
                  <div className="Order_Info">
                    <div className="Customer_Infor">
                      <div className="Name">Giảng Viên: </div>
                    </div>
                    <div className="Datetime">Tình trạng:</div>

                    <div className="price-toggle">
                      <div className="toggle">
                        <button className="btn-toggle">
                          <i className="pe-7s-angle-up-circle icon-toggle"></i>
                          <span>Đăng ký</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<AppFooter/>
      {/* <Button
        className="btn-wide mb-2 me-2 check-result"
        size="lg"
        color="primary"
      >
        Xem kết quả
      </Button> */}
    </>
  );
};
export default RegisterContent;
