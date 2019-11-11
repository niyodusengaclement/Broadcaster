import express from 'express';
import bodyParser from 'body-parser';
import fileupload from 'express-fileupload';
import env from 'dotenv';
import routes from './routes';

env.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(fileupload({ createParentPath: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port} `);
});

export default app;
