// const url = 'https://jsonplaceholder.typicode.com/todos'

//  fetch devuelve una promesa, el tiempo de respuesta varia segun el backend y otros factores
//fetch(url)
//    .then(response => response.json())
//    .then(json => console.log(json))
//    .catch(error => console.log(error))

const url = 'https://jsonplaceholder.typicode.com/posts'

const fetchPost = () => {
    console.log('Llamando al API JSONPlaceHolder')
    return fetch(url)
        .then(response => response.json())
}

const renderPosts = (posts = []) => {
    const appDiv = document.getElementById('app')
    console.log(appDiv)

    let postList = ''
    posts.forEach(post => {
        postList += `
            <div>
                <h2>${post.id} - ${post.title}</h2>
            </div>
        `
    })

//    for (const post of posts) {
//        console.log(post)
//        const elParrafo = document.createElement('p')
//        elParrafo.innerText = `${post.id} - ${post.title}`
//        appDiv.appendChild(elParrafo)
//    }
    appDiv.innerHTML = postList

}

fetchPost()
    .then(data => {
        //console.log(data)
        renderPosts(data)
    })

