module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        extend: {
            colors: {
                smart: {
                    50: '#ffe8e8',
                    100: '#f3c1c3',
                    200: '#e5999c',
                    300: '#da7175',
                    400: '#cf4a4e',
                    500: '#b53035',
                    600: '#8e2528',
                    700: '#661a1d',
                    800: '#3e0d10',
                    900: '#1b0203',
                },
                bms: {
                    50: '#efeffd',
                    100: '#d0d3e4',
                    200: '#b2b5cd',
                    300: '#9397b8',
                    400: '#757aa3',
                    500: '#5b6089',
                    600: '#464b6b',
                    700: '#333545',
                    800: '#2E3147',
                    900: '#070b16',
                }
            }
        },

    },
    variants: {
        extend: {},
    },
    plugins: [],
}