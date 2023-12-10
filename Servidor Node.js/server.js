// import { createServer } from 'node:http';

// const server = createServer((request, response) => {
//     response.write('hello word')

//     return response.end()
// })


// server.listen(3333)

import { fastify } from "fastify";

const server = fastify()

server.get('/', () => {
    return 'Hello Word'
})

server.get('/maycon', () => {
    return 'Hello maycon'
})

server.get('/igor', () => {
    return 'Hello igor'
})

server.listen({
    port: 3333,
})