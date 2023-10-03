import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"


function _drawSnackOptions() {
    const snackOptions = AppState.snacks
    // console.log('here are the snacks', snackOptions)
    let content = ''
    snackOptions.forEach(snacks => content += snacks.SnackOptions)
    setHTML('snackOptions', content)
}


export class SnacksController {

    constructor() {
        // console.log('Snacks Controller is loaded')
        _drawSnackOptions()
    }
}