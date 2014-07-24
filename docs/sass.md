---
layout: docs
navgroup: docs
navactive: docssass
title: Sass
---

Kickoff is made with [Sass](http://sass-lang.com/) at its core, it makes developing systems-based CSS faster, easier, and more fun.

### Why Sass?

Sass makes CSS fun again. Sass is an extension of CSS3, adding nested rules, variables, mixins, selector inheritance, and more. It’s translated to well-formatted, standard CSS using the command line tool or a web-framework plugin.

Sass has two syntaxes. The most commonly used syntax is known as “SCSS” (for “Sassy CSS”), and is a superset of CSS3’s syntax. This means that every valid CSS3 stylesheet is valid SCSS as well. SCSS files use the extension `.scss`; we use this version at TMW.

### What's included?

As an extension of CSS, Sass includes variables, mixins for reusable snippets of code, operations for simple math, nesting, and even color functions.

### Learn more

Visit the official website at [http://sass-lang.com/](http://sass-lang.com/) to learn more

## Installing Sass

See the instructions on the [Getting started page](index.html) to install Sass

## Compiling Kickoff with Sass

Since our CSS is written with Less and utilizes variables and mixins, it needs to be compiled for final production implementation. Here's how:

### Use the command line

If you prefer to not use an app, you can use the command line. `cd` into your project directory, then run `sass --watch scss:css`. Kickoff usually compiles to two CSS files: `kickoff.css` & `kickoff-old-ie.css`

### Apps

#### [CodeKit](http://incident57.com/codekit/) - Mac
CodeKit is a **Mac** app that compiles LESS, Sass, Stylus, CoffeeScript and many more. It can minify, concatinate & lint your code too.

#### [Scout](http://mhs.github.com/scout-app/) - Mac & Windows
Scout is a cross-platform app that delivers the power of Sass & Compass into the hands of web designers.


## Kickoff's Sass files

#### [dependencies.scss](https://github.com/tmwagency/kickoff/blob/master/scss/dependencies.scss)
All roads lead to here. Here you choose which other `.scss` files your project needs. The order of the imported files is the same order that the CSS is compiled to.

Exclude any existing items by using a javascript comment `//` at the start of the line or remove that line completely.

#### [variables.scss](https://github.com/tmwagency/kickoff/blob/master/scss/variables.scss)
This file contains all your app/site's global variables. For example, you can set your background colours, fonts, base text size etc here & use the variable names throughout the rest of your project.

#### [mixins.scss](https://github.com/tmwagency/kickoff/blob/master/scss/mixins.scss)
Mixins contains many useful items, but the most useful of which are the CSS3 mixins.

#### [typography.scss](https://github.com/tmwagency/kickoff/blob/master/scss/typography.scss)
You can use the brilliant [Gridlover](http://www.gridlover.net/) to work out your font sizings & spacings

## Useful Sass resources

* [Sass Documentation](http://www.kaelig.fr/bettersassdocs/)
	- [Sass functions](http://sass-lang.com/docs/yardoc/Sass/Script/Functions.html) - includes colour & math functions **VERY USEFUL**
* [sass-lang.com](http://sass-lang.com/)
* [thesassway.com](http://thesassway.com/)
	- [Referencing Parent Selectors using the ampersand (&) character](http://thesassway.com/intermediate/referencing-parent-selectors-using-ampersand)
	- [Sass control directives: @if, @for, @each and @while](http://thesassway.com/intermediate/if-for-each-while)
	- [Nested Selectors: The Inception Rule](http://thesassway.com/beginner/the-inception-rule)
* [Sass Meister](http://sassmeister.com/)
* [Getting Started with Sass](http://alistapart.com/article/getting-started-with-sass)
