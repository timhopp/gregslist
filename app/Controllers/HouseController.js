import _houseService from '../Services/HouseService.js'
import _store from '../store.js'

function _draw() {
  let template = ''
  let houses = _store.State.houses
  houses.forEach(house => template += house.Template)
  document.getElementById("houses").innerHTML = template
}

export default class HouseController {
  constructor(){
    console.log('Hello From House')
  }

addHouse(event){
  event.preventDefault()
  let formData = event.target;
  console.log('it housing happened', formData.address.value)
   let rawHouseData = {
     address: formData.address.value,
     price: formData.price.value,
     squarefootage: formData.squarefootage.value,
   }
   _houseService.addHouse(rawHouseData)
   formData.reset()
   _draw()
}

deleteHouse(houseId){
  _houseService.deleteHouse(houseId)
  _draw()
}

}