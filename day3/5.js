const jobs=[
    {id:1, isActive:true},
    {id:2, isActive:false},
    {id:3, isActive:true},
    {id:4, isActive:false},
]
const activeJobs=jobs.filter(function(job){ return job.isActive;})
console.log(activeJobs)

const arowActiveJobs=jobs.filter((job) => { return job.isActive;})
console.log(arowActiveJobs)