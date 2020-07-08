let id= 200;

export default class House {
  constructor(data){
    this.id = id++
    this.address = data.address 
    this.price = data.price 
    this.squarefootage = data.squarefootage
}

get Template(){
  return `
  <div class="col-3 border rounded shadow">
  <h1>${this.address}</h1>
  <h1>${this.price}</h1>
  <h1>${this.squarefootage}</h1>
  <button class="btn btn-danger" onclick="app.houseController.deleteHouse('${this.id}')">Delete</button>
  </div>
  `
 }
}
