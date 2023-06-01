const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routs/message']

const doc = {
    info: {
        version: "1.0.0",
        title: "My API",
        description: "Documentation automatically generated by the <b>swagger-autogen</b> module."
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Message",
            "description": "Endpoints"
        }
    ],
    definitions: {
        Message: {
            userId:1,
            title:"aaa",
            content:"bbb"
        },
        AddUser: {
            $userId:1,
            $title:"aaa",
            $content:"bbb"
        }
    }
}

swaggerAutogen(outputFile, endpointsFiles,doc).then(() => {
    require('./app.js')
})