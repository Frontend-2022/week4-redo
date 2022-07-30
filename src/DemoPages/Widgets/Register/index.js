import React, { Fragment } from "react";
import Tabs from "react-responsive-tabs";
import PageTitle from "../../../Layout/AppMain/PageTitle";
import RegisterCoures from "./Examples/RegisterCourse";
import Result from "./Examples/Result";
const tabsContent = [
  {
    title: "Đăng kí học phần",
    content: <RegisterCoures />,
  },
  {
    title: "Kết quả đăng kí",
    content: <Result />,
  },
];

function getTabs() {
  return tabsContent.map((tab, index) => ({
    title: tab.title,
    getContent: () => tab.content,
    key: index,
  }));
}

export default class Register extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          heading="Đăng kí học phần"
          icon="pe-7s-key icon-gradient bg-happy-itmeo"
        />
        <Tabs
          tabsWrapperClass="body-tabs body-tabs-layout"
          transform={false}
          showInkBar={true}
          items={getTabs()}
        />
      </Fragment>
    );
  }
}
