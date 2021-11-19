import * as express from "express";

import { getRepository } from "typeorm";

export const PostInsertRoute = "/insert";

export const PostInsertHandler = async (request: express.Request, response: express.Response): Promise<void> => {
    try {
        const insert: InsertRequest = request.body;

        const { table, values } = insert;

        const repo = getRepository(table);

        const result = await repo.save(values);

        response.send(result);
    } catch (err) {
        console.error(err);
        if (err instanceof Error) {
            response.status(500).send(err.message);
        }
    }
};

interface InsertRequest {
    table: string;
    values: { [key: string]: unknown } | { [key: string]: unknown }[];
}
