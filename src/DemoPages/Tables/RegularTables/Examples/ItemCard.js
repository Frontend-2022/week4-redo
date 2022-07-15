import { React, useState } from 'react';
const ItemCard = ({item}) => {
    const numberWithDot = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    
    return(
        <tr>
            <th scope="row"></th>
            <td>{item.hkma}</td>
            <td>{item.ngayTao}</td>
            <td>{item.lptma}</td>
            <td>{item.ptma}</td>
            <td>{item.soTien}</td>
            <td>{numberWithDot(20000000) +' VND'}</td>
            <td>{numberWithDot(10000000) + ' VND'}</td>
            <td><a href="/"> <i class="pe-7s-piggy " > </i></a></td>
            <td><a href="/" ><i class="pe-7s-print " > </i></a></td>
        </tr>
    );
};
export default ItemCard;