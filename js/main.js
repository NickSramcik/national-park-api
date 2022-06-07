document.querySelector('button').addEventListener('click', getPark)

function getPark() {
    const input = document.querySelector('input').value.replaceAll(' ', '+')
    const url = `/api/${input}`
    
    console.log(`Input is ${input}.`)
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('h3').innerText = data.location
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}