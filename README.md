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
  - [Dropdown](#dropdown)
  - [Buttons](#buttons)
- [Examples](#examples)
- [Contributing](#contributing)
- [LICENSE](#license)

## About

Rams is a class-less css design system framework that utilizes the power of data attributes for styling components.

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

Edit the [variables](https://github.com/jacobxperez/rams/blob/master/src/css/settings.css), add
[custom](https://github.com/jacobxperez/rams/tree/master/src/css/custom) modules and linked
them to [index.css](https://github.com/jacobxperez/rams/blob/master/src/css/index.css) for compiling.

- [src/css](https://github.com/jacobxperez/rams/tree/master/src/css/)
  - [core](https://github.com/jacobxperez/rams/tree/master/src/css/core) (important files for compiling)
  - [custom](https://github.com/jacobxperez/rams/tree/master/src/css/custom) (add custom modules here)
  - [index.css](https://github.com/jacobxperez/rams/blob/master/src/css/index.css) (compile to produce the final CSS)
  - [settings.css](https://github.com/jacobxperez/rams/blob/master/src/css/settings.css) (theme settings for font, colors, and more)

**note**: When starting a project with Rams we recommend **not** to edit the [core](https://github.com/jacobxperez/rams/tree/master/src/css/core) files unless you are [contributing](https://github.com/jacobxperez/rams/blob/master/.github/CONTRIBUTING.md) code back to Rams. Any custom modules should go in the [custom](https://github.com/jacobxperez/rams/tree/master/src/css/custom) folder, this will help you separate your code from Rams.

### Compile

On your terminal run these scripts to compile

- `npm run docs` (locally runs documentation)
- `npm run dev` (serve current development build)
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
  <li><a data-anchor data-state="active" href="">Active</a></li>
  <li><a data-anchor href="">Anchor</a></li>
  <li><a data-anchor href="">Anchor</a></li>
  <li><a data-anchor href="">Anchor</a></li>
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

## Dropdown

A dropdown navigation menu:

```html
<ul data-flex>
  <li data-position="relative">
    <a data-toggle="pop" data-anchor href="">
      Dropdown 
      <span data-icon="&#xe043;"></span>
    </a>
    <ul data-dropbox="menu" data-position="left">
      <li><a data-anchor="menu" href="">Anchor</a></li>
      <li><a data-anchor="menu" href="">Anchor</a></li>
      <li><a data-anchor="menu" href="">Anchor</a></li>
    </ul>
  </li>
</ul>
```

Tooltip for displaying additional context on hover or on click:

```html
<span data-toggle="tooltip">
  Tooltip!
  <span data-dropbox="tooltip">
    <!-- add content -->
  </span>
</span>
```

Reveal extra page content like an accordion:

```html
<ul data-box="border leading">
  <li data-box="border-bottom"> 
    <a data-toggle data-anchor data-flex>
      <strong data-item="grow">Content</strong> <span data-icon="&#xe045;"></span>
    </a>
    <div data-dropbox data-box="padding-x padding-bottom">
      <!-- add content -->
    </div>
  </li>
</ul>
```

### Buttons

Includes several button styles:

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

Copyright (C) 2024 [Jacob Perez](https://jacobxperez.github.io/blog/)

Licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0) (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
