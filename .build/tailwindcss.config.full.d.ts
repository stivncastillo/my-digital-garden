export const content: never[];
export const presets: never[];
export const darkMode: string;
export namespace theme {
    export const screens: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    export function colors({ colors }: {
        colors: any;
    }): {
        inherit: any;
        current: any;
        transparent: any;
        black: any;
        white: any;
        slate: any;
        gray: any;
        zinc: any;
        neutral: any;
        stone: any;
        red: any;
        orange: any;
        amber: any;
        yellow: any;
        lime: any;
        green: any;
        emerald: any;
        teal: any;
        cyan: any;
        sky: any;
        blue: any;
        indigo: any;
        violet: any;
        purple: any;
        fuchsia: any;
        pink: any;
        rose: any;
    };
    export const columns: {
        auto: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
    };
    export const spacing: {
        px: string;
        0: string;
        0.5: string;
        1: string;
        1.5: string;
        2: string;
        2.5: string;
        3: string;
        3.5: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    export namespace animation {
        const none: string;
        const spin: string;
        const ping: string;
        const pulse: string;
        const bounce: string;
    }
    export namespace aspectRatio {
        const auto: string;
        const square: string;
        const video: string;
    }
    export function backdropBlur({ theme }: {
        theme: any;
    }): any;
    export function backdropBrightness({ theme }: {
        theme: any;
    }): any;
    export function backdropContrast({ theme }: {
        theme: any;
    }): any;
    export function backdropGrayscale({ theme }: {
        theme: any;
    }): any;
    export function backdropHueRotate({ theme }: {
        theme: any;
    }): any;
    export function backdropInvert({ theme }: {
        theme: any;
    }): any;
    export function backdropOpacity({ theme }: {
        theme: any;
    }): any;
    export function backdropSaturate({ theme }: {
        theme: any;
    }): any;
    export function backdropSepia({ theme }: {
        theme: any;
    }): any;
    export function backgroundColor({ theme }: {
        theme: any;
    }): any;
    export const backgroundImage: {
        none: string;
        'gradient-to-t': string;
        'gradient-to-tr': string;
        'gradient-to-r': string;
        'gradient-to-br': string;
        'gradient-to-b': string;
        'gradient-to-bl': string;
        'gradient-to-l': string;
        'gradient-to-tl': string;
    };
    export function backgroundOpacity({ theme }: {
        theme: any;
    }): any;
    export const backgroundPosition: {
        bottom: string;
        center: string;
        left: string;
        'left-bottom': string;
        'left-top': string;
        right: string;
        'right-bottom': string;
        'right-top': string;
        top: string;
    };
    export namespace backgroundSize {
        const auto_1: string;
        export { auto_1 as auto };
        export const cover: string;
        export const contain: string;
    }
    export const blur: {
        0: string;
        none: string;
        sm: string;
        DEFAULT: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
    };
    export const brightness: {
        0: string;
        50: string;
        75: string;
        90: string;
        95: string;
        100: string;
        105: string;
        110: string;
        125: string;
        150: string;
        200: string;
    };
    export function borderColor({ theme }: {
        theme: any;
    }): any;
    export function borderOpacity({ theme }: {
        theme: any;
    }): any;
    export const borderRadius: {
        none: string;
        sm: string;
        DEFAULT: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        full: string;
    };
    export const borderWidth: {
        DEFAULT: string;
        0: string;
        2: string;
        4: string;
        8: string;
    };
    export const boxShadow: {
        sm: string;
        DEFAULT: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        inner: string;
        none: string;
    };
    export function boxShadowColor({ theme }: {
        theme: any;
    }): any;
    export function caretColor({ theme }: {
        theme: any;
    }): any;
    export function accentColor({ theme }: {
        theme: any;
    }): any;
    export const contrast: {
        0: string;
        50: string;
        75: string;
        100: string;
        125: string;
        150: string;
        200: string;
    };
    export const container: {};
    export namespace content_1 {
        const none_1: string;
        export { none_1 as none };
    }
    export { content_1 as content };
    export const cursor: {
        auto: string;
        default: string;
        pointer: string;
        wait: string;
        text: string;
        move: string;
        help: string;
        'not-allowed': string;
        none: string;
        'context-menu': string;
        progress: string;
        cell: string;
        crosshair: string;
        'vertical-text': string;
        alias: string;
        copy: string;
        'no-drop': string;
        grab: string;
        grabbing: string;
        'all-scroll': string;
        'col-resize': string;
        'row-resize': string;
        'n-resize': string;
        'e-resize': string;
        's-resize': string;
        'w-resize': string;
        'ne-resize': string;
        'nw-resize': string;
        'se-resize': string;
        'sw-resize': string;
        'ew-resize': string;
        'ns-resize': string;
        'nesw-resize': string;
        'nwse-resize': string;
        'zoom-in': string;
        'zoom-out': string;
    };
    export function divideColor({ theme }: {
        theme: any;
    }): any;
    export function divideOpacity({ theme }: {
        theme: any;
    }): any;
    export function divideWidth({ theme }: {
        theme: any;
    }): any;
    export const dropShadow: {
        sm: string;
        DEFAULT: string[];
        md: string[];
        lg: string[];
        xl: string[];
        '2xl': string;
        none: string;
    };
    export function fill({ theme }: {
        theme: any;
    }): any;
    export const grayscale: {
        0: string;
        DEFAULT: string;
    };
    export const hueRotate: {
        0: string;
        15: string;
        30: string;
        60: string;
        90: string;
        180: string;
    };
    export const invert: {
        0: string;
        DEFAULT: string;
    };
    export const flex: {
        1: string;
        auto: string;
        initial: string;
        none: string;
    };
    export function flexBasis({ theme }: {
        theme: any;
    }): any;
    export const flexGrow: {
        0: string;
        DEFAULT: string;
    };
    export const flexShrink: {
        0: string;
        DEFAULT: string;
    };
    export namespace fontFamily {
        const sans: string[];
        const serif: string[];
        const mono: string[];
    }
    export const fontSize: {
        xs: (string | {
            lineHeight: string;
        })[];
        sm: (string | {
            lineHeight: string;
        })[];
        base: (string | {
            lineHeight: string;
        })[];
        lg: (string | {
            lineHeight: string;
        })[];
        xl: (string | {
            lineHeight: string;
        })[];
        '2xl': (string | {
            lineHeight: string;
        })[];
        '3xl': (string | {
            lineHeight: string;
        })[];
        '4xl': (string | {
            lineHeight: string;
        })[];
        '5xl': (string | {
            lineHeight: string;
        })[];
        '6xl': (string | {
            lineHeight: string;
        })[];
        '7xl': (string | {
            lineHeight: string;
        })[];
        '8xl': (string | {
            lineHeight: string;
        })[];
        '9xl': (string | {
            lineHeight: string;
        })[];
    };
    export namespace fontWeight {
        const thin: string;
        const extralight: string;
        const light: string;
        const normal: string;
        const medium: string;
        const semibold: string;
        const bold: string;
        const extrabold: string;
        const black: string;
    }
    export function gap({ theme }: {
        theme: any;
    }): any;
    export function gradientColorStops({ theme }: {
        theme: any;
    }): any;
    export namespace gridAutoColumns {
        const auto_2: string;
        export { auto_2 as auto };
        export const min: string;
        export const max: string;
        export const fr: string;
    }
    export namespace gridAutoRows {
        const auto_3: string;
        export { auto_3 as auto };
        const min_1: string;
        export { min_1 as min };
        const max_1: string;
        export { max_1 as max };
        const fr_1: string;
        export { fr_1 as fr };
    }
    export const gridColumn: {
        auto: string;
        'span-1': string;
        'span-2': string;
        'span-3': string;
        'span-4': string;
        'span-5': string;
        'span-6': string;
        'span-7': string;
        'span-8': string;
        'span-9': string;
        'span-10': string;
        'span-11': string;
        'span-12': string;
        'span-full': string;
    };
    export const gridColumnEnd: {
        auto: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
    };
    export const gridColumnStart: {
        auto: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
    };
    export const gridRow: {
        auto: string;
        'span-1': string;
        'span-2': string;
        'span-3': string;
        'span-4': string;
        'span-5': string;
        'span-6': string;
        'span-full': string;
    };
    export const gridRowStart: {
        auto: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
    };
    export const gridRowEnd: {
        auto: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
    };
    export const gridTemplateColumns: {
        none: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
    };
    export const gridTemplateRows: {
        none: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    export function height({ theme }: {
        theme: any;
    }): any;
    export function inset({ theme }: {
        theme: any;
    }): any;
    export namespace keyframes {
        export namespace spin_1 {
            namespace to {
                const transform: string;
            }
        }
        export { spin_1 as spin };
        const ping_1: {
            '75%, 100%': {
                transform: string;
                opacity: string;
            };
        };
        export { ping_1 as ping };
        const pulse_1: {
            '50%': {
                opacity: string;
            };
        };
        export { pulse_1 as pulse };
        const bounce_1: {
            '0%, 100%': {
                transform: string;
                animationTimingFunction: string;
            };
            '50%': {
                transform: string;
                animationTimingFunction: string;
            };
        };
        export { bounce_1 as bounce };
    }
    export namespace letterSpacing {
        export const tighter: string;
        export const tight: string;
        const normal_1: string;
        export { normal_1 as normal };
        export const wide: string;
        export const wider: string;
        export const widest: string;
    }
    export const lineHeight: {
        none: string;
        tight: string;
        snug: string;
        normal: string;
        relaxed: string;
        loose: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
    };
    export namespace listStyleType {
        const none_2: string;
        export { none_2 as none };
        export const disc: string;
        export const decimal: string;
    }
    export function margin({ theme }: {
        theme: any;
    }): any;
    export function maxHeight({ theme }: {
        theme: any;
    }): any;
    export function maxWidth({ theme, breakpoints }: {
        theme: any;
        breakpoints: any;
    }): any;
    export const minHeight: {
        0: string;
        full: string;
        screen: string;
        min: string;
        max: string;
        fit: string;
    };
    export const minWidth: {
        0: string;
        full: string;
        min: string;
        max: string;
        fit: string;
    };
    export const objectPosition: {
        bottom: string;
        center: string;
        left: string;
        'left-bottom': string;
        'left-top': string;
        right: string;
        'right-bottom': string;
        'right-top': string;
        top: string;
    };
    export const opacity: {
        0: string;
        5: string;
        10: string;
        20: string;
        25: string;
        30: string;
        40: string;
        50: string;
        60: string;
        70: string;
        75: string;
        80: string;
        90: string;
        95: string;
        100: string;
    };
    export const order: {
        first: string;
        last: string;
        none: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
    };
    export function padding({ theme }: {
        theme: any;
    }): any;
    export function placeholderColor({ theme }: {
        theme: any;
    }): any;
    export function placeholderOpacity({ theme }: {
        theme: any;
    }): any;
    export function outlineColor({ theme }: {
        theme: any;
    }): any;
    export const outlineOffset: {
        0: string;
        1: string;
        2: string;
        4: string;
        8: string;
    };
    export const outlineWidth: {
        0: string;
        1: string;
        2: string;
        4: string;
        8: string;
    };
    export function ringColor({ theme }: {
        theme: any;
    }): any;
    export function ringOffsetColor({ theme }: {
        theme: any;
    }): any;
    export const ringOffsetWidth: {
        0: string;
        1: string;
        2: string;
        4: string;
        8: string;
    };
    export function ringOpacity({ theme }: {
        theme: any;
    }): any;
    export const ringWidth: {
        DEFAULT: string;
        0: string;
        1: string;
        2: string;
        4: string;
        8: string;
    };
    export const rotate: {
        0: string;
        1: string;
        2: string;
        3: string;
        6: string;
        12: string;
        45: string;
        90: string;
        180: string;
    };
    export const saturate: {
        0: string;
        50: string;
        100: string;
        150: string;
        200: string;
    };
    export const scale: {
        0: string;
        50: string;
        75: string;
        90: string;
        95: string;
        100: string;
        105: string;
        110: string;
        125: string;
        150: string;
    };
    export function scrollMargin({ theme }: {
        theme: any;
    }): any;
    export function scrollPadding({ theme }: {
        theme: any;
    }): any;
    export const sepia: {
        0: string;
        DEFAULT: string;
    };
    export const skew: {
        0: string;
        1: string;
        2: string;
        3: string;
        6: string;
        12: string;
    };
    export function space({ theme }: {
        theme: any;
    }): any;
    export function stroke({ theme }: {
        theme: any;
    }): any;
    export const strokeWidth: {
        0: string;
        1: string;
        2: string;
    };
    export function textColor({ theme }: {
        theme: any;
    }): any;
    export function textDecorationColor({ theme }: {
        theme: any;
    }): any;
    export const textDecorationThickness: {
        auto: string;
        'from-font': string;
        0: string;
        1: string;
        2: string;
        4: string;
        8: string;
    };
    export const textUnderlineOffset: {
        auto: string;
        0: string;
        1: string;
        2: string;
        4: string;
        8: string;
    };
    export function textIndent({ theme }: {
        theme: any;
    }): any;
    export function textOpacity({ theme }: {
        theme: any;
    }): any;
    export const transformOrigin: {
        center: string;
        top: string;
        'top-right': string;
        right: string;
        'bottom-right': string;
        bottom: string;
        'bottom-left': string;
        left: string;
        'top-left': string;
    };
    export const transitionDelay: {
        75: string;
        100: string;
        150: string;
        200: string;
        300: string;
        500: string;
        700: string;
        1000: string;
    };
    export const transitionDuration: {
        DEFAULT: string;
        75: string;
        100: string;
        150: string;
        200: string;
        300: string;
        500: string;
        700: string;
        1000: string;
    };
    export namespace transitionProperty {
        const none_3: string;
        export { none_3 as none };
        export const all: string;
        export const DEFAULT: string;
        const colors_1: string;
        export { colors_1 as colors };
        const opacity_1: string;
        export { opacity_1 as opacity };
        export const shadow: string;
        const transform_1: string;
        export { transform_1 as transform };
    }
    export const transitionTimingFunction: {
        DEFAULT: string;
        linear: string;
        in: string;
        out: string;
        'in-out': string;
    };
    export function translate({ theme }: {
        theme: any;
    }): any;
    export function width({ theme }: {
        theme: any;
    }): any;
    export namespace willChange {
        const auto_4: string;
        export { auto_4 as auto };
        export const scroll: string;
        export const contents: string;
        const transform_2: string;
        export { transform_2 as transform };
    }
    export const zIndex: {
        auto: string;
        0: string;
        10: string;
        20: string;
        30: string;
        40: string;
        50: string;
    };
}
export const variantOrder: string[];
export const plugins: never[];
