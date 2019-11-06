import express from 'express';
import env from 'dotenv';
import routes from './routes';

env.config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use('/api/v1', routes);
app.listen(port, () => {
  console.log(`Server is running on port ${port} `);
});

export default app;
