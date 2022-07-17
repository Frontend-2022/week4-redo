import React, {Fragment} from 'react';
import Tabs from 'react-responsive-tabs';
import PageTitle from '../../../Layout/AppMain/PageTitle';
import Transcript from './Examples/Transcript';
import LineChartTranscript from './Examples/LineChartTranscript';
const tabsContent = [

    {
        title: 'Điểm',
        content: <Transcript/>
    },
    //  {
    //     title: 'Biểu đồ',
    //     content: <LineChartTranscript/>
    // },
];

function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}

export default class WidgetsChartBoxes extends React.Component {

    render() {

        return (
            <Fragment>
                <PageTitle
                    heading="Kết quả học tập"
                    // subheading="These boxes can be used to show numbers and data in a breautiful user friendly way."
                    icon="lnr-graduation-hat icon-gradient bg-happy-itmeo"
                />
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
            </Fragment>
        );
    }
}