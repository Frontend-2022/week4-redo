import React, {useEffect,useState} from "react";
import "./RegisterHeader.css";
import { CardTitle } from "reactstrap";
import RegisterContent from "./RegisterContent";
import ChooseTabs from "./ChooseTabs";
import Debt from "./Debt";
import MoreSubject from "./MoreSubjects";
const RegisterHeader = ({ items,reg,debt,sub }) => {
  useEffect(() => setTerms(items), [items]);
const [terms, setTerms] = useState([]);
const changeSelect = (e) => {
    if (!+e.target.value) {
    setTerms(reg);
    return;
    }
    setTerms(reg.filter((item) => +item.id === +e.target.value));
};
console.log(items)
  return (
    <>
      <form className="register-header">
        <div className="register-header-child">
          <div>
            <div className="choose-term">
              <div style={{ textAlign: "center" }}>Chọn học kì</div>
              <select className="slec" onChange={changeSelect}>
              {items.map((item) => (
                <>
                <option  value={+item.id}>{item.ten}</option>
</>
              ))}
              </select>
            </div>
          </div>
          <div>
            <div className="choose-term">
              <div style={{ textAlign: "center" }}>Chọn đợt đăng kí</div>
              <select className="slec">
                <option>Đợt đăng kí mới</option>
              </select>
            </div>
          </div>
        </div>
        <div className="divider" />
      </form>
      <CardTitle>Môn học chờ đăng kí</CardTitle>
    <ChooseTabs>
    <div label="Trong kế hoạch">
      <RegisterContent items={reg} />
    </div>
    <div label="Học lại">
      <Debt items={debt} />
    </div>
    <div label="Học vượt">
      <MoreSubject items={sub} />
    </div>
  </ChooseTabs>
  </>
  );
};
export default RegisterHeader;
