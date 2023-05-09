export class Snack{
    constructor(data){
    this.name = data.name
    this.price = data.price
    this.image = data.image
  }

  get ListTemplate() {
    return `<h1 onclick="app.snacksController.purchaseCandy(${this.name})") id="${this.name}">${this.image}</h1>`
  
  }
}
