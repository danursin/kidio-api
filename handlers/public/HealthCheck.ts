import * as express from "express";

export const HealthCheckRoute = "/";
export const HealthCheckHandler = (request: express.Request, response: express.Response): void => {
    response.send("OK");
};
