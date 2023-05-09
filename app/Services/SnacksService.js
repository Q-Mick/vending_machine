import { appState } from "../AppState.js"

class SnacksService {
  addMoney() {
    appState.money += 0.25
    console.log(appState.money)
  }
}

export const snacksService = new SnacksService()
