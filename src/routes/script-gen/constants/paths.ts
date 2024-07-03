import path from "path";

const processCwd = process.cwd();
const absPath = path.resolve("./");

console.log({ __dirname, __filename, absPath, processCwd });

export const ROUTE = processCwd + "/src/routes/script-gen";
export const PRE_SCRIPTS = ROUTE + "/pre-scripts";
