//encargado de llamar a la API
import { Post } from "../models/Post.js";
import fetch from "node-fetch";


async function obtener_posts(){
    const result = []
    const url = "https://jsonplaceholder.org/posts"

    try{
        const promesa = await fetch(url)
        const data = await promesa.json() //convertir en un objeto, para entrar a sus propiedades

        data.array.forEach(element => {
            const postAux = new Post()
            postAux.id = element.id
            postAux.slug = element.slug
            postAux.url = element.url

            result.push(postAux)

        });

        return result
    }
    catch(error){
        console.log("Error!!!" + error)
    }
}

export default{
    obtener_posts
}