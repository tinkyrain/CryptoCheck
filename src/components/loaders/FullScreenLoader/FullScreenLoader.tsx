import { Spinner } from '@chakra-ui/react';
import './FullScreenLoader.css';

const FullScreenLoader = (): JSX.Element => {
    return (
        <div className='modal'>
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </div>
    );
};

export default FullScreenLoader;