import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// Tables

import RegularTables from './RegularTables';

// Layout

import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';

const Tables = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">

                    {/* Tables */}

                    <Route path={`${match.url}/học-phí`} component={RegularTables}/>
                </div>
            </div>
        </div>
    </Fragment>
);

export default Tables;