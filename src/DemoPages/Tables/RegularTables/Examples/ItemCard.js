import { React} from 'react';
const ItemCard = ({item}) => {
    const handleHocphi = (it) => {
        if (it.toString().includes("-")){
            return '' ;}
        else return it.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") ;
    }
    const handleThanhtoan = (it) => {
        if (it.toString().includes("-")){
            return it.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") ;}
        else return '' ;
    }
    return(
        <tr>
            <th scope="row"></th>
            <td>{item.hkma}</td>
            <td>{item.ngayTao}</td>
            <td>{item.lptma}</td>
            <td>{item.ptma}</td>
            <td>{handleHocphi(item.soTien)}</td>
            <td>{handleThanhtoan(item.soTien)}</td>
            <td><a href="/"> <i class="pe-7s-piggy " > </i></a></td>
            <td><a href="/" ><i class="pe-7s-print " > </i></a></td>
        </tr>
    );
};
export default ItemCard;