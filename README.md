# [RAMs](https://jacobxperez.github.io/rams/)

Zero-Class Framework built with [less](http://lesscss.org/), but better.

---

## Table of Contents

* [About](#about)
    * [Features](#features)
* [Getting Started](#getting-started)
    * [Default Build](#default-build)
    * [Custom Build](#custom-build)
    * [Run Scripts](#run-scripts)
    * [Other Scripts](#other-scripts)
    * [Contributing](#contributing)
* [LICENSE](#license)
    * [Content](#content)
    * [Code](#code)

## About

[RAMs](https://jacobxperez.github.io/rams/) is a CSS framework with Zero-Class
Architecture that utilizes the power of [data-attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
for styling components. By removing class names from CSS, your HTML becomes
less cluttered easy to read, and more scalable.

### Features

* [Zero-Class Architecture](https://jacobxperez.github.io/blog/post/css/zero-class/architecture/)
* Powered by data-attributes
* Dark mode enabled
* Built with [less](http://lesscss.org/), but better

## Getting Started

Start by **[downloading](https://github.com/jacobxperez/rams/archive/master.zip)** the
[repository](https://github.com/jacobxperez/rams) or by cloning RAMs

    git clone https://github.com/jacobxperez/rams.git

Install devDependencies on your machine with [npm](https://www.npmjs.com/)

    npm install

### Default Build

Copy the pre-compiled [CSS](https://github.com/jacobxperez/rams/blob/master/css/main.css)
file into your project folder and then linking to it in HTML.

    <link rel="stylesheet" href="css/main.css">

* [/css](https://github.com/jacobxperez/rams/tree/master/css/)
    * [main.css](https://github.com/jacobxperez/rams/blob/master/css/main.css)

### Custom Build

Edit the [variables](https://github.com/jacobxperez/rams/blob/master/src/less/var.less),
add custom [modules](https://github.com/jacobxperez/rams/tree/master/src/less/modules),
then compile [main.less](https://github.com/jacobxperez/rams/blob/master/src/less/main.less)
to produce the final [CSS](https://github.com/jacobxperez/rams/blob/master/css/main.css).

* [/less](https://github.com/jacobxperez/rams/tree/master/src/less/)
    * [core](https://github.com/jacobxperez/rams/tree/master/src/less/core) (important files for compiling)
    * [modules](https://github.com/jacobxperez/rams/tree/master/src/less/modules)
    (add custom modules here)
    * [main.less](https://github.com/jacobxperez/rams/blob/master/src/less/main.less)
    (compile to produce the final [CSS](https://github.com/jacobxperez/rams/blob/master/css/main.css))
    * [var.less](https://github.com/jacobxperez/rams/blob/master/src/less/var.less)
    (variables for font, colors, and more)

### Run Scripts

On your computer terminal run these scripts to compile RAMs

* `npm run serve` to serve current build on your default browser
* `npm run build` to make current build
* `npm run public` defult public url is set to "/" on [package.json](https://github.com/jacobxperez/rams/blob/master/package.json)
* `npm run docs` locally runs documentation on your default browser

### Other Scripts

* `npm run js` to compile js files
* `npm run css` to compile less files
* `npm run js-min` to compile and minify js
* `npm run css-min` to compile and minify css


### [Contributing](https://github.com/jacobxperez/rams/blob/master/.github/CONTRIBUTING.md)

If you are interested in contributing to this project, please read our
[contributing-guidelines](https://github.com/jacobxperez/rams/blob/master/.github/CONTRIBUTING.md).

## LICENSE

Copyright (C) 2022 [Jacob Perez](https://github.com/jacobxperez)

### Content

Licensed under the [Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/) (CC BY-SA 4.0) 

### Code

Licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0) (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
