 
import { Options, SwaggerDefinition } from 'swagger-jsdoc';

const swaggerDefinition: SwaggerDefinition = {

    openapi: '3.0.0',
    info : {
        version: '1.0.0',    //semantic version
        title: 'API de profesores usando TS para la universidad UPB',
        description: 'En esta API se puede crear nuevos profesores para tener un listado de toda la UPB'
    },
    
    servers: [
        {
            url: 'http://localhost:3000/api'
        }
    ]
};

const swaggerOptions: Options = {
    swaggerDefinition,
    apis: [
        './src/app/routes/*.ts',
        './src/app/controllers/*.ts',
        'src/domain/entities/*.ts'
    ]
};

export default swaggerOptions