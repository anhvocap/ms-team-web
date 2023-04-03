import * as express from "express";
import authService from "../services/authService";
import * as info from "../../../package.json";
const router = express.Router();

router.get("/status", function (req, res, next) {
    console.log("- WEB_INFO:", process.env.WEB_INFO);
    res.json({
        status: true,
        message: `${info.name} execute get success`,
        version: info.version,
        web_info: process.env.WEB_INFO
    });
    next();
});

router.post("/token", async function (req, res) {
    try {
        const appSecret = req.header("app_secret") as string;

        if (!appSecret) {
            throw new Error("application secret key is required");
        }

        if (appSecret !== process.env.APP_SECRET) {
            throw new Error("application secret key is invalid");
        }

        const data = await authService.getAccessToken();
        res.json({ status: true, data });
    } catch (err) {
        res.send({ status: 400, message: err.message });
    }
});

export default router;
