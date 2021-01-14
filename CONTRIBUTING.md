# Contributing

Welcome designers, before you contribute to this project is important to read the
following sections to better understand the vision and the direction of the project.
Use the [issue tracker](https://github.com/jacobxperez/essentials/issues) for
[bug reports](#bug-reports), [feature requests](#feature-requests), and submitting
[pull requests](#pull-requests).

## Table of Contents

* [Essence](#essence)
* [Design Philosophy](#design-philosophy)
* [Design Principles](#design-principles)
* [Design Requirements](#design-requirements)
* [Design Considerations](#design-considerations)
* [Bug Reports](#bug-reports)
* [Feature Requests](#feature-requests)
* [Pull Requests](#pull-requests)

## Essence
The modern web designer faces few limitations on his approach to design and often
he chooses the wrong combination. Without limits, a designer may be overwhelmed
by the array of components at his disposal. Houdini, polyfill, and other similar
technologies are all attempts to bypass the limitations of CSS and JavaScript
however, without the fundamental knowledge of design, their use becomes arbitrary.
The developer may seek to dominate his technology while the designer is forced to
work within the limitation of his tools. By limiting or restricting the choices
the modern web designer is forced to choose the essential and because he has not
been trained to dominate or conquer technology, he can work in harmony; in fact,
he uses the limitations to discover his design.

## Design Philosophy

Perhaps the most famous quote from Dieter Rams "**Good design is as little design
as possible**" meaning that by removing the unnecessary the essential comes to the
forefront. The product becomes useful, understandable, easy to use, and long-lasting.

## Design Principles

In The Power of Less, author [Leo Babauta](https://leobabauta.com/) demonstrates
how to streamline your life by identifying the essential and eliminating the
unnecessary. By focusing on the essential and allowing everything else to drop
away you will become less stressed and more productive.

1. Identify the essential
2. Eliminate the rest

These two principles, identifying the essential and eliminate the rest form the
foundation of this project.

> Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.
> — Antoine de Saint-Exupery

## Design Requirements

* Identify the minimum amount of [components](https://github.com/jacobxperez/essentials/tree/master/css/less/core/components) that can satisfy most designs.
* Must be easy to maintain, modify, adapt, customize, and change with minimum effort.
* Must be easy to update without affecting [custom](https://github.com/jacobxperez/essentials/blob/master/css/less/custom.less) code or [variables](https://github.com/jacobxperez/essentials/blob/master/css/less/variables.less).
* Must be unobtrusive to prevent the designer from fighting the framework.
* Must follow the 80/20 principle, which indicates that 80 percent of the effects come from 20 percent of the [variables](https://github.com/jacobxperez/essentials/blob/master/css/less/variables.less).

## Design Considerations

**HTML as first-class**: Build the structure in HTML first then style the
component in CSS.

**CSS as first-class**: Preprocessors are **NO** replacement for CSS and should
only be used to enhance it. Whenever possible avoid overcomplicating selectors
with fancy logic that will only bring more problems than solutions.

**JavaScript as first-class**: Don't build a JavaScript component that requires
an external framework, everything should be built with JavaScript.

## Bug Reports

Please try to be as detailed as possible in your report. What is your environment?
What steps will reproduce the issue? What browser(s) and OS experience the problem?
What would you expect to be the outcome? All these details will help us fix any
potential bugs.

## Feature Requests

Before opening a feature request, please take a moment to find out whether your
idea fits with the scope and aims of the project. It's up to you to make a strong
case to convince the project's developers of the merits of this feature. Please
provide as much detail and context as possible.

## Pull Requests

Please ask first before embarking on any significant pull request (e.g. implementing
features, refactoring code, porting to a different language), otherwise you
risk spending a lot of time working on something that the project's developers
might not want to merge into the project. When contributing code to this
project always ask yourself these questions.

* Is it essential?
* Will it add value?
* Is this change necessary?
