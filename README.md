# [Essentials](https://jacobxperez.github.io/essentials/)

Minimal Front-end Framework — Built with [LESS](http://lesscss.org/)

## Table of Contents

* [About](#about)
* [Getting Started](#getting-started)
    * [Default Build](#default-build)
    * [Custom Build](#custom-build)
    * [Examples](#examples)
    * [Contributing](#contributing)
* [LICENSE](#license)
    * [Content](#content)
    * [Code](#code)

## About

Unlike other monolith frameworks, [Essentials](https://jacobxperez.github.io/essentials/)
provides a minimum set of components that gives the designer the freedom to explore and discover
new designs. By removing the unnecessary, the essential simplifies the design process.

## Getting Started

Start by **[downloading](https://github.com/jacobxperez/essentials/archive/master.zip)** the [repository](https://github.com/jacobxperez/essentials) or by cloning the project:

    git clone https://github.com/jacobxperez/essentials.git

### Default Build

The easiest way to include [Essentials](https://jacobxperez.github.io/essentials/) in your
projects is by copying the pre-compiled [CSS](https://github.com/jacobxperez/essentials/blob/master/css/main.css)
file into your project folder and then linking to it in HTML.

    <link rel="stylesheet" href="css/main.css">

* [/css](https://github.com/jacobxperez/essentials/tree/master/css/less)
    * [main.css](https://github.com/jacobxperez/essentials/blob/master/css/main.css)

### Custom Build

Essentials is capable of handling and maintaining multiple [themes](https://github.com/jacobxperez/essentials/tree/master/css/themes)
utilizing the same source code. Just as in art school, the designer can quickly generate several designs to test before choosing the best option.
Check out [Editors and Plugins](http://lesscss.org/tools/#editors-and-plugins) for compiling [LESS](http://lesscss.org/).

* [/css](https://github.com/jacobxperez/essentials/tree/master/css)
    * [core](https://github.com/jacobxperez/essentials/tree/master/css/core) (**important files for compiling themes**)
    * [modules](https://github.com/jacobxperez/essentials/tree/master/css/modules) (global scope custom modules, shared between [themes](https://github.com/jacobxperez/essentials/tree/master/css/themes))
    * [themes](https://github.com/jacobxperez/essentials/tree/master/css/themes) (includes files for [main](https://github.com/jacobxperez/essentials/tree/master/css/themes/main) and [dark](https://github.com/jacobxperez/essentials/tree/master/css/themes/dark) themes)
        * [main](https://github.com/jacobxperez/essentials/tree/master/css/themes/main) (theme)
            * [modules](https://github.com/jacobxperez/essentials/tree/master/css/themes/main/modules) (local scope custom moduels, only for main theme)
            * [main.less](https://github.com/jacobxperez/essentials/blob/master/css/themes/main/main.less) (compiles to [main.css](https://github.com/jacobxperez/essentials/blob/master/css/main.css))
            * [settings.less](https://github.com/jacobxperez/essentials/blob/master/css/themes/main/settings.less) (adjust the settings)
            * [variables.less](https://github.com/jacobxperez/essentials/blob/master/css/themes/main/variables.less) (variables use as reference)
        * [dark](https://github.com/jacobxperez/essentials/tree/master/css/themes/dark) (theme)
    * [main.css](https://github.com/jacobxperez/essentials/blob/master/css/main.css) (pre-compiled [main](https://github.com/jacobxperez/essentials/tree/master/css/themes/main) theme)
    * [dark.css](https://github.com/jacobxperez/essentials/blob/master/css/dark.css) (pre-compiled [dark](https://github.com/jacobxperez/essentials/tree/master/css/themes/dark)  theme)

### Examples

These examples incorporate the framework with custom components and layouts.

* **[Company](https://github.com/jacobxperez/company)**:
A single-page website template for your company marketing.

* **[Jacob Perez](https://github.com/jacobxperez/blog)**:
Author personal website and blog template.

* **[Vaporwave Aesthetic](https://github.com/jacobxperez/vaporwave-aesthetic)**:
A template with vaporwave aesthetics.

### [Contributing](https://github.com/jacobxperez/essentials/blob/master/CONTRIBUTING.md)

Before submitting a pull request, please read our [contributing guidelines](https://github.com/jacobxperez/essentials/blob/master/CONTRIBUTING.md)
to learn more about the project.

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
