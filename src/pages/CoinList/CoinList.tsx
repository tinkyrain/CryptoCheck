import { Button, Stack } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import FullScreenLoader from "../../components/loaders/FullScreenLoader/FullScreenLoader";
import ValuteCard from "../../components/cards/ValuteCard/ValuteCard";

import coinsStore from "../../stores/coins-store";
import {TCoinList, TCoinListStat} from "../../types/types";

import {Link} from "react-router-dom";

import './CoinList.css';



const CoinList = observer((): JSX.Element => {

    const { dataListCoins, start, limit, isLoading, getCoinsListAction } = coinsStore;

    useEffect(() => {
        getCoinsListAction(start, limit);
    }, []);

    return (
        <>
            {/* При загрузке ставим лоадер */}
            {isLoading ? <FullScreenLoader /> : null}
            <Stack
                alignItems='center'
                flexDirection='column'
                spacing={5}
                pt={5}
            >
                {dataListCoins.map((el: TCoinList) => {
                    const valuteStats: TCoinListStat[] = [
                        {
                            statLabel: 'On hour:',
                            statArrowDirection: Number(el.percent_change_1h) > 0 ? 'increase' : 'decrease',
                            statNumber: el.percent_change_1h,
                            statUnit: '%'
                        },
                        {
                            statLabel: 'On day:',
                            statArrowDirection: Number(el.percent_change_24h) > 0 ? 'increase' : 'decrease',
                            statNumber: el.percent_change_24h,
                            statUnit: '%'
                        },
                        {
                            statLabel: 'On week:',
                            statArrowDirection: Number(el.percent_change_7d) > 0 ? 'increase' : 'decrease',
                            statNumber: el.percent_change_7d,
                            statUnit: '%'
                        },
                    ];

                    return (
                        <Link
                            to={`/coin/${el.id}`}
                            key={el.id}
                            className='coin-list__link'
                        >
                            <ValuteCard
                                valuteName={el.name}
                                valuteLabel="Price"
                                valutePrice={el.price_usd}
                                valuteUnit="$"
                                valuteStats={valuteStats}
                            />
                        </Link>
                    )
                })}
                {/* Убираем кнопку, если идёт загрузка */}
                {!isLoading ? <Button colorScheme='blue' mb={5} onClick={() => getCoinsListAction(start, limit)}>Load more</Button> : null}
            </Stack>
        </>
    );
});

export default CoinList;