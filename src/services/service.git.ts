


export class ServiceGit {


    /**
     * Obtiene los proyectos del repositorio
     * @returns 
     */
    static getProjectsGit = async () => {
        try {
            const response = await fetch('/api/git/projects',
                {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json"
                    },
                }
            )
            const data = await response.json()
            return data

        } catch (error) {
            throw new Error("Fallo el servicio para obtener los nombres del repositorio")
        }
    }

        /**
     * 
     * @returns 
     */
        static getCommitsGit = async (project: string) => {
            try {
                const response = await fetch('/api/git/commits',
                    {
                        method: "POST",
                        headers: {
                            "Accept": "application/json",
                            "Content-type": "application/json"
                        },
                        body:  JSON.stringify({
                            	projects: project
                        })
                    }
                )
                const data = await response.json()
                return data
    
            } catch (error) {
                throw new Error("Fallo el servicio para obtener los nombres del repositorio")
            }
        }
}