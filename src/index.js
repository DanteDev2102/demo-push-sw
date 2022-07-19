import express, { json, urlencoded } from 'express';
import { createRequire } from 'node:module';
import cors from 'cors';
import morgan from 'morgan';
import push from './routes/push.js';

const require = createRequire(import.meta.url);
const { version } = require('../package.json');
const app = express();
const APIVersion = version.charAt(0);

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));
app.use(`/api/v${APIVersion}`, push);

export default app;
