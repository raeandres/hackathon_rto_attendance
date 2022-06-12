/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./client/index.html', './client/src/**/*.{svelte,js,ts,jsx,tsx}'],
    daisyui: {
        themes: [
            {
                manulife: {
                    primary: '#00a758',
                    secondary: '#ec6453',
                    accent: '#00a758',
                    neutral: '#34384b',
                    'base-100': '#fff',
                    info: '#3ABFF8',
                    success: '#00a758',
                    warning: '#FBBD23',
                    error: '#ec6453',
                },
            },
        ],
    },
    plugins: [require('daisyui')],
};
