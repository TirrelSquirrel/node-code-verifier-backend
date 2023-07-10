import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

// Configuration the .env file
dotenv.config();

// Create Express APP
const app: Express = express();
const port: string | number= process.env.PORT || 8000;

// Definir la primera ruta de la APP
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to API Restful Express + TS + Nodemon + Jest + Swagger + Mongoose');
});

// Segunda ruta
app.get("/hello", (req: Request, res: Response) => {
  res.send(
    "Welcome to GET Route: Hello"
  );
});



// Ejecutamos la APP y escuchamos las peticiones de PORT
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
})