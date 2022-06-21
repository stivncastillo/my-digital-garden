"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notes = void 0;
const react_1 = __importDefault(require("react"));
const note_list_1 = require("./ui/note-list");
const utils_1 = require("./utils");
const Notes = ({ notes, query }) => {
    const noteList = (0, utils_1.filterNotes)(notes, query);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(note_list_1.NoteList, { notes: noteList })));
};
exports.Notes = Notes;
//# sourceMappingURL=index.js.map