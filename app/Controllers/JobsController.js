import _jobsService from '../Services/JobsService.js'
import _store from '../store.js'

function _draw(){
  let template= ''
  let jobs = _store.State.jobs
  jobs.forEach(job => template += job.Template)
  document.getElementById('jobs').innerHTML = template
}

export default class JobsController {
  constructor(){
    console.log('Hello Job')
  }


  addJob(event){
    event.preventDefault();
    let formData = event.target;
    console.log('Jobs are poppin' + formData.title.value)
    let rawJobData = {
      title: formData.title.value,
      company: formData.company.value,
      salary: formData.salary.value,
    }
    _jobsService.addJob(rawJobData)
    formData.reset()
    _draw()

  }

  deleteJob(jobId){
    _jobsService.deleteJob(jobId)
    _draw()
  }
}