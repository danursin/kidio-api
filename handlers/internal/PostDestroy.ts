import * as express from "express";

import { getRepository } from "typeorm";

export const PostDestroyRoute = "/destroy";

export const PostDestroyHandler = async (request: express.Request, response: express.Response): Promise<void> => {
    try {
        const update: DestroyRequest = request.body;

        const { table, where } = update;

        const repo = getRepository(table);

        const result = await repo.delete(where);

        response.send(result);
    } catch (err) {
        console.error(err);
        if (err instanceof Error) {
            response.status(500).send(err.message);
        }
    }
};

interface DestroyRequest {
    table: string;
    where: number[] | { [key: string]: unknown };
}
