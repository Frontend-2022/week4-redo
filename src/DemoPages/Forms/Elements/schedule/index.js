import React, {Fragment} from 'react'

import Tabs from 'react-responsive-tabs';

import PageTitle from '../../../../Layout/AppMain/PageTitle';

// Examples

// import FormsFeedback from './Examples/Feedback';

// const tabsContent = [
//     {
//         title: 'Feedback',
//         content: <FormsFeedback/>
//     },

// ];

// function getTabs() {
//     return tabsContent.map((tab, index) => ({
//         title: tab.title,
//         getContent: () => tab.content,
//         key: index,
//     }));
// }

class FormSchedule extends React.Component {

    render() {
        return (
            <Fragment>
                <PageTitle
                    heading="Thời khoá biểu"
                    subheading=""
                    icon="lnr-calendar-full"
                />
                {/* <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/> */}
            </Fragment>
        )
    }
}

export default FormSchedule;



