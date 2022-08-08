import React, { Fragment } from "react";

import PageTitle from "../../../Layout/AppMain/PageTitle";
import RegisterCoures from "./Examples/RegisterCourse";

export default class Register extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle
          heading="Đăng kí học phần"
          icon="pe-7s-key icon-gradient bg-happy-itmeo"
        />
        <RegisterCoures />
      </Fragment>
    );
  }
}
