import axios from "axios";
import { TCoinListResponse } from "../../types/types";

export const getCoinsList = async (start: number, limit: number) => 
    (await axios.get<TCoinListResponse>(`https://api.coinlore.net/api/tickers/?start=${start}&limit=${limit}`)).data