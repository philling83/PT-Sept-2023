# `Weeks 13 + 14 Study Guide`

## Basic Design Principles
- [Reading link](https://open.appacademy.io/learn/js-py---pt-sept-2023-online/week-13---html-and-css/design-principles)
- Common ones to understand
  - `White Space`
  - `Colors`
  - `Typography`
  - `Conventions`
- Given an image of a snippet of a website, determine which principle fails here (i.e. not enough white space, misuse of colors, etc.)


## HTML
- [Reading link](https://open.appacademy.io/learn/js-py---pt-sept-2023-online/week-13---html-and-css/basics-of-html)

- HTML Semantics
  - Elements
  - Tags
  - Attributes
  - Understand when to use which element
    - MDN is your friend here, look up elements you do not know
    - i.e. what element should we use for text w/ link? (anchor element -> `a` tag)


## CSS

### CSS Selectors
- [Reading link](https://open.appacademy.io/learn/js-py---pt-sept-2023-online/week-13---html-and-css/css-selectors)

- Different Selectors and Combinators we covered

- CSS Selector Order Specificity
  - Inline, id, classes, tags, etc.
  - Be able to determine which selector / combinator is prioritized
  - Given a combination of selectors, calculate which one has priority
    - i.e. "ul li" vs. "div.ele #item"

- Given this prompt... use x selector (like descendant) to change y...

### CSS Properties: Fonts
- [Reading link](https://open.appacademy.io/learn/js-py---pt-sept-2023-online/week-13---html-and-css/css--type--properties-and-imports)
  
- Differences between serif vs. sans-serif fonts.
  
- Different font properties i.e. `font-family`, `font-size`, `font-style` (and more...)

- Unit of measurement
  - Absolute vs. relative (px/pt vs. em)


### CSS Properties: Box Model
- [Reading link](https://open.appacademy.io/learn/js-py---pt-sept-2023-online/week-13---html-and-css/the-box-model)

- Understanding Box Sizing (what happens to `borders` and `paddings` if `box-sizing:border-box` is applied?)
- Box Model
  - Margin (wrappings)
  - Border (box)
  - Padding (foam, cushion)
  - Content (our item)

### CSS Properties: Positioning
- [Reading link](https://open.appacademy.io/learn/js-py---pt-sept-2023-online/week-13---html-and-css/css-positioning)

- `position` property and its values
  - static
  - relative
  - absolute
  - fixed
  - sticky
- How to move the selected element around
  - `top`
  - `right`
  - `bottom`
  - `left`
- Understanding flow
  - What it means to be out of the flow
  - Which `position` values will take the element out of the normal flow?

## CSS Flexbox
- How to `display` flex
- `flex container` vs. `flex item`
- Flexbox `container` properties
  - flex-wrap, flex-direction, justify-content, align-items, etc.

- Flex `item` properties
  - flex-grow, flex-shrink, flex-basis, flex (shorthand for flex shrink, grow, basis), etc.

- Centering elements vertically/horizontally with flexbox

## CSS Media Queries

- Responsive viewports, and how to adjust viewports in dev tool
- Making a simple media query
- Understanding `media-types` vs. `media-features`
  - Media types: print, screen, etc.
  - Media Feature: aspect ratio (min/max width)
- Use `display` property to hide things
- Combine queries with logical operations


## CSS Grid
- How to `display` grid
- `grid container` vs. `grid items`
- How to size grid columns and rows with:
  - `grid-template-columns`
  - `grid-template-rows`
- How to manually layout a grid using:
  - `grid-template-areas` to control which grid items goes where.
  - `grid-area` (on grid item) to label it so it can be mapped to the layout.

- `Group` Alignment or position (i.e. centering) of items within a grid container using properties like:
  - `justify-items` 
  - `align-items`

- `Single` Alignment or positon of the grid items using properties like:
  - `justify-self`
  - `align-self`


## CSS Frameworks
- Understanding `opinionated` vs `un-opininated` frameworks
- What are the benefits of a highly opionated CSS Framework like `Material UI/Design`?
