const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let parks = {
    'yosemite': {
        'location': 'California'
    },
    'yellowstone':{
        'location': 'Wyoming'
    },
    'grand canyon': {
        'location': 'Colorado'
    },
    'zion': {
        'location': 'Utah'
    },
    'zion': {
        'location': 'Utah'
    },
    'arches': {
        'location': 'Utah'
    },
    'badlands': {
        'location': 'South Dakota'
    },
    'glacier': {
        'location': 'Montana'
    },
    'unknown': {
        'location': 'Park not recognized or in system yet'
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/css/style.css', (request, response) => {
    response.sendFile(__dirname + '/css/style.css')
})

app.get('/js/main.js', (request, response) => {
    response.sendFile(__dirname + '/js/main.js')
})

app.get('/api/:name', (request, response) => {
    const parkName = request.params.name.toLowerCase()
    console.log(`Requesting ${parkName}...`)
    if(parks[parkName]){
        response.json(parks[parkName])
    }else{
        response.json(parks['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})