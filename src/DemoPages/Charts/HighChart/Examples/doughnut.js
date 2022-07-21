import React from "react";
import Highcharts from 'highcharts';
import PieChart from 'highcharts-react-official';
const options = {
   maintainAspectRatio: false ,
    title: {
        text:''
    },
    chart: {
        type: "pie",
    },
    plotOptions: {
      pie: {
                dataLabels: {
                    format: '{point.name}:  {y}'
                   },
                   innerSize: '60%'
                }
               },
               credits: {
                            enabled: false
                        },
    series: [{
            name: '',
            data: [
                {
                  name: 'Cars',
                  y: 300,
                  backgroundColor: '#8dace7',
                  hoverBackgroundColor:"#7097e1"
                },
                {
                  name: 'Trains',
                  y: 50,
                  backgroundColor: '#71deb9',
                  hoverBackgroundColor: "#4dd6a7"
                },
                {
                  name: 'Airplanes',
                  y: 100,
                  backgroundColor: '#ef869e',
                  hoverBackgroundColor: "#eb6886"
                }
            ]
        }]
}


class DoughnutExample extends React.Component {
  render() {
    return (
      <div>
        <PieChart highcharts={Highcharts} options={options} />
      </div>
    );
  }
}

export default DoughnutExample;
