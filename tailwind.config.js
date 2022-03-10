const { base } = require('@tailwindcss/typography/src/styles');
const Components = require('laravel-mix/src/components/Components');
const { primary } = require('laravel-mix/src/Mix');
const tailwindcss = require('tailwindcss');
const { purple } = require('tailwindcss/colors');
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        "./src/**/*.{html,js}",
    ],
    theme:{
        extend: {},
    },
    


    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
