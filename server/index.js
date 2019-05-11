import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import validator from 'express-validator';
import route from './route.js';

const app = express(),
  port = process.env.PORT || '3100';

// logger
app.use(morgan('dev'));

// configure validator
app.use(validator());

// 3rd party middleware
app.use(cors());

app.use(bodyParser.json());

app.use('/api-docs', express.static(path.join(__dirname, '../server/public/api-docs')));

// use the defined routes
app.use('/', route);

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  console.log(err);
  if(err) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    res.status(err.status || 500);
    res.send((500, err));
  }
});


app.listen(port || 3000, () => {
  console.log(`Started on port ${port}`);
});

export default app;