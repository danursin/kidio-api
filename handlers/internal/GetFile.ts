import * as express from "express";

import config from "../../config";
import s3 from "../../s3";

export const GetFileRoute = "/file";

export const GetFileHandler = (request: express.Request, response: express.Response): void => {
    try {
        const { file_key } = request.query;
        const stream = s3
            .getObject({
                Key: (file_key as string).toLowerCase(),
                Bucket: config.AWS_BUCKET_NAME
            })
            .createReadStream();

        response.setHeader("Content-Type", "audio/webm");
        stream.pipe(response);
    } catch (err) {
        console.error(err);
        if (err instanceof Error) {
            response.status(500).send(err.message);
        }
    }
};
