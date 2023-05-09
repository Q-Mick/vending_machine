import { appState } from "../AppState.js"
import { snacksService } from "../Services/SnacksService.js"
import { setHTML, setText } from "../Utils/Writer.js"


function _draw() {
  setText("money", appState.money)
}

function _drawVendingChoices(){
  let template = ''
  appState.snacks.forEach(s => template += s.ListTemplate)
  console.log(template);
  setHTML("vending-display", template)
}
//
export class SnacksController {
  constructor() {
    console.log("Hello from the snacks controller")
    appState.on("money", _draw)
    _drawVendingChoices()
    _draw()
    

  }

  addMoney() {
    snacksService.addMoney()
    
  }




}