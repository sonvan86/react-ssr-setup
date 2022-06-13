import * as express from 'express';
import axios from 'axios';
import { configureStore } from '../../shared/store';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: string;
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}
const addStore = async (
    _req: express.Request,
    res: express.Response,
    next: express.NextFunction
): Promise<any> => {
    const deltae = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    res.locals.store = configureStore({
        initialState: { app: { test: deltae.data[0].name, locale: 'de_DE' } },
    });
    next();
};

export default addStore;
