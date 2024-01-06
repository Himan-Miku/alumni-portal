import { Router } from "express";
import { getMetadata, sendMediaUrl } from "../controllers/metadataController";

let router = Router();

router.route("/metadata").post(getMetadata).get(sendMediaUrl);

export default router;
