import './Paper.css';

const Paper = ({ logo, name, change }) => {
    return(
        <div className='Paper'>
            <img src={logo} className='Logo' alt='Logo'/>
            <span className='cryptoName'>{name}</span>
            <span className='cryptoChnage'>{change}</span>
        </div>
    );
}

export default Paper;
