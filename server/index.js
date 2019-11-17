import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import fileupload from 'express-fileupload';
import { serve, setup } from 'swagger-ui-express';
import env from 'dotenv';
import routes from './routes';
import swaggerDoc from '../swagger.json';

env.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(fileupload({ createParentPath: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api-docs', serve, setup(swaggerDoc));
app.use('/api/v1', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port} `);
});

export default app;