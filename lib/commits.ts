import { ServiceGit } from "@/services/service.git"



export  const getProjects = async () => {
  const response =  await ServiceGit.getProjectsGit()

  const namesProjects = await response.map((name: any) => {
   return  name.name
})

//console.log(namesProjects)

//LOGICA PARA ITERAR LOS COMMITS DE LOS PROYECTOS


const commits = await ServiceGit.getCommitsGit('briefcase')
//console.log(namesProjects)

const commitsProjects = await commits.map((commit: any) => {
    return  commit.commit.author.date
 })
//console.log(commitsProjects )
}