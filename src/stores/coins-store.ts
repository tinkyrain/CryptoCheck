import { makeAutoObservable, runInAction } from "mobx";
import {TCoinData, TCoinList, TCoinListResponse} from "../types/types";
import {getCoinData, getCoinsList} from "../api/coins/coins-data";

class CoinsStore {
    dataListCoins: TCoinList[] = [];
    dataCoin: TCoinData[] = [];

    start: number = 0;
    limit: number = 50;

    isLoading: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    //Получаем список валют
    getCoinsListAction = async (start: number, limit: number) => {
        try {
            this.isLoading = true;

            //Делаем запрос
            const res: TCoinListResponse = await getCoinsList(start, limit);
            
            runInAction(() => {
                this.start += res.data.length;
                this.limit += this.limit;
                //Заполняем стейт
                this.dataListCoins.push(...res.data);
            });

            this.isLoading = false;
        } catch {
            this.isLoading = false;
        }
    }

    //Получаем определённую валюту
    getCoinData = async (id: number) => {
        try {
            this.isLoading = true;

            const res: TCoinData = await getCoinData(id);

            runInAction(() => {
                this.dataCoin = res;
            })

            this.isLoading = false;
        } catch {
            this.isLoading = false;
        }
    }
}

export default new CoinsStore();