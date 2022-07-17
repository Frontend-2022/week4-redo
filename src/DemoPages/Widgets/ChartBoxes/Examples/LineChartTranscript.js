// import Transcript from "./Transcript";
import {Line,} from 'react-chartjs-2'
import {React,}from "react";


const state ={

  labels: ['Thang điểm','Hk1', 'HK2', 'HK3','HK4','HK5','HK6','HK7','HK8'],
  datasets:[
      {
          label: 'Điểm trung bình học kỳ',
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: '#008B8B',
          borderCapStyle: 'round',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#ed0f51',
          pointBackgroundColor: '#ed0f51',
          pointBorderWidth: 2,
          pointHoverRadius: 10,
          pointHoverBackgroundColor: '#ed0f51',
          pointHoverBorderColor: '#ed0f51',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [10,7.52, 0, 0, 0,0,0,0,0],
      },

  ]
}

const LineChartTranscript =()=>
{

    return(
        <>
       <Line data={state} width={600} height={150}/>

        </>
    )
}
export default LineChartTranscript;