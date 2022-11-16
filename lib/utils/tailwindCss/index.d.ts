export declare const tailwindCssConfig: {
    content: string[];
    plugins: {
        handler: import("tailwindcss/types/config").PluginCreator;
        config?: Partial<import("tailwindcss/types/config").Config> | undefined;
    }[];
    theme: {
        extend: {
            borderRadius: {
                "4xl": string;
            };
            boxShadow: {
                DEFAULT: string;
                lg: string;
                md: string;
                sm: string;
                xs: string;
            };
            colors: {
                black: {
                    DEFAULT: string;
                    opacity: string;
                };
                blue: {
                    600: string;
                    700: string;
                    DEFAULT: string;
                };
                current: string;
                cyan: {
                    600: string;
                    700: string;
                    DEFAULT: string;
                };
                facebook: {
                    DEFAULT: string;
                };
                gray: {
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    50: string;
                    500: string;
                    600: string;
                    700: string;
                };
                green: {
                    DEFAULT: string;
                };
                line: {
                    DEFAULT: string;
                };
                overlay: {
                    DEFAULT: string;
                };
                pink: {
                    600: string;
                    700: string;
                    DEFAULT: string;
                };
                purple: {
                    100: string;
                    200: string;
                    400: string;
                    500: string;
                    600: string;
                    700: string;
                    DEFAULT: string;
                };
                red: {
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                    DEFAULT: string;
                };
                transparent: string;
                twitter: {
                    DEFAULT: string;
                };
                yellow: {
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                    600: string;
                    700: string;
                    DEFAULT: string;
                };
            };
            fontSize: {
                xxs: string[];
            };
            maxWidth: {
                inner: number;
                xs: number;
                xxs: number;
            };
            screens: {
                xl: string;
            };
            width: {
                inner: number;
            };
        };
        fill: (theme: any) => {
            black: any;
            current: string;
            purple: any;
            white: any;
        };
        stroke: (theme: any) => {
            black: any;
            current: string;
            purple: any;
            white: any;
        };
    };
};
//# sourceMappingURL=index.d.ts.map