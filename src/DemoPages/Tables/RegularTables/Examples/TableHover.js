import React from 'react';
import { Table } from 'reactstrap';

export default class TableHover extends React.Component {
  render() {
    return (
      <Table hover className="mb-0">
        <thead style={{backgroundColor: '#a8a3a3'}}>
          <tr>
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
        <tr>
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
            <th scope="row">6</th>
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
            <th scope="row">7</th>
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
            <th scope="row">8</th>
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
            <th scope="row">9</th>
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
            <th scope="row">10</th>
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
            <th scope="row">11</th>
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
