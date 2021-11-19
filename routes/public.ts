import * as express from "express";

import { HealthCheckHandler, HealthCheckRoute } from "../handlers/public/HealthCheck";

const register = (): express.Router => {
    const router: express.Router = express.Router();

    router.get(HealthCheckRoute, HealthCheckHandler);

    return router;
};

export default register;
