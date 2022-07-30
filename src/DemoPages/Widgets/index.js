import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// Dashboard Widgets

import WidgetsChartBoxes from "./ChartBoxes/";

// Layout
import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import Register from "./Register";

const Widgets = ({ match }) => (
  <Fragment>
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          {/* Widgets */}

          <Route
            path={`${match.url}/dashboard-boxes`}
            component={WidgetsChartBoxes}
          />
          <Route path={`${match.url}/Register`} component={Register} />
        </div>
      </div>
    </div>
  </Fragment>
);

export default Widgets;
