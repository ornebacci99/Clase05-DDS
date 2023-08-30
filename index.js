import servicio from "./Service/service.js"

(async function main(){

    console.log("Ingresando main...")
    let posts = await servicio.obtener_posts()
    console.log("****")
    console.log(posts)
})()