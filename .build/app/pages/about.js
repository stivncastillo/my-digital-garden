"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const head_1 = __importDefault(require("next/head"));
const image_1 = __importDefault(require("next/image"));
const react_1 = __importDefault(require("react"));
const SocialList_1 = __importDefault(require("../components/Social/SocialList"));
const About = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(head_1.default, null,
            react_1.default.createElement("title", null, "Stiven Castillo | About me"),
            react_1.default.createElement("meta", { name: "description", content: "Stiven Castillo es un desarrollador frontend y dise\u00F1ador de interfaces de usuario, trabaja en Elenas app." }),
            react_1.default.createElement("link", { rel: "icon", href: "/favicon.ico" })),
        react_1.default.createElement("figure", { className: "flex flex-col-reverse justify-start mb-2" },
            react_1.default.createElement("div", { className: "flex flex-col flex-1 space-y-4 mt-4" },
                react_1.default.createElement("p", { className: "text-slate-500 dark:text-slate-300 font-thin text-xl" }, "Frontend developer at Elenas. Begginer writer, speaker, UI Designer and Tattoo entusiast, based in Armenia, Colombia."),
                react_1.default.createElement("p", { className: "text-slate-500 dark:text-slate-300 font-thin" }, "Desde que aprend\u00ED a programar en el colegio mi pasi\u00F3n por crear sistemas ha aumentado con el paso del tiempo. Inicie estudiando Sistemas pero luego comprend\u00ED que mi pasi\u00F3n era trabajar en el lado del dise\u00F1o de interfaces y experiencia de usuario. Desde entonces me he preparado para dise\u00F1ar expeciencias de usuario en aplicaciones m\u00F3viles y web como desarrollador Frontend."),
                react_1.default.createElement("p", { className: "text-slate-500 dark:text-slate-300 font-thin" },
                    "En mis tiempos libres y para salir de la rutina me dedico al arte del tattoo (",
                    react_1.default.createElement("a", { className: "text-sm underline text-indigo-500 dark:text-amber-400", href: "https://instagram.com/mecastasis", target: "_blank" }, "@mecastasis"),
                    "), algo de carpinter\u00EDa y a dedicarle tiempo a mi hijo :)."),
                react_1.default.createElement("p", { className: "text-slate-500 dark:text-slate-300 font-thin" }, "Este sitio es mi casa en l\u00EDnea y lo utilizo para compartir conocimiento, notas y pensamientos sobre desarrollo y dise\u00F1o web/movil, adem\u00E1s, d\u00F3nde mantengo un registro de mi trabajo y cosas que encuentro en la red que me ayuda en mi d\u00EDa a d\u00EDa profesional.")),
            react_1.default.createElement("div", { className: "w-24" },
                react_1.default.createElement(image_1.default, { src: "/assets/images/profile.jpg", alt: "Profile", height: 800, width: 800, className: "rounded-full" }))),
        react_1.default.createElement("div", { className: "my-4" },
            react_1.default.createElement(SocialList_1.default, null))));
};
exports.default = About;
//# sourceMappingURL=about.js.map