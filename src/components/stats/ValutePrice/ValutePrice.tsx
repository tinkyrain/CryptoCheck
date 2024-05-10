import {
    Stat,
    StatLabel,
    StatNumber,
} from "@chakra-ui/react";
import './ValutePrice.css';

type TProps = {
    valutePrice: string,
    valuteUnit: string,
    valuteLabel: string,
};

const ValutePrice = ({ valutePrice, valuteUnit, valuteLabel }: TProps): JSX.Element => {
    return (
        <>
            <Stat>
                <StatLabel>{valuteLabel}</StatLabel>
                <StatNumber>
                    {valutePrice}{valuteUnit}
                </StatNumber>
            </Stat>
        </>
    );
}

export default ValutePrice;