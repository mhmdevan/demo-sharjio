import express, {Application} from 'express';
import cors from 'cors'

import router from './services/features/feature.router';

const app: Application = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use(cors({
    origin: '*'
}));

app.use('/features', router)

app.listen(PORT, (): void => {
    return console.log(`Express is listening at http://localhost:${PORT}`);
});