"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterNotes = exports.groupBy = exports.formatDate = void 0;
const format_1 = __importDefault(require("date-fns/format"));
const formatDate = (value) => {
    const formattedDate = value.replace(/-/g, '/');
    const date = (0, format_1.default)(new Date(formattedDate), 'MMM yyyy');
    return date;
};
exports.formatDate = formatDate;
const groupBy = (xs, key) => {
    return xs.reduce((rv, x) => {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};
exports.groupBy = groupBy;
const filterNotes = (notes, query) => {
    const filteredNotes = notes
        .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
        .filter((note) => {
        if (query.category) {
            return note.category === query.category;
        }
        return true;
    });
    const finalNotes = (0, exports.groupBy)(filteredNotes, 'category');
    return finalNotes;
};
exports.filterNotes = filterNotes;
//# sourceMappingURL=utils.js.map