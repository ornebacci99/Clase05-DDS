//Che data traeme los posts

import datos from "../Data/post_data.js";

async function obtener_posts(){
    const result = await datos.obtener_posts()
    return result
}

export default{
    obtener_posts
}