import { AppState } from "../AppState.js";

class MoneyServices {
    addMoney() {
        AppState.money += .25
        console.log('AppState money', AppState.money)
    }
}

export const moneyServices = new MoneyServices()