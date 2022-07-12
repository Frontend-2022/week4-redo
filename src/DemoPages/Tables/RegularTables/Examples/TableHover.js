import React from 'react';
import { Table, Modal, ModalHeader, Row, Col, ModalBody, NavItem } from 'reactstrap';

export default class TableHover extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    };

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
  render() {
    return (
      <Table hover className="mb-0" style={{color:'black'}}>
        <thead style={{backgroundColor: '#a8a3a3'}}>
          <tr >
            <th>STT</th>
            <th>Học kỳ</th>
            <th>Ngày tạo</th>
            <th>Loại PT</th>
            <th>Mã</th>
            <th>Học phí</th>
            <th>Đã thanh toán</th>
            <th>Còn lại</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        <tr onClick={this.toggle}>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
                    <ModalHeader toggle={this.toggle}><h51>Chi tiết</h51></ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col >
                            </Col>
                        </Row>
                    </ModalBody>
                </Modal>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td><a href="/" ><i class="pe-7s-print " > </i></a></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td><a href="/"><i class="pe-7s-print"> </i></a></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td><a href="/"><i class="pe-7s-print"> </i></a></td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td><a href="/"><i class="pe-7s-print"> </i></a></td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td><a href="/print"><i class="pe-7s-print"> </i></a></td>
          </tr>
          <tr>
            <td colSpan={6} ></td >
            <th style={{color:'rgb(169, 0, 1)'}}>Học phí nợ</th>
            <th style={{color:'rgb(169, 0, 1)'}}>100</th>
            <th></th>
          </tr>
        </tbody>
      </Table>
    );
  }
}
