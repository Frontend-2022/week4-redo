import React from 'react';
import Highcharts from 'highcharts';
import LineChart from 'highcharts-react-official';
const options = {
  maintainAspectRatio: true,
  title: {
      text:''
  },
  chart: {
    
      type: "area",
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
        area: {
            dataLabels: {
                enabled: true,
            }
        },
      series: {
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
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


class LineExample2 extends React.Component {

    render() {
        return (
            <div>
              <LineChart highcharts={Highcharts}
                    options={options} />
            </div>
        )
    }
}

export default LineExample2;
