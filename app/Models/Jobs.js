let id = 100;

export default class Job {
constructor(data){
  this.id = id++
  this.title = data.title 
  this.company = data.company
  this.salary = data.salary
}

get Template(){
  return `
  <div class="col-3 border rounded shadow">
  <h1>${this.title}</h1>
  <h1>${this.company}</h1>
  <h1>${this.salary}</h1>
  <button class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
  `
}


}