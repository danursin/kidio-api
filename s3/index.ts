import { S3 } from "aws-sdk";
import config from "../config";

const s3 = new S3({
    region: config.AWS_REGION,
    credentials: {
        accessKeyId: config.AWS_ACCESS_KEY,
        secretAccessKey: config.AWS_SECRET_KEY
    }
});

export default s3;
