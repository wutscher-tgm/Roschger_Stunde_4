const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

http.listen(3000, (err) => {
    console.log('Server running')
})