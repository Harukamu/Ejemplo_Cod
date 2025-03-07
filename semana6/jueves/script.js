//1ra forma
// fetch("https://pokeapi.co/api/v2/pokemon?limit=10").then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data)
// })

//2da forma
// const traerPokemones= async ()=>{
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=40")
//     const data = await response.json()

//     console.log(data)
// }
// traerPokemones()

// const traerPokemon= async ()=>{
//     const pokemon =prompt("coloca el nombre del pokemon")
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//     const data = await response.json()
//     const nuevoObjeto={
//         nombre: data.name,
//         experiencia:data.base_expierence,
//         image: data.sprites.front_female
//     }
//     console.log(nuevoObjeto)
// }
// traerPokemon()

//guardar datos 
// localStorage.setItem("nombre","Katia")
// //nombre con el q se guarda
// localStorage.getItem("nombre")
// //colocar el nombre con el q se guarda
// localStorage.removeItem("nombre")
// //elimina todas las variables
// localStorage.clear("nombre")

// sessionStorage.setItem("nimbre",{})

// sessionStorage.setItem("usuario", JSON.stringify(usuario))

// console.log(JSON.parse(sessionStorage.getItem("usuario")))
// fetch("https://api.github.com/users/donatto22").then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data)
// })

// const traerGit = async () => {

//         const response = await fetch("https://api.github.com/users/donatto22")
        
//         const reposResponse = await fetch("https://api.github.com/users/donatto22/repos");
//         const repos = await reposResponse.json()
        
//         const followersResponse = await fetch("https://api.github.com/users/donatto22/followers");
//         const followers = await followersResponse.json()

//         const usuario = {
//             username: "donatto22",
//             name: "Donatto",
//             location: "Lima Perú",
//             repos: repos.map(repo=>repo.name),
//             followers: followers.map(follower=>follower.login)
//         }
//         console.log(usuario)
// }
// traerGit()

// nombre con el que guardarás el valor - el valor
localStorage.setItem("nombre", "Donatto")

// requieres el nombre con el que has guardado algún dato
localStorage.getItem("nombre")

// debes colocar el nombre con el que estas guardando
// algún valor
localStorage.removeItem("nombre")

// eliminar absolutamente todas las variables
// que estés guardando en tu navegador
localStorage.clear()

sessionStorage.setItem("nombre", {})

// convertir un objeto a string
const usuario = {
    username: "donatto22",
    name: "Donatto",
    location: "Lima Perú",
    repos: [{}, {}, {}, {}],
    followers: [{}, {}, {}, {}]
}

sessionStorage.setItem("usuario", JSON.stringify(usuario))

// de string a json
console.log(JSON.parse(sessionStorage.getItem("usuario")))