import React from 'react';
import Highcharts from 'highcharts';
import PieChart from 'highcharts-react-official'


function Chart ({item}) {
    const Tonghocphi = (temp) => {
        for( let i of item){
            if(Math.sign(i.soTien)===1)
                temp += i.soTien;
        }
        return temp;
    }
    const Tongdadong = (temp) => {
        for( let i of item){
            if(Math.sign(i.soTien)===-1)
                temp += i.soTien;
        }

        return temp;
    }
    const Tongconlai = (temp) => {
        for( let i of item){
                temp += i.soTien;
        }
        return temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    const options = {
        title: {
            text:''
        },
        chart: {
            type: "column",
        },
        xAxis: {
            categories: ['Học phí '],
            labels: {
              enabled: true
            },
            title: {
                text: null
            }
          },
          yAxis: {
            title: {
                text: '',
            },
        },
          plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    formatter: function() {
                        return this.point.y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                    }
                }
            }
        },
        credits: {
                enabled: false
        },
        series: [{
                name:'Phát sinh',
                data: [
                    {
                      y: Tongdadong(0),
                      color: 'rgba(67,67,72,0.75)'
                    }
                ]
            },
            {
                name: 'Đã thanh toán',
                data: [
                    {
                      y: Tonghocphi(0)
                    }
                ]
            }
        ]
    }
    return (
        <div className="card mb-3 widget-chart" style={{padding:'1rem 0 0 0',boxShadow:'none'}}>
                                                <div className="widget-chart-content">
                                                    <div className="icon-wrapper rounded-circle">
                                                        <div className="icon-wrapper-bg bg-primary"/>
                                                        <i className="lnr-cog text-primary"/>
                                                    </div>
                                                    <div className="widget-numbers">
                                                        {Tongconlai(0)}
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