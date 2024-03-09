import { Comment } from "@/interfaces/types"

export class ServiceComment {
    /**
     * Esta funcion (createComment) crea comentarios
     * @param param: (name, link, profile, comment, color) datos requeridos para crear un comentario
     */
    static createComment = async (
        {
            name,
            link,
            profile,
            comment,
            color,
        }: Comment
    ) => {
        try {
            const response = await fetch('/api/comment/createComment',
                {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        name: name,
                        link: link,
                        profile: profile,
                        comment: comment,
                        color: color,
                    })
                }
            )
            const resData = await response.json()
            return resData

        } catch (error) {
            console.log("error de servicio crear comentario", error)
        }
    }
}