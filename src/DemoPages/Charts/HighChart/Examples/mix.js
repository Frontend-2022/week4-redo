import React from 'react';
import Highcharts from 'highcharts';
import LineChart from 'highcharts-react-official';

const initialState = {
  maintainAspectRatio: true,
  title: {
      text:''
  },
  chart: {
      type: "line",
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
      line: {
          dataLabels: {
              enabled: true,
          }
      },
      series: {
        fill: false,
      lineTension: 0.1,
      backgroundColor: '#ed0f51',
      borderColor: '#ed0f51',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#ed0f51',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 2,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: '#ed0f51',
      pointHoverBorderColor: '#ed0f51',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      }
    },
    series: [
      {
          name: 'My dataset',
        data: [65, 59, 80, 81, 56, 55, 40]
      },
  ],
    credits: {
      enabled: false
    }
}


// var createReactClass = require('create-react-class');

class Graph extends React.Component {
  UNSAFE_componentWillMount() {
    this.setState(initialState);
  }
  componentDidMount() {
    var _this = this;

    setInterval(function() {
      var oldDataSet = _this.state.series[0];
      var newData = [];

      for (var x = 0; x < _this.state.xAxis.categories.length; x++) {
        newData.push(Math.floor(Math.random() * 100));
      }

      var newDataSet = {
        ...oldDataSet,
      };

      newDataSet.data = newData;

      var newState = {
        ...initialState,
        series:[newDataSet]
      };

      _this.setState(newState);
    }, 5000);
  }
  render() {
    return <LineChart options={this.state} highcharts={Highcharts}/>;
  }
}

class MixExample extends React.Component {
  render() {
    return (
      <div>
        <Graph />
      </div>
    );
  }
}

export default MixExample;
