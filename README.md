# [Rams](https://jacobxperez.github.io/rams/)

Class-Less CSS Design System Framework

---

![rams logo](docs/banner.jpg)

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
  - [Build](#build)
  - [Compile](#compile)
- [Features](#features)
  - [Grid System](#grid-system)
  - [Navigation](#navigation)
  - [Buttons](#buttons)
- [Examples](#examples)
- [Contributing](#contributing)
- [LICENSE](#license)

## About

[Rams](https://jacobxperez.github.io/rams/) is a class-less css design system framework that utilizes the power of [data-attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) for styling components.

## Getting Started

1) Start by **[downloading](https://github.com/jacobxperez/rams/archive/master.zip)** the repository or by cloning Rams

    ```bash
    git clone https://github.com/jacobxperez/rams.git
    ```

2) Install dependencies on your machine with [npm](https://www.npmjs.com/)

    ```bash
    npm install
    ```

### Build

Edit the [variables](https://github.com/jacobxperez/rams/blob/master/src/css/var.css), add
[custom](https://github.com/jacobxperez/rams/tree/master/src/css/custom) modules and linked
them to [main.css](https://github.com/jacobxperez/rams/blob/master/src/css/main.css) for compiling.

- [src/css](https://github.com/jacobxperez/rams/tree/master/src/css/)
  - [core](https://github.com/jacobxperez/rams/tree/master/src/css/core) (important files for compiling)
  - [custom](https://github.com/jacobxperez/rams/tree/master/src/css/custom) (add custom modules here)
  - [main.css](https://github.com/jacobxperez/rams/blob/master/src/css/main.css) (compile to produce the final CSS)
  - [var.css](https://github.com/jacobxperez/rams/blob/master/src/css/var.css) (variables for font, colors, and more)

**note**: When starting a project with Rams we recommend **not** to edit the [core](https://github.com/jacobxperez/rams/tree/master/src/css/core) files unless you are [contributing](https://github.com/jacobxperez/rams/blob/master/.github/CONTRIBUTING.md) code back to Rams. Any custom modules should go in the [custom](https://github.com/jacobxperez/rams/tree/master/src/css/custom) folder, this will help you separate your code from Rams.

### Compile

On your terminal run these scripts to compile

- `npm run docs` (locally runs documentation)
- `npm run dev` (serve current development build)
- `npm run watch` (watch for changes but does not start server)
- `npm run build` (makes current build and sets url to "/" can be changed on [package.json](https://github.com/jacobxperez/rams/blob/master/package.json))

## Features

Rams uses data attributes instead of class to style components.

### Grid System

A two column grid with responsive columns:

```html
<article data-grid="main">
  <aside data-column="large-3 medium-3 small-4">
    <!-- add content -->
  </aside>
  <section data-column="large-9 medium-9 small-4">
    <!-- add content -->
  </section>
</article>
```

### Navigation

A simple navigation with flex-box:

```html
<ul data-flex>
  <li><a data-anchor="" data-state="active">Active</a></li>
  <li><a data-anchor="">Anchor</a></li>
  <li><a data-anchor="">Anchor</a></li>
  <li><a data-anchor="">Anchor</a></li>
</ul>
```

A navbar with home link and three tabs:

```html
<nav data-navbar="top">
  <ul data-flex>
    <li><a data-anchor="navbar" href="">Home</a></li>
    <li data-item="grow"></li>
    <li><a data-anchor="navbar" href="">Anchor</a></li>
    <li><a data-anchor="navbar" href="">Anchor</a></li>
    <li><a data-anchor="navbar" href="">Anchor</a></li> 
  </ul>
</nav>
```

### Buttons

Includes several button types:

```html
 <button data-button="primary">button</button>
 <button data-button="outline">button</button>
 <button data-button="primary outline">button</button>
 <button data-button="link">button</button> 
```

### Examples

These examples incorporate Rams with custom modules.

- [Jacob Perez](https://github.com/jacobxperez/blog): I am a front-end web developer and designer.
- [Atkinson Hyperlegible Pro](https://jacobxperez.github.io/atkinson-hyperlegible-pro/): a font designed for low-vision readers.
- [Company](https://github.com/jacobxperez/company): A single page website template for your business marketing
- [Vaporwave Aesthetics](https://github.com/jacobxperez/vaporwave-aesthetic): A template with Vaporwave Aesthetics

**note**: These examples may contain an older version of Rams.

### Contributing

If you are interested in contributing to this project, please start by reading our
[contributing](https://github.com/jacobxperez/rams/blob/master/.github/CONTRIBUTING.md) guidelines.

## LICENSE

Copyright (C) 2023 [Jacob Perez](https://jacobxperez.github.io/blog/)

Licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0) (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
