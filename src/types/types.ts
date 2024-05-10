export type TCoinListStat = {
    statLabel: string,
    statArrowDirection: "increase" | "decrease",
    statNumber: string,
    statUnit: string
};

export type TCoinListResponse = {
    data: TCoinList[],
    info: TCoinListInfo
};

export type TCoinList = {
    id: string,
    symbol: string,
    name: string,
    nameid: string,
    rank: number,
    price_usd: string,
    percent_change_24h: string,
    percent_change_1h: string,
    percent_change_7d: string,
    price_btc: string,
    market_cap_usd: string,
    volume24: number,
    volume24a: number,
    csupply: string,
    tsupply: string,
    msupply: string
};

export type TCoinListInfo = {
    coins_num: number,
    time: number
};