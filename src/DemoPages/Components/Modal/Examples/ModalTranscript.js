import React from 'react';
import axios from "axios";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter,Table} from 'reactstrap';
class ModalTranscript extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    state ={
        TranScript:[]

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
            TranScript: res && res.data && res.data.data ? res.data.data :[]
        })
        // console.log('>>> res:  ', res.data.data[3].diemGK);

    }


    render() {
        return (
            <span className="d-inline-block mb-2 me-2">
                <button  className="BtnDetail" color="primary" onClick={this.toggle}><i className='pe-7s-plus'  style={{fontSize:"24px"}}> </i></button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} style={{maxWidth:"667px"}} >
                    <ModalHeader toggle={this.toggle}><h5a> Nguyên lý thị giác</h5a></ModalHeader>
                    <ModalBody>
                    <Table className="mb-0">
                        <thead colSpan="6">
                        <tr>
                            <th>STT</th>
                            <th>Tên thành phần</th>
                            <th>Trọng số</th>
                            <th>Điểm lần 1</th>
                            <th>Điểm lần 2</th>
                            <th>Điểm lần 3</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Điểm quá trình</td>
                            <td>50%</td>
                            {/* <td>{this.state}</td> */}
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Điểm cuối kì</td>
                            <td>50%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        </tbody>
                    </Table>
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color="link" onClick={this.toggle}>Cancel</Button> */}
                        <Button color="primary" onClick={this.toggle}>Đóng</Button>{' '}
                    </ModalFooter>
                </Modal>
            </span>
        );
    }
}

export default ModalTranscript;
