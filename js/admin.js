const deleteText = document.querySelectorAll('.fa-trash')
const thumbUpText = document.querySelectorAll('.fa-thumbs-up')
const thumbDownText = document.querySelectorAll('.fa-thumbs-down')

Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deletePark)
})

Array.from(thumbUpText).forEach((element)=>{
    element.addEventListener('click', addLike)
})

Array.from(thumbDownText).forEach((element)=>{
    element.addEventListener('click', removeLike)
})



async function deletePark(){
    const pName = this.parentNode.childNodes[1].innerText
    const pLocation = this.parentNode.childNodes[3].innerText
    try{
        const response = await fetch('deletePark', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'parkNameS': pName,
              'parkLocationS': pLocation
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function addLike(){
    const pName = this.parentNode.childNodes[1].innerText
    const pLocation = this.parentNode.childNodes[3].innerText
    const tLikes = Number(this.parentNode.childNodes[5].innerText)
    console.log('Liking')
    try{
        const response = await fetch('addOneLike', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'parkNameS': pName,
              'parkLocationS': pLocation,
              'likesS': tLikes
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function removeLike(){
    const pName = this.parentNode.childNodes[1].innerText
    const pLocation = this.parentNode.childNodes[3].innerText
    const tLikes = Number(this.parentNode.childNodes[5].innerText)
    console.log('Liking')
    try{
        const response = await fetch('removeOneLike', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'parkNameS': pName,
              'parkLocationS': pLocation,
              'likesS': tLikes
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}