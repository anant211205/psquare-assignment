import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express() ;

app.use(cors()) ;
app.use(express.json()) ;
app.use(express.urlencoded({ extended: true })) ;

// Serve static files (uploaded images)
app.use('/uploads', express.static('uploads'));

import { inventoryRouter } from './routes/inventory.routes.js';

app.use("/api/inventory" , inventoryRouter) ;

export {app} ;