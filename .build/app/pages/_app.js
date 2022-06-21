"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../styles/globals.css");
const react_1 = __importStar(require("react"));
const next_themes_1 = require("next-themes");
const Container_1 = __importDefault(require("../components/Layout/Container"));
const Navbar_1 = __importDefault(require("../components/Layout/Navbar"));
const Footer_1 = __importDefault(require("../components/Layout/Footer"));
const router_1 = require("next/router");
function MyApp({ Component, pageProps }) {
    const router = (0, router_1.useRouter)();
    const pageView = (url, title) => {
        window &&
            window.dataLayer &&
            window.dataLayer.push({
                event: 'virtualPageview',
                virtualPageURL: url,
                virtualPageTitle: title,
            });
    };
    (0, react_1.useEffect)(() => {
        pageView(router.pathname, document.title);
        const handleRouteChange = (url) => {
            pageView(url, document.title);
        };
        router_1.Router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router_1.Router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);
    return (react_1.default.createElement(next_themes_1.ThemeProvider, { attribute: "class" },
        react_1.default.createElement(Container_1.default, null,
            react_1.default.createElement(Navbar_1.default, null),
            react_1.default.createElement("main", { className: "flex flex-col mx-auto max-w-4xl pt-12 px-4 md:px-8 mb-8 flex-grow w-full" },
                react_1.default.createElement(Component, { ...pageProps })),
            react_1.default.createElement(Footer_1.default, null))));
}
exports.default = MyApp;
//# sourceMappingURL=_app.js.map