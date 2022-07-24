import React from 'react';
import Highcharts from 'highcharts';
import PolarChart  from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highcharts)
const options = {
  chart: {
    polar: true,
    type: 'area'
},

title: {
    text: ''
},

subtitle: {
    text: ''
},

pane: {
    size: '90%'
},
xAxis: {
  categories: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
tickmarkPlacement: 'on',
lineWidth: 0
},

yAxis: {
  gridLineInterpolation: 'polygon',
  lineWidth: 0,
  min: 0
},


series: [{
  name:'My first dataset',
  data: [
   65, 59, 90, 81, 56, 55,40
  ],
  pointPlacement: 'on'
},{
  name:'My second dataset',
  data: [
    28, 48, 40, 19, 96, 27,100
  ],
  pointPlacement: 'on'
 
}],
}


class RadarExample extends React.Component {

    render() {
        return (
            <div>
              <PolarChart options={options} highcharts={Highcharts} />
            </div>
        )
    }
}


export default RadarExample;