import React from 'react';
import Highcharts from 'highcharts';
import BarChart from 'highcharts-react-official'
const options = {
    maintainAspectRatio: true,
    tooltip: {
        valueSuffix: ' millions'
    },
    title: {
        text:''
    },
    chart: {
        type: "column",
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: 10,
        y: 50,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    xAxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        labels: {
          enabled: true
        },
        title: {
            text: null
        }
      },
      yAxis: {
        min: 0,
        title: {
            text: '',
        },
        labels: {
            overflow: 'justify'
        }
      },
      plotOptions: {
        column: {
            dataLabels: {
                enabled: true,
            }
        },
        series: {
          backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        borderCapStyle: 'round',
        }
      },
      series: [
        {
            name: 'My first dataset',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            name: 'My second dataset',
          data: [40, 50, 60, 70, 80, 30, 10]
        },
    ],
      credits: {
        enabled: false
      }
}

class BarExample extends React.Component {

    render() {
        return (
            <div>
                <BarChart
                    highcharts={Highcharts}
                    options={options}
                />
            </div>
        )
    }
}

export default BarExample;