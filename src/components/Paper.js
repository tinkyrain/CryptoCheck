import './Paper.css';

const Paper = ({ img, name }) => {
    return(
        <div className='Paper'>
            <img src={img} className='Logo' alt='Logo'/>
            <span className='cryptoName'>{name}</span>
            <span className='cryptoChnage'> 10 $</span>
        </div>
    );
}

export default Paper;
