import * as express from "express";

import { getRepository } from "typeorm";

export const PostUpdateRoute = "/update";

export const PostUpdateHandler = async (request: express.Request, response: express.Response): Promise<void> => {
    try {
        const update: UpdateRequest = request.body;

        const { table, where, values } = update;

        const repo = getRepository(table);

        const result = await repo.update(where, values);

        response.send(result);
    } catch (err) {
        console.error(err);
        if (err instanceof Error) {
            response.status(500).send(err.message);
        }
    }
};

interface UpdateRequest {
    table: string;
    where: { [key: string]: unknown };
    values: { [key: string]: unknown };
}
