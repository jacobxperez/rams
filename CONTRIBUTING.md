# Contributing

Help us make [Essentials](https://jacobxperez.github.io/essentials/) better for everyone, any contribution will be considered. Use the [issue tracker](https://github.com/jacobxperez/essentials/issues) for bug reports, feature requests and submitting pull requests.

## Design Principles

In the book The Power of Less, author Leo Babauta demonstrates how to streamline your life by identifying the essential and eliminating the unnecessary. By focusing on the essential and allowing everything else to drop away you will become less stressed and more productive.

1. Identify the essential
2. Eliminate the rest

This two principles of identify the essential and eliminate the rest form the foundation in which we will build a composable design system.

> Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.
> — Antoine de Saint-Exupery

## Design Requirements

* Identify the minimum amount of [components](https://github.com/jacobxperez/essentials/tree/master/css/less/core/components) that can satisfy most designs.
* Must be easy to maintain, modify, adapt, customize and change with minimum effort.
* Must be easy to update without effecting [custom](https://github.com/jacobxperez/essentials/blob/master/css/custom.less) code or [variables](https://github.com/jacobxperez/essentials/blob/master/css/variables.less).
* Must prevent the designer from fighting the framework.
* Must follow the 80/20 principle, which indicates that 80 percent of the effects comes from 20 percent of the [variables](https://github.com/jacobxperez/essentials/blob/master/css/variables.less).

### Design Considerations

**HTML as first class**: Build the structure in HTML first then style the component in CSS.

**CSS as first class**: Preprocessors are **NO** replacement for CSS and should only be use to enhance it. When ever possible avoid overcomplicating selectors with fancy logic that will only bring more problems then solutions.

**JavaScript as first class**: Don't build a JavaScript component that requires an external framework, everything should be build using vanilla JavaScript.

### Bug Reports

Please try to be as detailed as possible in your report. What is your environment? What steps will reproduce the issue? What browser(s) and OS experience the problem? What would you expect to be the outcome? All these details will help us fix any potential bugs.

### Feature Requests

Before opening a feature request, please take a moment to find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature. Please provide as much detail and context as possible.

### Pull Requests

Please ask first before embarking on any significant pull request (e.g. implementing features, refactoring code, porting to a different language), otherwise you risk spending a lot of time working on something that the project's developers might not want to merge into the project. When contributing code to this project always ask yourself these questions.

* Is it essential?
* Will it add value?
* Is this change necessary?
