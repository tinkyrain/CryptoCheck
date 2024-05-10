import { StatGroup } from "@chakra-ui/react";
import { TCoinListStat } from "../../../types/types";
import ValuteStat from "../ValuteStat/ValuteStat";

type TProps = {
    valuteStats: TCoinListStat[]
};

const ValuteStatGroup = ({ valuteStats }: TProps): JSX.Element => {
    return (
        <StatGroup className="valute-stat-group">
            {valuteStats.map((el, i) => (
                <ValuteStat
                    statLabel={el.statLabel}
                    statArrowDirection={el.statArrowDirection}
                    statNumber={el.statNumber}
                    statUnit={el.statUnit}
                    key={i}
                />
            ))}
        </StatGroup>
    );
}

export default ValuteStatGroup;