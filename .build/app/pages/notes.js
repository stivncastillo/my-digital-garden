"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = void 0;
const react_1 = __importDefault(require("react"));
const head_1 = __importDefault(require("next/head"));
const mdx_1 = require("../lib/mdx");
const notes_1 = require("../utils/notes");
const router_1 = require("next/router");
const link_1 = __importDefault(require("next/link"));
const core_1 = require("@digitalgarden/core");
const product_notes_1 = require("@digitalgarden/product-notes");
const Notes = ({ notes }) => {
    const { query } = (0, router_1.useRouter)();
    const filteredNotes = notes
        .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
        .filter((note) => {
        if (query.category) {
            return note.category === query.category;
        }
        return true;
    });
    const finalNotes = (0, notes_1.groupBy)(filteredNotes, 'category');
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(head_1.default, null,
            react_1.default.createElement("title", null, "Stiven Castillo | Notes")),
        react_1.default.createElement("h1", { className: "text-3xl mb-2" }, "Notes"),
        react_1.default.createElement("p", { className: "text-slate-500 dark:text-slate-300 font-thin text-xl mb-4" }, "Bienvenidos a mis notas, recortes y bookmarks que adornan mi Digital Garden. Este espacio lo uso para anotar y compartir cosas que me ayudan en mi d\u00EDa a d\u00EDa como desarrollador."),
        react_1.default.createElement("p", { className: "text-sm text-slate-400 dark:text-slate-500" }, "Disfutenlo y cuidado me pisa el c\u00E9sped!"),
        !Object.keys(finalNotes).length && (react_1.default.createElement(core_1.Alert, null,
            query.category
                ? `Aún no tengo notas de ${query.category}, sorry 🙈`
                : 'Aún no tengo notas de este tema, sorry 🙈.',
            ' ',
            react_1.default.createElement(link_1.default, { href: "/" },
                react_1.default.createElement("a", { className: "text-indigo-500  underline" }, "Ir al Inicio")))),
        react_1.default.createElement(product_notes_1.Notes, { notes: notes, query: query })));
};
async function getStaticProps() {
    const notes = await (0, mdx_1.getAllFilesFrontMatter)('notes');
    return {
        props: {
            notes,
        },
    };
}
exports.getStaticProps = getStaticProps;
exports.default = Notes;
//# sourceMappingURL=notes.js.map