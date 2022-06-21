"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
const flattenArray = (input) => input.reduce((acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])], []);
const map = (fn) => (input) => input.map(fn);
const walkDir = (fullPath) => {
    return fs_1.default.statSync(fullPath).isFile() ? fullPath : getAllFilesRecursively(fullPath);
};
const pathJoinPrefix = (prefix) => (extraPath) => path_1.default.join(prefix, extraPath);
const getAllFilesRecursively = (folder) => pipe(fs_1.default.readdirSync, map(pipe(pathJoinPrefix(folder), walkDir)), flattenArray)(folder);
exports.default = getAllFilesRecursively;
//# sourceMappingURL=files.js.map