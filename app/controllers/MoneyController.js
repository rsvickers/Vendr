import { AppState } from "../AppState.js"
import { moneyServices } from "../services/MoneyServices.js"
import { setText } from "../utils/Writer.js"

function _drawMoney() {

    setText('snackMoney', AppState.money)
}


export class MoneyController {
    constructor() {
        // console.log('money controller is a go')



        AppState.on('money', _drawMoney)

    }

    addMoney() {
        console.log('I clicked a button!')
        moneyServices.addMoney()

    }
}