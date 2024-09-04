import { ServiceGit } from "@/services/service.git"



export  const getProjects = async () => {
  const response =  await ServiceGit.getProjectsGit()

  const namesProjects = await response.map((name: any) => {
   return  name.name
})


//LOGICA PARA ITERAR LOS COMMITS DE LOS PROYECTOS


const commits = await ServiceGit.getCommitsGit('briefcase')
//console.log(namesProjects)

const commitsProjects = await commits.map((commit: any) => {
    console.log(commit.commit.author.date)
    return  commit
 })
console.log(commitsProjects )
}