# [RAMs](https://jacobxperez.github.io/rams/)

A [Class Less](https://jacobxperez.github.io/blog/post/css/class-less-architecture/) CSS Design Framework

---

## Table of Contents

-   [About](#about)
-   [Getting Started](#getting-started)
    -   [Build](#build)
    -   [Compile](#compile)
    -   [Examples](#examples)
    -   [Contributing](#contributing)
-   [LICENSE](#license)
    -   [Content](#content)
    -   [Code](#code)

## About

[RAMs](https://jacobxperez.github.io/rams/) is a [class less](https://jacobxperez.github.io/blog/post/css/class-less-architecture/)
css framework that utilizes the power of [data-attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
for styling components.

## Getting Started

Start by **[downloading](https://github.com/jacobxperez/rams/archive/master.zip)** the
[repository](https://github.com/jacobxperez/rams) or by cloning RAMs

    git clone https://github.com/jacobxperez/rams.git

Install devDependencies on your machine with [npm](https://www.npmjs.com/)

    npm install

### Build

Edit the [variables](https://github.com/jacobxperez/rams/blob/master/src/css/var.scss), add
[custom](https://github.com/jacobxperez/rams/tree/master/src/css/custom) modules and linked
them to [main.scss](https://github.com/jacobxperez/rams/blob/master/src/css/main.scss) for compiling.

-   [/css](https://github.com/jacobxperez/rams/tree/master/src/css/)
    -   [core](https://github.com/jacobxperez/rams/tree/master/src/css/core) (important files for compiling)
    -   [custom](https://github.com/jacobxperez/rams/tree/master/src/css/custom) (add custom modules here)
    -   [main.scss](https://github.com/jacobxperez/rams/blob/master/src/css/main.scss) (compile to produce the final CSS)
    -   [var.scss](https://github.com/jacobxperez/rams/blob/master/src/css/var.scss) (variables for font, colors, and more)

### Compile

On your terminal run these scripts to compile

-   `npm run docs` locally runs documentation
-   `npm run dev` serve current development build
-   `npm run watch` watch for changes but does not start server
-   `npm run build` make current build but does not start server
-   `npm run public` makes public build and sets url to "/" can be changed on [package.json](https://github.com/jacobxperez/rams/blob/master/package.json)

### Examples

These examples incorporate the framework with custom modules

-   [Jacob Perez](https://github.com/jacobxperez/blog): I am a front-end web developer and designer.
-   [Company](https://github.com/jacobxperez/company): A single page website template for your business marketing

**note:** these examples may contain an older version of RAMs 

### [Contributing](https://github.com/jacobxperez/rams/blob/master/.github/CONTRIBUTING.md)

If you are interested in contributing to this project, please read our
[contributing-guidelines](https://github.com/jacobxperez/rams/blob/master/.github/CONTRIBUTING.md).

## LICENSE

Copyright (C) 2023 [Jacob Perez](https://github.com/jacobxperez)

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
