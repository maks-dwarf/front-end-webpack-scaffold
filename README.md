# Webpack 4 + SCSS and JS compilation and Browser reload
This is a webpack setup, which will help you to develop great webapplication easily..
All dependencies are defined in package.json
All setting are in package.json and webpack.config.js

## When do I need it?
It can be used when you need to work with basic setup without Angular/Vue/React. It can definately be adjusted to be used with frameworks, but maybe typescript or other specific things have to be added..
I felt like we need some setup like this if we not work in Laravel, where laravelmix can be used..

## What does it do?
- transpiles ES6 and ES7 to VanillaJs(ES5), which is supported by major browsers
- supports require() function in Javascript and include in .scss
- compiles Jacascript, includes all modules, creates one main.js file, and outputs it to selected folder
- compiles SCSS to CSS, includes all other files from main file, creates one main.css file, and outputs it to selected folder 
- watching JS and SCSS files, recompiles them, when they are changed and reloads the browser..

## Installation:
cd into root folder with package.json file
run "npm i"

## Running:
run "npm run dev" to start development and watching files
go to "localhost:3000"

Production:
run "npm run build" to build files for production..

## Stop node from watching files:
press "Ctrl + C" in terminal/command line window