import generateExpressScript from "../express";

export type ScriptType = "express";

export default function generateScript(scriptType: ScriptType): string {
  switch (scriptType) {
    case "express":
      return generateExpressScript();
    default:
      return "";
  }
}
