import {
    Stat,
    StatLabel,
    StatNumber,
    StatArrow
} from "@chakra-ui/react";
import './ValuteStat.css';

type TProps = {
    statLabel: string,
    statArrowDirection: "increase" | "decrease",
    statNumber: string,
    statUnit: string
}

const ValuteStat = ({ statLabel, statArrowDirection, statNumber, statUnit }: TProps): JSX.Element => {
    return (
        <Stat className="valute-stat">
            <StatLabel>{statLabel}</StatLabel>
            <StatNumber className="valute-stat-number">
                <StatArrow type={statArrowDirection} />
                {statNumber}{statUnit}
            </StatNumber>
        </Stat>
    )
}

export default ValuteStat;
