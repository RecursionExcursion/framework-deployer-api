import express from "express";
import generateScript, { ScriptType } from "./lib/script-generation/scriptGenerator";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

router.get("/dl", (req, res) => {
  const scriptType = req.query.type as ScriptType;

  if (!scriptType) return res.status(400).send("Invalid script type");

  const script = generateScript(scriptType);

  const fileName = "script.mjs";
  res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
  res.setHeader("Content-Type", "application/javascript");

  res.write(script);
  res.end();
});

export default router;
