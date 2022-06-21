"use strict";
const path = require('path');
module.exports = {
    plugins: {
        tailwindcss: {
            config: path.join(__dirname, 'tailwind.config.js'),
        },
        autoprefixer: {},
    },
};
//# sourceMappingURL=postcss.config.js.map