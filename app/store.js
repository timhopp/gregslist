import Value from "./Models/Value.js";
import Car from "./Models/Car.js";
import House from "./Models/House.js";
import Job from "./Models/Jobs.js";
let _state = {
  activeValue: new Value({ title: "Value" }),
  /** @type {Value[]} */
  values: [],
  /** @type {Car[]} */
  cars:[],
  /** @type {House[]} */
  houses:[],
  /** @type {Job[]} */
  jobs:[]
};

class Store {
  /**
   * Provides access to application state data
   */
  deleteCar(carId){
    let indexToRemove = _state.cars.findIndex(car => car.id == carId)
    if(indexToRemove < 0){
      console.error('Invalid Car ID')
    }
    _state.cars.splice(indexToRemove, 1)
  }

  deleteHouse(houseId){
    let indexToRemove = _state.houses.findIndex(house => house.id == houseId)
    if(indexToRemove < 0){
      console.error('Invalid House ID')
    }
    _state.houses.splice(indexToRemove, 1)
  }
  deleteJob(jobId){
    let indexToRemove = _state.jobs.findIndex(job => job.id == jobId)
    if(indexToRemove < 0){
      console.error('Invalid Job ID')
    }
    _state.jobs.splice(indexToRemove, 1)
  }

  addJob(newJob){
    _state.jobs.push(newJob)
  }

  addCar(newCar) {
    _state.cars.push(newCar)
  }


  addHouse(newHouse){
    _state.houses.push(newHouse)
  }

  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
