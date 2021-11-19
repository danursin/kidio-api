type Config = {
    AWS_ACCESS_KEY: string;
    AWS_BUCKET_NAME: string;
    AWS_REGION: string;
    AWS_SECRET_KEY: string;
    DB_CATALOG: string;
    DB_HOST: string;
    DB_PASSWORD: string;
    DB_USERNAME: string;
};

const { DB_HOST, DB_CATALOG, DB_USERNAME, DB_PASSWORD, AWS_REGION, AWS_ACCESS_KEY, AWS_SECRET_KEY, AWS_BUCKET_NAME } =
    process.env as Config;

const config: Config = {
    AWS_ACCESS_KEY,
    AWS_BUCKET_NAME,
    AWS_REGION,
    AWS_SECRET_KEY,
    DB_CATALOG,
    DB_HOST,
    DB_PASSWORD,
    DB_USERNAME
};

export default config;
