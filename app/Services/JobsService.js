import _store from '../store.js'
import Job from '../Models/Jobs.js'

class JobsService {
  constructor(){
    console.log('Hello Jobbo')
  }
 addJob(rawJobData){
 let newJob = new Job (rawJobData)
 _store.addJob(newJob)
 }

 deleteJob(jobId){
   _store.deleteJob(jobId)
 }

}



const SERVICE = new JobsService()

export default SERVICE