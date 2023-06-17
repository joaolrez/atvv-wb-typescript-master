import express from "express";
import cors from "cors";
import "config/dotenv"
import { AppDataSource } from "./config/database";
import rotasCliente from "./routes";

const app = express();

try {
  AppDataSource.initialize().then(async () => {
    console.log('Banco conectado com sucesso');
  })
} catch (error) {
  console.log(`Connection error ${error}`);
}

app.use(cors());
app.use(express.json());
app.use('/', rotasCliente);

app.listen(5000, () => console.log('Serve conectado'))
