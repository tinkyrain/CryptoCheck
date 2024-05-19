import {Card, CardBody, CardHeader, Flex, Text} from "@chakra-ui/react";

import './CoinInfo.css';

type TProps = {
    head: string,
    body: string,
};

const CoinInfo = ({head, body}: TProps): JSX.Element => {
    return (
        <>
            <Card className='coin-info__card'>
                <Flex alignItems="center" justifyContent="space-between" alignContent='center'>
                    <CardHeader>
                        <Text className='coin-info__text'>
                            {head}
                        </Text>
                    </CardHeader>
                    <CardBody className='coin-info-card__card-body'>
                        <Text className='coin-info__text'>
                            {body}
                        </Text>
                    </CardBody>
                </Flex>
            </Card>
        </>
    );
};

export default CoinInfo;