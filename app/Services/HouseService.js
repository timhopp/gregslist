
import House from '../Models/House.js'
import _store from '../store.js'

class HouseService {
  constructor(){
  console.log('House Hello')
 }

 addHouse(rawHouseData){
   let newHouse = new House (rawHouseData)
   _store.addHouse(newHouse)
 }

 deleteHouse(houseId){
  _store.deleteHouse(houseId)
}

}




const SERVICE  = new HouseService()

export default SERVICE