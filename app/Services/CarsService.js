import _store from '../store.js'
import Car from '../Models/Car.js'

class CarsService {
  constructor() {
    console.log('Hello from the car service');
  }

  deleteCar(carId){
    _store.deleteCar(carId)
  }

  addCar(rawCarData){
    let newCar = new Car(rawCarData)
    _store.addCar(newCar)
  }
}

const SERVICE = new CarsService()

export default SERVICE;