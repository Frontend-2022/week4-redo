import React from 'react';
import Highcharts from 'highcharts';
import PieChart from 'highcharts-react-official'

const Chart = () =>{
    const options = {
        tooltip: { enabled: false },
        title: {
            text:''
        },
        chart: {
            type: "pie",
            renderTo: 'pie',
         height: '310px',
        },
        plotOptions: {
                      pie: {
                        dataLabels: {
                        format: '{point.name}:  {y}đ'
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

    // highChartsRender() {
    //     Highcharts.chart({
    //         tooltip: { enabled: false },
    //         chart: {
    //           type: 'pie',
    //           renderTo: 'pie',
    //           height: '310px',
    //         },
    //         title: {
    //           text:''
    //         },
    //         plotOptions: {
    //           pie: {
    //             dataLabels: {
    //                 format: '{point.name}: {y}đ'
    //             },
    //             innerSize: '60%'
    //           }
    //         },
    //         credits: {
    //             enabled: false
    //         },
    //         accessibility: {
    //             enabled: false
    //         },
    //         series: this.state.series
    //     });
    // }

    return (
        <div className="card mb-3 widget-chart" style={{padding:'1rem 0 0 0',boxShadow:'none'}}>
                                                <div className="widget-chart-content">
                                                    <div className="icon-wrapper rounded-circle">
                                                        <div className="icon-wrapper-bg bg-primary"/>
                                                        <i className="lnr-cog text-primary"/>
                                                    </div>
                                                    <div className="widget-numbers">
                                                        45.8k
                                                    </div>
                                                    <div className="widget-subheading">
                                                        Học phí
                                                    </div>
                                                </div>
                        
                                     
            <div className="widget-chart-wrapper chart-wrapper-relative">
                <PieChart
                    highcharts={Highcharts}
                    options={options}
  />
            </div>
            </div>
        )
    }
export default Chart;