import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import validator from './mailValidator';
import mailer from './mail';
const router = express.Router();


// Swagger jsdoc configuration
const swaggerDefinition = {
  info: {
    title: 'Prebootcamp CI/CD API',
    version: '1.0.0',
    description: 'Api documentation for CI/CD Test.',
  },
  host: 'localhost:3100/',
  basePath: ''
};


// options for the swagger docs
const options = {

  // import swaggerDefinitions
  swaggerDefinition,

  // path to the API docs
  apis: ['./server/swagger.js']

};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// setup swagger route
router.get('/swagger.json', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// main route
router.get('/', (req, res) => {
  res.send('You\'ve reached our routes');
});

// send email route
router.post('/contact', validator.contact, (req, res) => {
  const sendMail = mailer.mailAdmin(req.body);
  res.send({status: 200, message: 'Mail successfully queeued for sending'});
});
export default router;