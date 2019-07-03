# [Essentials](https://jacobxperez.github.io/essentials/)

Base CSS reset for layout and typography

## Table of Contents

* [About](#about)
	* [Project Status](#project-status)
* [Getting Started](#getting-started)
	* [Default Build](#default-build)
	* [Custom Build](#custom-build)
	* [Features](#features)
* [Contributing](#contributing)
	* [Bug Reports](#bug-reports)
	* [Feature Requests](#feature-requests)
	* [Pull Requests](#pull-requests)
* [Design Principles](#design-principles)
* [LICENSE](#license)

## About

Essentials is a CSS reset framework build on [LESS](http://lesscss.org/) which allows you to build websites with your own components without getting on your way. for more details on building your own components check out [custom build](#custom-build). The main focus of this project is as follows:

* CSS Reset
* Layout
* Typography

### Project Status

Project under active development. No stable version has been release.

## Getting Started

Start by **[downloading](https://github.com/jacobxperez/essentials/archive/master.zip)** the [repository](https://github.com/jacobxperez/essentials) or by cloning the project:

	git clone https://github.com/jacobxperez/essentials.git

*Keep in mind that this project is under active development and no stable version has been release.*

### Default Build

The easiest way to include the [Essentials](https://jacobxperez.github.io/essentials/) into your projects is by copying the pre-compiled CSS file into your project folder, and then link to it in HTML.

* [css/style.css](https://github.com/jacobxperez/essentials/blob/master/css/style.css)

### Custom Build

[Essentials](https://jacobxperez.github.io/essentials/) is build on [LESS](http://lesscss.org/) which extends the capabilities of CSS. Use [style.less](https://github.com/jacobxperez/essentials/blob/master/css/style.less) for compiling all necessary modules for your website and [settings.less](https://github.com/jacobxperez/essentials/blob/master/css/less/settings.less) for adjusting the values of fonts, colors, padding and more.

* [css/style.less](https://github.com/jacobxperez/essentials/blob/master/css/style.less) (for compiling all LESS modules)
* [css/less/settings.less](https://github.com/jacobxperez/essentials/blob/master/css/less/settings.less) (for changing the settings)

All the main modules that builds [style.css](https://github.com/jacobxperez/essentials/blob/master/css/style.css) can be found under folder [core](https://github.com/jacobxperez/essentials/tree/master/css/less/core).

* [css/less/core](https://github.com/jacobxperez/essentials/tree/master/css/less/core)
	* [reset](https://github.com/jacobxperez/essentials/tree/master/css/less/core/reset) (css reset)
	* [layout](https://github.com/jacobxperez/essentials/tree/master/css/less/core/layout) (grid system)
	* [utilities](https://github.com/jacobxperez/essentials/tree/master/css/less/core/utilities) (alignment and other tools)
	* [mixins](https://github.com/jacobxperez/essentials/tree/master/css/less/core/mixins) (LESS mixins)

To ensure future compatibility we recommend to leave all [core](https://github.com/jacobxperez/essentials/tree/master/css/less/core) modules untouched unless you have to, and instead add all custom code on top of it under folder [styles](https://github.com/jacobxperez/essentials/tree/master/css/less/styles) then link to them on file [style.less](https://github.com/jacobxperez/essentials/blob/master/css/style.less) for compiling.

* [css/less/styles](https://github.com/jacobxperez/essentials/tree/master/css/less/styles)
	* [modules](https://github.com/jacobxperez/essentials/tree/master/css/less/styles/modules) (add custom modules here)
	* [navigation](https://github.com/jacobxperez/essentials/tree/master/css/less/styles/navigation) (add custom navigation here)

*By default Essentials has no predefine navigation, use your own custom code.*

### Features

* Fluid and responsive grid system
* Minimal design with no decorative styles
* No more pixels everything is set to relative units
* Build on LESS with mixin library

## Contributing

Help us make [Essentials](https://jacobxperez.github.io/essentials/) better for everyone, any contribution will be considered. Use the [issue tracker](https://github.com/jacobxperez/essentials/issues) for bug reports, features requests and submitting pull requests. Please read our [Design Principles](#design-principles) to better understand the nature and the direction of the project.

### Bug Reports

Please try to be as detailed as possible in your report. What is your environment? What steps will reproduce the issue? What browser(s) and OS experience the problem? What would you expect to be the outcome? All these details will help us fix any potential bugs.

### Feature Requests

Before opening a feature request, please take a moment to find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature. Please provide as much detail and context as possible.

### Pull Requests

Please ask first before embarking on any significant pull request (e.g. implementing features, re-factoring code, porting to a different language), otherwise you risk spending a lot of time working on something that the project's developers might not want to merge into the project. When contributing code to this project always ask yourself these questions.

* Is it essential?
* Will it add value?
* Is this change necessary?

## Design Principles

Leo Babauta demonstrates in he's book The Power of Less how to streamline your life by identifying the essential and eliminating the unnecessary. By focusing on the essential and allowing everything else to drop away you will become less stressed and more productive.

1. Identify the essential
2. Eliminate the rest

> Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.
>
> Antoine de Saint-Exupery

## LICENSE

Copyright (C) 2019 [Jacob Perez](https://github.com/jacobxperez) and licensed under the [GNU General Public License v3](https://www.gnu.org/licenses/gpl-3.0.html)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
any later version. This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
[GNU General Public License v3](https://www.gnu.org/licenses/gpl-3.0.html) for more details.
