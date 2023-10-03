import { Snacks } from "./models/Snacks.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"



class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])


  money = 0


  snacks = [
    new Snacks({ name: 'Doritos', price: 2.50, imgUrl: 'https://images.unsplash.com/photo-1600952841320-db92ec4047ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80' }),
    new Snacks({ name: 'Cheetos', price: 1.50, imgUrl: 'https://images.unsplash.com/photo-1581533940608-d2973792f542?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80' }),
    new Snacks({ name: 'Hersheys', price: 2.00, imgUrl: 'https://images.unsplash.com/photo-1600231409360-e58ed635543a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1786&q=80' }),
    new Snacks({ name: 'Corn', price: 16.00, imgUrl: 'https://images.unsplash.com/photo-1531171000775-75f0213ca8a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80' }),
  ]




  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
