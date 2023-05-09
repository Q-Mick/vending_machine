import { Snack } from "./Models/Snacks.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])
  snacks = [new Snack(
    {
      name: 'chocolate',
      price: 1.50,
      image: '🍫'
    }),
    new Snack(
    {
      name: 'lollipop',
      price: 1.50,
      image: '🍭'
    }),
    new Snack(
    {
      name: 'werthers',
      price: 1.50,
      image: '🍬'
    }),
  ]

  money = 0
  vendingOptionsTemplate = ''

}

export const appState = new Proxy(new AppState(), {
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
