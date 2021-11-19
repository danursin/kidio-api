import { Connection, createConnection } from "typeorm";

import config from "../config";

export const createDatabaseConnection = (): Promise<Connection> => {
    const { DB_CATALOG, DB_HOST, DB_PASSWORD, DB_USERNAME } = config;
    return createConnection({
        database: DB_CATALOG,
        entities: [__dirname + "/entities/**/*.js"],
        host: DB_HOST,
        logging: ["error", "warn", "query"],
        options: {
            isolation: "READ_UNCOMMITTED",
            enableArithAbort: true
        },
        password: DB_PASSWORD,
        synchronize: false,
        type: "mssql",
        username: DB_USERNAME
    });
};
