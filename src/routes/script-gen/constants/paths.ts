import path from "path";

const absPath = path.resolve("./");

console.log({ __dirname, __filename, absPath });

export const ROUTE = absPath + "/src/routes/script-gen";
export const PRE_SCRIPTS = ROUTE + "/pre-scripts";
