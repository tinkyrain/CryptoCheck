import './Paper.css';

const Paper = ({ data }) => {
    return(
        <div className='paper'>
            <span className='cryptoName'>{data.name}</span>
            <span className='cryptoChnage'> 
                {data.price_usd} $
            </span>
        </div>
    );
}

export default Paper;
