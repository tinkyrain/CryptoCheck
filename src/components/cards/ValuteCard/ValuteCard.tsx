import {
    Card,
    CardBody,
    CardHeader,
    Flex,
    Text
} from "@chakra-ui/react";
import ValuteStatGroup from "../../stats/ValuteStatGroup/ValuteStatGroup";
import ValutePrice from "../../stats/ValutePrice/ValutePrice";
import './ValuteCard.css';
import { TCoinListStat } from "../../../types/types";

type TProps = {
    valuteName: string,
    valutePrice: string,
    valuteUnit: string,
    valuteLabel: string,
    valuteStats: TCoinListStat[]
};

const ValuteCard = ({valuteName, valutePrice, valuteUnit, valuteLabel, valuteStats}: TProps): JSX.Element => {
    return (
        <>
            <Card className="card" size='lg'>
                <Flex className="card-flex">
                    <CardHeader fontSize='24' flex={1} className="card-header">
                        <Text className="card-header-text">
                            {valuteName}
                        </Text>
                        <ValutePrice
                            valutePrice={valutePrice}
                            valuteLabel={valuteLabel}
                            valuteUnit={valuteUnit}
                        />
                    </CardHeader>
                    <CardBody flex={3} flexDirection='column'>
                        <ValuteStatGroup valuteStats={valuteStats}/>
                    </CardBody>
                </Flex>
            </Card>
        </>
    )
}

export default ValuteCard;
