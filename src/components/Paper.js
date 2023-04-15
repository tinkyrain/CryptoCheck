import { useSelector } from 'react-redux';
import './Paper.css';

const Paper = ({ img, name, price }) => {
    return(
        <div className='Paper'>
            <img src={img} className='Logo' alt='Logo'/>
            <span className='cryptoName'>{name}</span>
            <span className='cryptoChnage'> {price} $</span>
        </div>
    );
}

export default Paper;
