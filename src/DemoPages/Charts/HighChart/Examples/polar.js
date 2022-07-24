import React from 'react';
import Highcharts from 'highcharts';
import PolarChart  from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highcharts)
const options = {
  chart: {
    polar: true,
    type: 'column'
},

title: {
    text: ''
},

subtitle: {
    text: ''
},

pane: {
    startAngle: 0,
    endAngle: 360
},
legend:{
  enabled: false
},
xAxis: {
    tickInterval: 72,
    min: 0,
    max: 360,
    labels: {
        format: '{value}°'
    }
},

yAxis: {
    min: 0
},

plotOptions: {
    series: {
        pointStart: 0,
        pointInterval: 72
    },
    column: {
      pointPadding: 0,
      groupPadding: 0,
    }
},

series: [{
  name:'My dataset',
  data: [
    {y:11,
    color: '#8dace7',
    name: 'Red'
    },
    {y:16,
    color: '##4BC0C0',
    name: 'Green'
    },
    {y:7,
    color: '#ef869e',
    name: 'Yellow'
    },
    {y:3,
    color: '#E7E9ED',
    name: 'Grey'
    },
    {y:14,
    color: '#71deb9',
    name: 'Blue'
    }
  ],
  pointPlacement: 'between'
}],
labels: [
  'Red',
  'Green',
  'Yellow',
  'Grey',
  'Blue'
]
}

class PolarExample extends React.Component {

    render() {
        return (
            <div>
              <PolarChart options={options} highcharts={Highcharts} />
            </div>
        )
    }
}

export default PolarExample;