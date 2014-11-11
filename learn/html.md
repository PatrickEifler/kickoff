---
layout: docs
navgroup: docs
navactive: docshtml
title: HTML

meta:
  description: HTML in Kickoff

next:
 - title: Kickoff's CSS
   body: Take a look at how Kickoff structures it’s CSS.
   link: css.html
 - title: Kickoff's Javascript
   body: Minimal and flexible, we show you how Kickoff structures it’s JS.
   link: js.html
---
<a name="svg"></a>

## SVG icons
If you need a reliable way to provide hiDPi icons, we recommend using SVG. The only problem is that SVGs do not have the best browser support. To fix this, we recommend using [Grunticon](https://github.com/filamentgroup/grunticon) by The Filament Group.

#### From the Grunticon's readme:
> grunticon is a Grunt.js task that makes it easy to manage icons and background images for all devices, preferring HD (retina) SVG icons but also provides fallback support for standard definition browsers, and old browsers alike. From a CSS perspective, it's easy to use, as it generates a class referencing each icon, and doesn't use CSS sprites.

We have included a Grunt task to minify SVGs before running the grunticon task on them. These tasks watch the `img/src` folder (where they are minified), and added to the `img/src-min` folder. grunticon watches this folder and generates 3 stylesheets, fallback PNGs and some other related files.

In order for your user's to benefit from this, you will need to add a small inline script to the head of each page.

```html
<script>window.grunticon=function(e){if(e&&3===e.length){var t=window,n=!(!t.document.createElementNS||!t.document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect||!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")||window.opera&&-1===navigator.userAgent.indexOf("Chrome")),o=function(o){var a=t.document.createElement("link"),r=t.document.getElementsByTagName("script")[0];a.rel="stylesheet",a.href=e[o&&n?0:o?1:2],a.media="only x",r.parentNode.insertBefore(a,r),setTimeout(function(){a.media="all"})},a=new t.Image;a.onerror=function(){o(!1)},a.onload=function(){o(1===a.width&&1===a.height)},a.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}};grunticon(["/img/icons/icons.data.svg.css", "/img/icons/icons.data.png.css", "/img/icons/icons.fallback.css"]);</script>
<noscript><link href="/img/icons/icons.fallback.css" rel="stylesheet"></noscript>
```

This script detects what SVG support the user's browser has and serves the appropriate CSS file. **NOTE:** If do not have the same folder structure as us, you will need to change the above script, the value of this Grunt variable `<%=config.img.dir%>` defined in our [Gruntfile line ~44](https://github.com/tmwagency/kickoff/blob/master/Gruntfile.js#L44). You will also need to move the `src-min` & `src` folders into your new image directory.

<hr class="sectionSplitter">
<a name="skip"></a>

## Skip to content link
We recommend that you include a 'skip to content' link so that user's can quickly move past your masthead area if they wish. Include the below HTML as the very first item after your `<body>` tag. You should be able to see that the anchor's href within the `.skipToContent` div points to `#mainContent`, this means that you will need add that id to another div that wraps your main content.

The styling for this is simple, so please modify it; see [/scss/partials/components/_skip-navigation.scss](https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_skip-navigation.scss) to edit styles.

```html
<div class="skipToContent">
	<a href="#mainContent" class="btn btn--primary">Skip to main content</a>
</div>
```


