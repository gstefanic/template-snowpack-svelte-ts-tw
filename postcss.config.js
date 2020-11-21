const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');

const plugins = process.env.NODE_ENV === 'production'
	? [tailwind, autoprefixer, postcssPresetEnv, cssnano]
	: [tailwind, autoprefixer, postcssPresetEnv];

module.exports = { plugins };