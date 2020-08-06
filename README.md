# [Essentials](https://jacobxperez.github.io/essentials/)

Modular CSS Framework — Built with LESS

## Table of Contents

* [About](#about)
    * [Project Status](#project-status)
* [Getting Started](#getting-started)
    * [Default Build](#default-build)
    * [Custom Build](#custom-build)
* [Contributing](#contributing)
    * [Bug Reports](#bug-reports)
    * [Feature Requests](#feature-requests)
    * [Pull Requests](#pull-requests)
* [Design Principles](#design-principles)
* [LICENSE](#license)

## About

[Essentials](https://jacobxperez.github.io/essentials/) is a modular CSS framework build with [LESS](http://lesscss.org/). It contains all necessary components to build a website this includes a grid system, typography, navigation, dropdowns, and mixins.

### Project Status

Project under active development. Rather then releasing a version each module has been assigned a unique version.

## Getting Started

Start by **[downloading](https://github.com/jacobxperez/essentials/archive/master.zip)** the [repository](https://github.com/jacobxperez/essentials) or by cloning the project:

    $ git clone https://github.com/jacobxperez/essentials.git

### Default Build

The easiest way to include [Essentials](https://jacobxperez.github.io/essentials/) in your projects is by copying the pre-compiled [CSS](https://github.com/jacobxperez/essentials/blob/master/css/style.css) file into your project folder and then link to it in HTML.

* [/css/style.css](https://github.com/jacobxperez/essentials/blob/master/css/style.css)

### Custom Build

[Essentials](https://jacobxperez.github.io/essentials/) is built on [LESS](http://lesscss.org/) which extends the capabilities of CSS. To import [custom](https://github.com/jacobxperez/essentials/tree/master/css/less/custom) modules use the file [custom.less](https://github.com/jacobxperez/essentials/blob/master/css/custom.less) then compile everything with the file [style.less](https://github.com/jacobxperez/essentials/blob/master/css/style.less) to produce the final [CSS](https://github.com/jacobxperez/essentials/blob/master/css/style.css).

* [/css](https://github.com/jacobxperez/essentials/tree/master/css)
    * [style.less](https://github.com/jacobxperez/essentials/blob/master/css/style.less) (compiling final [CSS](https://github.com/jacobxperez/essentials/blob/master/css/style.css))
    * [custom.less](https://github.com/jacobxperez/essentials/blob/master/css/custom.less) (custom imports)

All components and dependencies can be found under folder [core](https://github.com/jacobxperez/essentials/tree/master/css/less/core). To ensure future compatibility we recommend adding extra modules under folder [custom](https://github.com/jacobxperez/essentials/tree/master/css/less/custom) then link to them on file [custom.less](https://github.com/jacobxperez/essentials/blob/master/css/custom.less) for compiling.

* [/css/less](https://github.com/jacobxperez/essentials/tree/master/css/less)
    * [core](https://github.com/jacobxperez/essentials/tree/master/css/less/core)
    * [custom](https://github.com/jacobxperez/essentials/tree/master/css/less/custom)

The [core](https://github.com/jacobxperez/essentials/tree/master/css/less/core) folder has all CSS modules organized by type.

* [less/core](https://github.com/jacobxperez/essentials/tree/master/css/less/core)
    * [components](https://github.com/jacobxperez/essentials/tree/master/css/less/core/components)
    * [mixins](https://github.com/jacobxperez/essentials/tree/master/css/less/core/mixins)
    * [variables](https://github.com/jacobxperez/essentials/tree/master/css/less/core/variables)
    * [imports](https://github.com/jacobxperez/essentials/tree/master/css/less/core/imports)

The [mixins](https://github.com/jacobxperez/essentials/tree/master/css/less/core/mixins) folder is where all LESS functions are kept.

* [less/core](https://github.com/jacobxperez/essentials/tree/master/css/less/core)
    * [mixins](https://github.com/jacobxperez/essentials/tree/master/css/less/core/mixins)

The [variables](https://github.com/jacobxperez/essentials/tree/master/css/less/core/variables) folder has all necessary files to adjust the settings of your website.

* [less/core](https://github.com/jacobxperez/essentials/tree/master/css/less/core)
    * [variables](https://github.com/jacobxperez/essentials/tree/master/css/less/core/variables)

To maintain [style.less](https://github.com/jacobxperez/essentials/blob/master/css/style.less) more manageable the folder [imports](https://github.com/jacobxperez/essentials/tree/master/css/less/core/imports) contains imports regarding mixin files and variable files.

* [less/core](https://github.com/jacobxperez/essentials/tree/master/css/less/core)
    * [imports](https://github.com/jacobxperez/essentials/tree/master/css/less/core/imports)

## Contributing

Help us make [Essentials](https://jacobxperez.github.io/essentials/) better for everyone, any contribution will be considered. Use the [issue tracker](https://github.com/jacobxperez/essentials/issues) for bug reports, feature requests and submitting pull requests. Please read our [Design Principles](#design-principles) to better understand the nature and the direction of the project.

### Bug Reports

Please try to be as detailed as possible in your report. What is your environment? What steps will reproduce the issue? What browser(s) and OS experience the problem? What would you expect to be the outcome? All these details will help us fix any potential bugs.

### Feature Requests

Before opening a feature request, please take a moment to find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature. Please provide as much detail and context as possible.

### Pull Requests

Please ask first before embarking on any significant pull request (e.g. implementing features, refactoring code, porting to a different language), otherwise you risk spending a lot of time working on something that the project's developers might not want to merge into the project. When contributing code to this project always ask yourself these questions.

* Is it essential?
* Will it add value?
* Is this change necessary?

## Design Principles

Leo Babauta demonstrates in his book The Power of Less how to streamline your life by identifying the essential and eliminating the unnecessary. By focusing on the essential and allowing everything else to drop away you will become less stressed and more productive.

1. Identify the essential
2. Eliminate the rest

> Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.
> — Antoine de Saint-Exupery

## LICENSE

Copyright (C) 2020 [Jacob Perez](https://github.com/jacobxperez)

Licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0) (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
