import * as express from "express";

import { getRepository } from "typeorm";

export const PostQueryRoute = "/query";

export const PostQueryHandler = async (request: express.Request, response: express.Response): Promise<void> => {
    try {
        const query: QueryRequest = request.body;

        const { table, select, relations, skip, take, where, order } = query;

        const repo = getRepository(table);

        const result = await repo.find({
            select,
            where,
            relations,
            skip,
            take,
            order
        });

        response.send(result);
    } catch (err) {
        console.error(err);
        if (err instanceof Error) {
            response.status(500).send(err.message);
        }
    }
};

interface QueryRequest {
    table: string;
    where?: { [key: string]: unknown };
    skip?: number;
    take?: number;
    select?: string[];
    relations?: string[];
    order?: {
        [key: string]: "ASC" | "DESC";
    };
}
