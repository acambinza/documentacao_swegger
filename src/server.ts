import "reflect-metadata"
import express from "express";
import swaggerUi from 'swagger-ui-express';

import swaggerDocs from './swagger.json';

import "./database";
import {routes} from "./routes";

const app = express();

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/terms", (req, res) => {
    return res.json({
        message: "Termos de uso do Servico"
    })
})

app.use("/api/v1/", routes);

app.listen(3300, () => console.log('Server is running'));
