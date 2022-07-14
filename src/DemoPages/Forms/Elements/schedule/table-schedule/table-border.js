import React from 'react';
import { Table } from 'reactstrap';
import "./table-border.css";

export default class TableBordered extends React.Component {
  render() {
    return (
      <Table className="mb-0" bordered>
        <thead className='thead-style'>
          <tr className='tr-style'>
            <th className='th-style'>Buổi</th>
            <th className='th-style'>Tiết</th>
            <th className='th-style'>Thứ 2</th>
            <th className='th-style'>Thứ 3</th>
            <th className='th-style'>Thứ 4</th>
            <th className='th-style'>Thứ 5</th>
            <th className='th-style'>Thứ 6</th>
            <th className='th-style'>Thứ 7</th>
            <th className='th-style'>Chủ nhật</th>
          </tr>
        </thead>
        <tbody className='tbody-style'>
          <tr>
            <th style={{backgroundColor: '#a8a3a3'}} className='th-style' rowspan="6" scope="row">Sáng</th>
            <th style={{backgroundColor: '#a8a3a3'}} className='th-style' scope="row">Tiết 1 <br /> 06:40 - 07:30</th>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
          </tr>
          <tr>
            <th style={{backgroundColor: '#a8a3a3'}} className='th-style' scope="row">Tiết 2 <br /> 07:30 - 08:15</th>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
          </tr>
          <tr>
            <th style={{backgroundColor: '#a8a3a3'}} className='th-style' scope="row">Tiết 3 <br /> 8:15 - 9:00</th>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
          </tr>
          <tr>
            <th style={{backgroundColor: '#a8a3a3'}} className='th-style' scope="row">Tiết 4 <br /> 9:00 - 9:45</th>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
          </tr>
          <tr>
            <th style={{backgroundColor: '#a8a3a3'}} className='th-style' scope="row">Tiết 5 <br />10:00 - 10:45</th>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
          </tr>
          <tr>
            <th style={{backgroundColor: '#a8a3a3'}} className='th-style' scope="row">Tiết 6 <br /> 10:45 - 11:30</th>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
          </tr>
          <tr>
            <th style={{backgroundColor: '#a8a3a3'}} className='th-style' rowspan="6" scope="row">Chiều</th>
            <th style={{backgroundColor: '#a8a3a3'}} className='th-style' scope="row">Tiết 7 <br /> 13:00 - 13:50</th>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
          </tr>
          <tr>
            <th style={{backgroundColor: '#a8a3a3'}} className='th-style' scope="row">Tiết 8 <br/> 13:50 - 14:40</th>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
          </tr>
          <tr>
            <th style={{backgroundColor: '#a8a3a3'}} className='th-style' scope="row">Tiết 9 <br/> 14:45 - 15:35</th>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
          </tr>
          <tr>
            <th style={{backgroundColor: '#a8a3a3'}} className='th-style' scope="row">Tiết 10 <br/> 15:45 - 16:35</th>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
          </tr>
          <tr>
            <th style={{backgroundColor: '#a8a3a3'}} className='th-style' scope="row">Tiết 11 <br /> 16:35 - 17:25</th>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
          </tr>
          <tr>
            <th style={{backgroundColor: '#a8a3a3'}} className='th-style' scope="row">Tiết 12 <br/> 17:25 - 18:15</th>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
          </tr>
          <tr>
            <th style={{backgroundColor: '#a8a3a3'}} className='th-style' rowspan="4" scope="row">Tối</th>
            <th style={{backgroundColor: '#a8a3a3'}} className='th-style' scope="row">Tiết 13 <br/> 18:15 - 19:05</th>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
          </tr>
          <tr>
            <th style={{backgroundColor: '#a8a3a3'}} className='th-style' scope="row">Tiết 14 <br /> 19:05 - 19:55</th>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
          </tr>
          <tr>
            <th style={{backgroundColor: '#a8a3a3'}} className='th-style' scope="row">Tiết 15 <br/> 19:55 - 20:45</th>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
          </tr>
          <tr>
            <th style={{backgroundColor: '#a8a3a3'}} className='th-style' scope="row">Tiết 16 <br /> 20:45 - 21:35</th>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
            <td className='td-style'></td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
