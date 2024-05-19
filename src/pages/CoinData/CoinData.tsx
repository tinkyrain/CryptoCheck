import CoinInfo from "../../components/cards/CoinInfo/CoinInfo.tsx";
import FullScreenLoader from "../../components/loaders/FullScreenLoader/FullScreenLoader.tsx";
import ValuteStat from "../../components/stats/ValuteStat/ValuteStat.tsx";
import {Button, Card, Flex} from "@chakra-ui/react";
import coinsStore from "../../stores/coins-store.ts";
import {observer} from "mobx-react-lite";
import {TCoinListStat} from "../../types/types.ts";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import './CoinData.css';


const CoinData = observer((): JSX.Element => {
    const {dataCoin, isLoading, getCoinData} = coinsStore;
    //Получаем ID коина из параметра
    const id: number = Number(useParams()?.id);
    const navigate = useNavigate();

    useEffect(() => {
        getCoinData(id);
    }, [id]);

    const goBack = () => {
        navigate(-1)
    }

    //Если идёт закгрузка или нет данных, то показываем лоадер
    if (isLoading || dataCoin.length === 0) {
        return <FullScreenLoader/>;
    }

    const valuteStats: TCoinListStat[] = [
        {
            statLabel: 'On hour:',
            statArrowDirection: Number(dataCoin[0].percent_change_1h) > 0 ? 'increase' : 'decrease',
            statNumber: dataCoin[0].percent_change_1h,
            statUnit: '%'
        },
        {
            statLabel: 'On day:',
            statArrowDirection: Number(dataCoin[0].percent_change_24h) > 0 ? 'increase' : 'decrease',
            statNumber: dataCoin[0].percent_change_24h,
            statUnit: '%'
        },
        {
            statLabel: 'On week:',
            statArrowDirection: Number(dataCoin[0].percent_change_7d) > 0 ? 'increase' : 'decrease',
            statNumber: dataCoin[0].percent_change_7d,
            statUnit: '%'
        },
    ];

    return (
        <>
            <main className='coin-data__main'>
                <CoinInfo
                    head={dataCoin[0].name}
                    body={dataCoin[0].price_usd + '$'}
                />
                <CoinInfo
                    head='Rank'
                    body={String(dataCoin[0].rank)}
                />
                <Flex gap='5' className='coin-data__flex-valute-stat'>
                    {valuteStats.map((el: TCoinListStat) => {
                        return (
                            <Card width="100%" padding={5}>
                                <ValuteStat
                                    statLabel={el.statLabel}
                                    statArrowDirection={el.statArrowDirection}
                                    statNumber={el.statNumber}
                                    statUnit={el.statUnit}
                                />
                            </Card>
                        );
                    })}
                </Flex>
                <CoinInfo
                    head='Traded'
                    body={dataCoin[0].volume24a + '$'}
                />
                <CoinInfo
                    head='Circulating Supply'
                    body={dataCoin[0].csupply}
                />
                <CoinInfo
                    head='Total Supply'
                    body={dataCoin[0].tsupply}
                />
                <CoinInfo
                    head='Maximum Supply'
                    body={dataCoin[0].msupply}
                />

                <Button colorScheme='blue' mb={5} onClick={() => goBack()}>
                    Go Back
                </Button>
            </main>
        </>
    );
});

export default CoinData;