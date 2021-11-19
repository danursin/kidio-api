import dotenv = require("dotenv");
dotenv.config();

import * as cors from "cors";
import * as express from "express";

import { createDatabaseConnection } from "./db";
import internalRouter from "./routes/internal";
import publicRouter from "./routes/public";

(async () => {
    const port = process.env.PORT || 2500;
    const app = express();

    await createDatabaseConnection();

    app.use(express.json());

    app.use(
        cors({
            origin: true,
            credentials: true
        })
    );

    app.use(publicRouter());
    app.use(internalRouter());

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
})();
