import React from "react";
import Highcharts from 'highcharts';
import PieChart from 'highcharts-react-official';
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
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
            name: 'My dataset',
            data: [
                {
                  name: 'Cars',
                  y: getRandomInt(50,200),
                  backgroundColor: '#8dace7',
                  hoverBackgroundColor:"#7097e1"
                },
                {
                  name: 'Trains',
                  y: getRandomInt(100,150),
                  backgroundColor: '#71deb9',
                  hoverBackgroundColor: "#4dd6a7"
                },
                {
                  name: 'Airplanes',
                  y: getRandomInt(150,250),
                  backgroundColor: '#ef869e',
                  hoverBackgroundColor: "#eb6886"
                }
            ]
        }]
}


class DynamicDoughnutExample extends React.Component {
  render() {
    return (
      <div>
        <PieChart highcharts={Highcharts} options={options} />
      </div>
    );
  }
}

export default DynamicDoughnutExample;
