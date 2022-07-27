import React, {Fragment,Component} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios';
import Option from './Option.js';


 class RegularTables extends Component{
    
    state ={
        HocPhi:[],
        filter: []
    }
    async componentDidMount() {
    // Get items from database
    let res = await axios.get('http://ims-api.viendong.edu.vn/api/beta/hocvien/hocphi', {
      headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU2NjQsImhvY3ZpZW5pZCI6MTc4ODMsImdpYW5ndmllbmlkIjpudWxsLCJ1c2VyaWQiOiIyMDA1MDIwMDI5IiwicGFzcyI6IjEyMzQ1NiIsImhvY1ZpZW5JZCI6MTc4ODMsImhvY1ZpZW4iOnsiaWQiOjE3ODgzLCJtc2h2IjoiMjAwNTAyMDAyOSIsImhvIjoiVGjDoWkgVGjhu4sgS2ltIiwidGVuIjoiTmfDom4iLCJoaW5oYW5oIjpudWxsLCJtYWxvcCI6IjE0S1RDIiwibmFtbmhhcGhvYyI6MjAyMCwia2hvYWhvYyI6MTQsImdoaWNodSI6Ik5oYXAgdHUgZmlsZSBleGNlbCBEU1NWX0sxNC54bHMiLCJuZ2F5bGFwIjoiMjAyMS0wMS0yOVQxNjoyMjowMC4wMDBaIiwibWF0cmFuZ3RoYWkiOm51bGwsIm5nYXlzaW5oIjoiMjAwMi0wMi0xM1QwMDowMDowMC4wMDBaIiwiZW1haWwiOm51bGwsInNkdCI6IjA4OTgyODAzNzQiLCJjbW5kIjoiMzAxNzk2Mjc3IiwiZ2lvaXRpbmgiOm51bGwsIm5vaXNpbmgiOm51bGwsImtob2luZ2FuaGlkIjo1Njh9LCJnaWFuZ1ZpZW4iOm51bGwsImlhdCI6MTY1NzY4Nzc3MH0.w9lduwIS3ULlyKaPvaQisrI9_TMF2xj918JpGp_Wauo"
      }
    })

    this.setState({HocPhi: res.data && res.data.data ? res.data.data :[]})
  };
  
  render() {
    const checkFilter = (option) => {
        // No need to check for searched value
          if (option[0] === 'all')
            return this.setState({HocPhi:this.state.HocPhi});
          else if (option[0] === 'Học kỳ 2, 2021 - 2022')
            return this.setState({HocPhi:this.state.HocPhi.filter((item) => item["hkma"] === '212')});
        else if (option[0] === 'Học kỳ 1, 2021 - 2022')
            return this.setState({HocPhi:this.state.HocPhi.filter((item) => item["hkma"] === '211')});
        else if (option[0] === 'Học kỳ hè, 2020 - 2021')
            return this.setState({HocPhi:this.state.HocPhi.filter((item) => item["hkma"] === '203')});
        else if (option[0] === 'Học kỳ 2, 2020 - 2021')
            return this.setState({HocPhi:this.state.HocPhi.filter((item) => item["hkma"] === '202')});
        else
            return this.setState({HocPhi:this.state.HocPhi.filter((item) => item["hkma"] === '201')});
    }
    const Tongconlai = (temp) => {
        for( let i of this.state.HocPhi){
                temp += i.soTien;
        }
        return temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    const toFindDuplicates = (temp) => {
        var uniques = [];
        var itemsFound = {};
        for(var i = 0, l = temp.length; i < l; i++) {
            var stringified = JSON.stringify(temp[i]['hkma']);
            if(itemsFound[stringified]) { continue; }
            uniques.push(temp[i]);
            itemsFound[stringified] = true;
        }
        return uniques;
    }
    return (
        <Fragment>
            <TransitionGroup>
                <CSSTransition component="div" appear={true}
                    timeout={0} enter={false} exit={false}>
                <Option item={this.state.HocPhi}/>
                </CSSTransition>
            </TransitionGroup>
        </Fragment>
    );
};
 }
export default RegularTables;