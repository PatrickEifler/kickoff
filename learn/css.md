---
layout: docs
navgroup: docs
navactive: docscss
title: CSS
---

<a name="philosophy"></a>
Kickoff comes with a robust CSS framework, it provides many sensible defaults so that you can get your project up and running in the shortest possible time.

We make use of the brilliant [Sass](http://sass-lang.com) CSS preprocessor which allows us to use many extra features beyond the capabilities of vanilla CSS.

This section will take you through how Kickoff uses CSS and Sass, and how easy it is to manipulate that when developing your own projects.

<hr>

<a name="sass"></a>
## Sass
Kickoff is made with [Sass](http://sass-lang.com/) at its core, it makes developing systems-based CSS faster, easier, and more fun. Sass has two syntaxes. The most commonly used syntax is known as “SCSS” (for “Sassy CSS”), and is a superset of CSS3’s syntax. This means that every valid CSS3 stylesheet is valid SCSS as well. SCSS files use the extension `.scss`; we use this version for Kickoff.

### Install the Sass Ruby gem

```sh
gem install sass
```

<hr>

<a name="structure"></a>
## Structure
Folder structure, difference between components and views

### Key files
#### [kickoff.scss](https://github.com/tmwagency/kickoff/blob/master/scss/kickoff.scss) & [kickoff-old-ie.scss](https://github.com/tmwagency/kickoff/blob/master/scss/kickoff-old-ie.scss)
All roads lead to here. Both these files are used `kickoff.scss` is the starting point for any kickoff project. Here you choose which other `.scss` files your project needs. The order of the imported files is the same order that the CSS is compiled to.

#### Add your stylesheets to the pages using the code below
```html
<!--[if lte IE 8]>
	<link rel="stylesheet" href="css/kickoff-old-ie.css">
<![endif]-->
<!--[if gt IE 8]><!-->
	<link rel="stylesheet" href="css/kickoff.css">
<!--<![endif]-->
```

#### _dependencies.scss
This file is where its all at. It imports all the scss files that will be compiled into your project. If you need to add or remove a file, do it here.

<hr>

<a name="variables"></a>
## Sass Variables
We take full advantage of Sass' variables and there are two key files that should be edited before you start 'proper' development for any new project, these are `scss/_variables.scss` and `scss/_color-palette.scss`.

#### _variables.scss
This is where you define your global Sass variables. Here you can define your:

* **global typographic styles** — including font choices and typographic scale);
* **responsive breakpoints** — we try not to target devices by not being too specific with our widths. Breakpoints included are: `$bp-narrow`, `$bp-mid`, `$bp-wide`, `$bp-huge` and a few *special* vars. These include `$bp-single-col` for when you need your design to break from a single column to multiple columns; `$bp-block-grid-narrow` for use with the block grids; and `$bp-rwd-text` for our simple implementation of responsive typography.

#### _color-palette.scss
Text colour, link colours, background colour, form fields and various component colours can all be set in this file.

<hr>

<a name="responsive"></a>
## Responsive
Kickoff does not enforce a mobile first approach to CSS but it is encouraged and it takes a fairly unique approach to responsive sites. Media queries in Kickoff are typically handled with a [set of useful mixins](https://github.com/tmwagency/kickoff/blob/master/scss/mixins/_responsive.scss). These are used so that we can define separate media-query content for `< IE9` and browsers with support for media queries. These are directly related to the global `$fix-mqs` var defined in `kickoff-old-ie.scss`. `kickoff-old-ie.scss` ignores any content in media-queries with values less than the `$fix-mqs` var value.

* `respond-min` for `min-width` media queries
* `respond-max` for `max-width` media queries
* `respond-min-max` for `min-width` & `max-width` media queries

#### Media query example

```scss
/* This Sass mixin: */
@include respond-min(800) {
	a {
		color: darkgoldenrod;
	}
}
/* Is the same as: */
@media screen and (min-width: 800px) {
	a {
		color: darkgoldenrod;
	}
}
```

#### Better media query example
Rather than having all your *narrow* styles up at the top of a file and your *wider* styles further down, we suggest making use of Sass' nested media queries. This means that all styles related to an element are together, see below for an example.

```scss
a {
	padding: 1em;

	@include respond-min(800) {
		padding: 2em;
	}
}
```

<hr>

<a name="namingscheme"></a>
## CSS Naming scheme
Kickoff uses a bespoke naming scheme for classnames.

```scss
/* Descriptors use camel-casing if more than one word: e.g. twoWords */
.skipToContent {
	...
}

/* ========= */

/* Child elements use single hyphens: - */
.form-controlGroup {
	...
}

/* ========= */

/* Modifier element use a double hyphen: -- */
.btn.btn--primary {
	...
}

/* ========= */

/* Element state: .is- */
.is-active {
	...
}

/* ========= */

/* Sass variables are dash-case */
a {
	color: $color-primary;
}
```

<hr>

The Kickoff starting CSS includes:

* [Normalize.css](https://github.com/necolas/normalize.css) - a great CSS reset
* Useful Kickoff defaults
* Common helpers
* Placeholder media queries
* Print styles
* A solid Sass framework for building sites or apps of all types


## Kickoff defaults

This project includes a handful of base styles that build upon Normalize.css.
These include:

* Basic typography settings to provide improved text readability by default.
* Protection against unwanted `text-shadow` during text highlighting.
* Tweaks to default image alignment, fieldsets, and textareas.

You are free to modify or add to these base styles as your project requires.





## Print styles

* Print styles are inlined to [reduce the number of page requests](http://www.phpied.com/delay-loading-your-print-css/).
* We strip all background colors and change the font color to dark gray and remove text-shadow. This is meant to help save printer ink.
* Anchors do not need colors to indicate they are linked. They are underlined to indicate so.
* Anchors and Abbreviations are expanded to indicate where users reading the printed page can refer to.
* But we do not want to show link text for image replaced elements (given that they are primarily images).

### Paged media styles

* Paged media is supported only in a [few browsers](http://en.wikipedia.org/wiki/Comparison_of_layout_engines_%28Cascading_Style_Sheets%29#Grammar_and_rules).
* Paged media support means browsers would know how to interpret instructions on breaking content into pages and on orphans/widows.
* We use `page-break-inside: avoid;` to prevent an image and table row from being split into two different pages, so use the same `page-break-inside:
	avoid;` for that as well.
* Headings should always appear with the text they are titles for. So, we ensure headings never appear in a different page than the text they describe
	by using `page-break-after: avoid;`.
* We also apply a default margin for the page specified in `cm`.
* We do not want [orphans and widows](http://en.wikipedia.org/wiki/Widows_and_orphans) to appear on pages you print. So, by defining `orphans: 3` and `widows: 3` you define the minimal  number of words that every line should contain.
