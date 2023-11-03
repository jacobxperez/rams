# Contributing

Welcome designers and developers! Help us improve Rams for everyone. Before you start contributing to this project, it's important to read the following sections to better understand it's vision. If you come across any [bugs](#bug-reports) or have any [feature requests](#feature-requests), please use the [issue tracker](https://github.com/jacobxperez/rams/issues). You can also submit a project [proposal](#proposals) and engage with the community by opening a [discussion](https://github.com/jacobxperez/rams/discussions). Any contribution or feedback is welcome.

---

## Table of Contents

* [Design Essence](#design-essence)
* [Design Principles](#design-principles)
* [Design Requirements](#design-requirements)
* [Updating The Documentation](#updating-the-documentation)
* [Pull Requests](#pull-requests)
* [Issues](#issues)
  * [Help Us Fix An Issue](#help-us-fix-an-issue)
  * [Bug Reports](#bug-reports)
  * [Feature Requests](#feature-requests)
  * [Proposals](#proposals)
* [Projects](#projects)
* [Acknowledgment](#acknowledgment)

## Design Essence

The modern web designer faces no limitations in his approach to design and will
often choose the wrong combination. Not knowing what is important and what is
not, a designer may be overwhelmed by the array of components at his disposal.
Polyfills, Houdini, and other similar technologies are all attempts to bypass
the limitations of JavaScript and CSS. However, without the fundamental principles
of design, their use becomes arbitrary. The developer; is trained to dominate his
technology, while the designer; is forced to work within his limitations. By limiting
or restricting the choices, the designer; is forced to prioritize the essentials,
and because he has not; been trained as a developer, he uses his limitation with
technology to discover new designs.

## Design Principles

In the late 1970s, Dieter Rams grew increasingly concerned by the state of the world
around him, which he described as an impenetrable confusion of forms, colors, and
noises. Aware that he was a significant contributor to that world, he asked himself
an important question: is my design; good design? His answer is expressed in his ten
principles for good design.

### Ten Principles for Good Design

1. **Good design is innovative**  
    The possibilities for innovation are not, by any means, exhausted.
    Technological development is always offering new opportunities for
    innovative design. But innovative design always develops in tandem
    with innovative technology, and can never be an end in itself.

2. **Good design makes a product useful**  
    A product is bought to be used. It has to satisfy certain criteria, not
    only functional, but also psychological and aesthetic. Good design
    emphasizes the usefulness of a product whilst disregarding anything
    that could possibly detract from it.

3. **Good design is aesthetic**  
    The aesthetic quality of a product is integral to its usefulness
    because products we use every day affect our person and our
    well-being. But only well-executed objects can be beautiful.

4. **Good design makes a product understandable**  
    It clarifies the product’s structure. Better still, it can make the product
    talk. At best, it is self-explanatory.

5. **Good design is unobtrusive**  
    Products fulfilling a purpose are like tools. They are neither decorative
    objects nor works of art. Their design should therefore be both
    neutral and restrained, to leave room for the user’s self-expression.

6. **Good design is honest**  
    It does not make a product more innovative, powerful or valuable
    than it really is. It does not attempt to manipulate the consumer with
    promises that cannot be kept.

7. **Good design is long-lasting**  
    It avoids being fashionable and therefore never appears antiquated.
    Unlike fashionable design, it lasts many years – even in today’s
    throwaway society.

8. **Good design is thorough down to the last detail**  
    Nothing must be arbitrary or left to chance. Care and accuracy in
    the design process show respect towards the user.

9. **Good design is environmentally-friendly**  
    Design makes an important contribution to the preservation of the
    environment. It conserves resources and minimizes physical and
    visual pollution throughout the lifecycle of the product.

10. **Good design is as little design as possible**  
    Less, but better – because it concentrates on the essential aspects,
    and the products are not burdened with non-essentials.
    Back to purity, back to simplicity.

## Design Requirements

Dieter Rams is known for his minimalist and functional design philosophy, which
emphasizes simplicity, usability, and clarity. UI components would likely
incorporate these principles in the following ways:

* Identify areas of volatility and encapsulate their effects.
* Identify the minimum amount of components that can satisfy most designs.
* Must be unobtrusive to leave room for the designer's self-expression.
* Must be easy to update, maintain, modify, adapt, customize, and change with minimum effort.
* Must follow the [80/20 principle](https://jacobxperez.github.io/blog/post/heuristic/the-80-20-principle/),
which indicates that 80 percent of the effects come from 20 percent of the causes.
* The layout must be clean, uncluttered, and easy to navigate.
* The design must be consistent across all pages and elements creating a
cohesive and unified user experience.
* The color palette must be limited to few colors such as white, gray, and black.
This will create a sense of simplicity and elegance.
* Typography will be a key element of the design, focused on legibility
and readability, with a limited number of font weights and sizes.
* Components must be designed to be visually unobtrusive, with a focus
on their functionality rather than their visual appearance.

## Updating The Documentation

To update the documentation, install all dependencies on your machine and run the
command `npm run docs`. You can find the source files for the documentation under the
"[src/docs](https://github.com/jacobxperez/rams/tree/master/src/docs)" folder. After
updating the documentation, run `npm run rams` to update the root folder
[docs](https://github.com/jacobxperez/rams/tree/master/docs). This will automatically
update the [website](https://jacobxperez.github.io/rams/) on a pull request.

Run the documentation locally:

```bash
npm run docs
```

Updating the website documentation:

```bash
npm run rams
```

## Pull Requests

Before embarking on any significant pull request, ask first by submitting an
[issue](https://github.com/jacobxperez/rams/issues/new/choose) or starting a
[discussion](https://github.com/jacobxperez/rams/discussions). Otherwise, you
may end up spending a lot of time working on something that we might not want
to merge into the project. Any contribution to this project will be subject to
the same terms and conditions of the [license agreement](https://github.com/jacobxperez/rams#license).
Be precise on your pull request, and do **not** try to submit changes that were
not agreed upon. When contributing to this project, ask yourself these questions:

* Is it essential?
* Will it add value?
* Is this change necessary?

## Issues

When submitting an issue, it is crucial to provide us with as much detail as
possible so that we can find the best solution to your problem. Please use the
[issue](https://github.com/jacobxperez/rams/issues/new/choose) template that best
describes your concern.

**note**: Submitting an issue does **not** guarantee that your issue will be solved.

## Help Us Fix An Issue

There might be a couple of [issues](https://github.com/jacobxperez/rams/issues)
that need your help. If no one is working on an issue, you can ask to get
assigned one.

## Bug Reports

Before submitting a bug report make sure your bug is not already reported on the
[issue](https://github.com/rams/issues) tracker. If not, use the bug report
template to report any bugs that you have encountered.

## Feature Requests

If you have an idea that you think will benefit the community but do not want to
work on it yourself, then use the feature request template. If your idea is approved,
we will work on it as soon as possible.

## Proposals

If you have an idea for an update or a feature that you would like to implement.
Then, using the proposal template is a great way to suggest your respective solution.
Please provide us with as much detail as possible because it is up to you to convince
the project maintainers to approve your implementation. Be ready to answer any questions
the project maintainers might have. If your proposal is approved, we will assign it to you.

## Projects

We might have a couple of [projects](https://github.com/jacobxperez/rams/projects?query=is%3Aopen)
open that need your help. Let us know if you want to contribute to any of them by opening
an [issue](https://github.com/jacobxperez/rams/issues/new/choose) or starting a
[discussion](https://github.com/jacobxperez/rams/discussions).

## Acknowledgment

I want to dedicate this project to all developers, architects, and designers who have
fiddled with the limitations of CSS. I know your pain, your struggles, and your frustrations.
May we all find peace and tranquility in our hearts and minds.
