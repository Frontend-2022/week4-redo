import React from 'react';
import Highcharts from 'highcharts';

export default class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                name: 'Số tiền',
                data: [
                    {
                      name: 'Đã thanh toán',
                      y: 20000000,
                      color: '#2ecc71'
                    },
                    {
                      name: 'Học phí nợ',
                      y: 1000000,
                      color: '#f1c40f'
                    }
                ]
            }]
        }
    }

    highChartsRender() {
        Highcharts.chart({
            tooltip: { enabled: false },
            chart: {
              type: 'pie',
              renderTo: 'pie',
              height: '310px',
            },
            title: {
              text:''
            },
            plotOptions: {
              pie: {
                dataLabels: {
                    format: '{point.name}: {y}đ'
                },
                innerSize: '60%'
              }
            },
            credits: {
                enabled: false
            },
            accessibility: {
                enabled: false
            },
            series: this.state.series
        });
    }

    componentDidMount() {
        this.highChartsRender();
    }
    render() {
        return (
            <div className="widget-chart-wrapper chart-wrapper-relative"  id='pie'></div>
        )
    }
}