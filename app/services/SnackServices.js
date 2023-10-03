import { AppState } from "../AppState.js"

class SnackServices {

    purchaseASnack(snackData) {
        const foundSnack = AppState.snacks.find(snack => snack.name == snackData)
        console.log('found a snack', foundSnack)
    }

}
export const SnackServices = new snackServices()