import * as express from "express";

import config from "../../config";
import s3 from "../../s3";
import { v4 as uuid } from "uuid";

export const PostFileRoute = "/file";

export const PostFileHandler = async (request: express.Request, response: express.Response): Promise<void> => {
    try {
        const file = request.file;
        if (!file) {
            throw new Error("No file in request!");
        }

        const guid = uuid().toLowerCase();

        const fileReponse: PostFileResponse = {
            file_key: guid
        };

        console.log(`Uploading ${guid} (${(file.buffer.length / 1e6).toFixed(2)} mb)`);

        const start = +new Date();

        await s3
            .upload({
                Body: file.buffer,
                Bucket: config.AWS_BUCKET_NAME,
                Key: guid
            })
            .promise();

        console.log(`Uploaded in ${((+new Date() - start) / 1000).toFixed(2)} seconds`);

        response.send(fileReponse);
    } catch (err) {
        console.error(err);
        if (err instanceof Error) {
            response.status(500).send(err.message);
        }
    }
};

interface PostFileResponse {
    file_key: string;
}
