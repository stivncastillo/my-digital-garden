"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteList = void 0;
const react_1 = __importDefault(require("react"));
const md_1 = require("react-icons/md");
const note_card_1 = require("../note-card");
const NoteList = ({ notes }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null, Object.keys(notes).map((category, index) => {
        const notesCategory = notes[category];
        return (react_1.default.createElement("div", { key: `category-${index}`, className: "mb-4" },
            react_1.default.createElement("div", { className: "flex flex-row items-center space-x-2 mb-2" },
                react_1.default.createElement("div", { className: "text-2xl" },
                    react_1.default.createElement(md_1.MdFolderOpen, null)),
                react_1.default.createElement("h3", { className: "text-2xl mb-0 mt-0" }, category)),
            notesCategory.map((frontMatter, index) => (react_1.default.createElement("div", { key: `note-${index}`, className: "flex flex-col px-4" },
                react_1.default.createElement(note_card_1.NoteCard, { data: frontMatter }))))));
    })));
};
exports.NoteList = NoteList;
//# sourceMappingURL=index.js.map