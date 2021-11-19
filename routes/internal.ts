import * as express from "express";
import * as multer from "multer";

import { GetFileHandler, GetFileRoute } from "../handlers/internal/GetFile";
import { PostDestroyHandler, PostDestroyRoute } from "../handlers/internal/PostDestroy";
import { PostFileHandler, PostFileRoute } from "../handlers/internal/PostFile";
import { PostInsertHandler, PostInsertRoute } from "../handlers/internal/PostInsert";
import { PostQueryHandler, PostQueryRoute } from "../handlers/internal/PostQuery";
import { PostUpdateHandler, PostUpdateRoute } from "../handlers/internal/PostUpdate";

const register = (): express.Router => {
    const router: express.Router = express.Router();

    router.post(PostDestroyRoute, PostDestroyHandler);
    router.post(PostInsertRoute, PostInsertHandler);
    router.post(PostQueryRoute, PostQueryHandler);
    router.post(PostUpdateRoute, PostUpdateHandler);
    router.get(GetFileRoute, GetFileHandler);
    router.post(PostFileRoute, multer().single("file"), PostFileHandler);

    return router;
};

export default register;
