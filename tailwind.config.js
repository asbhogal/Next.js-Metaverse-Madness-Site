/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './app/**/*.{html,js,jsx}',
        './components/**/*.{html,js,jsx}',
        './sections/**/*.{html,js,jsx}',
        './styles/**/*.{js,jsx}',
        ],
        theme: {
            extend: {
                colors: {
                'DarkGunmetal': '#1a232e',
                'ChineseSilver': '#c7c7c7',
                },
                transitionTimingFunction: {
                'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
                },
            },
        },
    plugins: [],
};