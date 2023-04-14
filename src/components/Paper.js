import './Paper.css';

const Paper = ({ info }) => {
    return(
        <div className='Paper'>
            <img src={info.logo} className='Logo' alt='Logo'/>
            <span className='cryptoName'>{info.name}</span>
            <span className='cryptoChnage'>{info.price}</span>
        </div>
    );
}

export default Paper;
