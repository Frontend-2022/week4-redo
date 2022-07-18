// import Transcript from "./Transcript";
import {Line,} from 'react-chartjs-2'
import React ,{}from 'react';
import Transcript from './Transcript';
import axios from 'axios';

const state ={

  labels: ['Thang điểm','Hk1', 'HK2', 'HK3','HK4','HK5','HK6','HK7','HK8'],
  datasets:[
      {
          label: 'Điểm trung bình học kỳ',
          yLabel: 'thang điểm',
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
        //   data: [this.state.Transcript.data[0].trungbinhhk],
      },

  ]
}

class LineChartTranscript extends React.Component
{

    state ={
        Transcript:[]
    }
    async componentDidMount(){
        let res = await axios.get('http://ims-api.viendong.edu.vn/api/beta/hocvien/bangdiemhocky?hocKyId=60',
        {
            headers: {
              token:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU2NjQsImhvY3ZpZW5pZCI6MTc4ODMsImdpYW5ndmllbmlkIjpudWxsLCJ1c2VyaWQiOiIyMDA1MDIwMDI5IiwicGFzcyI6IjEyMzQ1NiIsImhvY1ZpZW5JZCI6MTc4ODMsImhvY1ZpZW4iOnsiaWQiOjE3ODgzLCJtc2h2IjoiMjAwNTAyMDAyOSIsImhvIjoiVGjDoWkgVGjhu4sgS2ltIiwidGVuIjoiTmfDom4iLCJoaW5oYW5oIjpudWxsLCJtYWxvcCI6IjE0S1RDIiwibmFtbmhhcGhvYyI6MjAyMCwia2hvYWhvYyI6MTQsImdoaWNodSI6Ik5oYXAgdHUgZmlsZSBleGNlbCBEU1NWX0sxNC54bHMiLCJuZ2F5bGFwIjoiMjAyMS0wMS0yOVQxNjoyMjowMC4wMDBaIiwibWF0cmFuZ3RoYWkiOm51bGwsIm5nYXlzaW5oIjoiMjAwMi0wMi0xM1QwMDowMDowMC4wMDBaIiwiZW1haWwiOm51bGwsInNkdCI6IjA4OTgyODAzNzQiLCJjbW5kIjoiMzAxNzk2Mjc3IiwiZ2lvaXRpbmgiOm51bGwsIm5vaXNpbmgiOm51bGwsImtob2luZ2FuaGlkIjo1Njh9LCJnaWFuZ1ZpZW4iOm51bGwsImlhdCI6MTY1Nzk1MTYyOX0.MC_ezgd5xPIax_h6c0xEhjrqppvQ88ZlxnNz4Z6MMsk",
            },
          }

        );
        this.setState({
            Transcript: res&& res.data&&res.data.data? res.data.data :[],
        })
        console.log('>>> response: ',res.data.data[0].trungbinhhk);
    }
    render(){
        return(
            <Line data={state} width={600} height={150}/>
        )
    }

}
export default LineChartTranscript;