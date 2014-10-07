---
layout: docs
navgroup: docs
navactive: docsuse
title: Use Kickoff
---

Kickoff is not meant to be too prescriptive; we don't want to force developers into a certain coding style. At it's heart lies the CSS framework (built with the `.scss` version of Sass) so, if you wanted to, you could just include that.

Once you have [cloned or downloaded Kickoff](get.html), creating a site or app usually involves the following:

1. Set up the basic structure of the site.
2. Add some content, style, and functionality.
3. Run your site locally to see how it looks.
4. Optionally run a Grunt build script to automate the optimization of your site
5. Deploy your site.

What follows is a general overview of each major part and how to use them.

### CSS

This directory should contain all your project's CSS files. It includes some
initial CSS to help get you started from a solid foundation. [About the
CSS](css.html).

#### CSS naming scheme
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

### Javascript

This directory should contain all your project's JS files. Libraries, plugins,
and custom code can all be included here. It includes some initial JS to help
get you started. [About the JavaScript](js.html).
