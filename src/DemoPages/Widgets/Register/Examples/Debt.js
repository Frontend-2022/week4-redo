import React, { useState } from "react";
import "./Register.css";
import "./RegisterContent.css";
import AppFooter from "./Footer";

const Debt = ({ items }) => {
  // console.log(
  //   "itemss >> ",
  //   items.map((item) => item.mhten)
  // );
  console.log(localStorage)
  const [quantity, Setquantity] = useState(JSON.parse(localStorage.getItem('quantity'))? JSON.parse(localStorage.getItem('quantity')):0);
  const [TC, Settc] = useState(JSON.parse(localStorage.getItem('TC'))? JSON.parse(localStorage.getItem('TC')):0);
  const [cart, Setcart] = useState(JSON.parse(localStorage.getItem('cart'))?JSON.parse(localStorage.getItem('cart')):[]);

  const HandleNum = (item) => {
    Setquantity(quantity + 1);
    Settc(TC + item.mhsotc);
  };
  console.log(cart)
  let l = document.getElementsByClassName("btn-toggle");
  const toggle = function () {
    let cb = this.parentNode.getElementsByClassName("btn-toggle1")[0];
    let cb1 = this.parentNode.getElementsByClassName("btn-toggle")[0];
    cb.style.opacity = 1;
    cb1.style.opacity = 0;
  };
  
  for (let j = l.length - 1; j >= 0; j--) {
    l[j].onclick = toggle;
  }

  const Handle = (item) => {
    HandleNum(item);
    Setcart(cart.concat(item));
    // setState(item);
  };
  
  return (
    <>
      <div className="container">
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
                        <button className="btn-toggle1">
                          <span>Chờ xác nhận</span>
                        </button>
                        <button
                          onClick={() => Handle(item)}
                          className="btn-toggle"
                        >
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
      <AppFooter quantity={quantity} tc={TC} cart={cart} />
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
export default Debt;
