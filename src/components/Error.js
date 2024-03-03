import './Error.css';

const Error = ({ data }) => {
    return(
        <div className='error'>
            <h1 className='errorText'>Произошла ошибка при получении данных ;(</h1>
        </div>
    );
}

export default Error;
