import React from "react";
import "./Register.css";
import "./RegisterContent.css";
import { CardTitle, Button } from "reactstrap";

const RegisterContent = ({ items }) => {
  // console.log(
  //   "itemss >> ",
  //   items.map((item) => item.mhten)
  // );
  return (
    <>
      <CardTitle>Môn học chờ đăng kí</CardTitle>
      <div className="container">
        <div className=" sm-gutter container-flow2-1">
          <div className="container__list-title">
            <Button color="success" className="  container__title-name">
              Trong kế hoạch
            </Button>
            <Button color="warning" className=" container__title-name">
              Học lại
            </Button>
            <Button color="warning" className="  container__title-name">
              Học vượt
            </Button>
          </div>
        </div>

        <div className="row sm-gutter container-flow2-2">
          <div className="col l-3">
            <div className="container__list">
              {items.map((item) => (
                <div className="contentsflow2">
                  <div className="Cart_Code">
                    <div className="Cart">
                      <i className="pe-7s-note2 icon-subject"></i>
                    </div>
                    <div className="Code">{item.mhten}</div>
                  </div>{" "}
                  {/* Cart_Code */}
                  <div className="Content">{`Mã môn học: ${item.mhma}`}</div>
                  <div className="address">{`Số tín chỉ:  ${item.mhsotc}`}</div>
                  <div className="Order_Info">
                    <div className="Customer_Infor">
                      <div className="Name">{`Giảng Viên: ${item.gvten}`} </div>
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
              ))}
            </div>
          </div>
        </div>
      </div>

      <Button
        className="btn-wide mb-2 me-2 check-result"
        size="lg"
        color="primary"
      >
        Xem kết quả
      </Button>
    </>
  );
};
export default RegisterContent;
