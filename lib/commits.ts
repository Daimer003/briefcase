import { ServiceGit } from "@/services/service.git"

/**
 * Obtiene los proyectos del repositorio y el total de los commits
 * @returns todos los commits
 */
export const getProjectsAndCommits = async () => {
   const response = await ServiceGit.getProjectsGit();
   const namesProjects = response.map((project: any) => project.name);

   let allCommits: any[] = [];
 
   // Iterar sobre los nombres de los proyectos para obtener los commits
   for (const projectName of namesProjects) {
     const commits = await ServiceGit.getCommitsGit(projectName);
 
     const commitsByProject = commits.map((commit: any) => {
       return {
         project: projectName,
         date: commit.commit.author.date,
         message: commit.commit.message, 
       };
     });
 
     // Añadir los commits del proyecto a la lista general
     allCommits = [...allCommits, ...commitsByProject];
   }
 
   return allCommits
 };
 