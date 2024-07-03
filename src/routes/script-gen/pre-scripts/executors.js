/* eslint-disable @typescript-eslint/no-unused-vars */

import { execSync } from "child_process";
import fs from "fs";

/**
 * @param {string} command
 */
const execute = (command) => {
  if (!isNonEmptyString(command)) {
    throw new Error("Invalid command");
  }
  execSync(command, { stdio: "inherit" });
};

/**
 * @param {string} dirPath
 */
const createDir = (dirPath) => {
  if (!isNonEmptyString(dirPath)) throw new Error("Invalid directory name");

  fs.mkdirSync(dirPath);
};

/**
 * @param {string} filePath
 * @param {string} content
 */
const writeFile = (filePath, content) => {
  if (!isNonEmptyString(filePath) || !isNonEmptyString(content))
    throw new Error("Invalid file path or content");

  fs.writeFileSync(filePath, content);
};

/**
 * @param {string} filePath
 * @returns {string}
 */
const readFile = (filePath) => {
  if (!isNonEmptyString(filePath)) {
    throw new Error("Invalid path name");
  }

  const fileData = fs.readFileSync(filePath, "utf8");
  return fileData;
};

/**
 * @param {string} value
 */
const isNonEmptyString = (value) => {
  return typeof value === "string" && value !== "";
};
