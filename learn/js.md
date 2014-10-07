---
layout: docs
navgroup: docs
navactive: docsjs
title: JavaScript
---

Information about the default JavaScript included in the project.

## script.js

This file can be used to contain or reference your site/app JavaScript code. For larger projects, you can make use of a JavaScript module loader, like [Require.js](http://requirejs.org/), to load any other scripts you need to run.

By default, there is a `TMW` namespace, this can be changed to anything, perhaps the name of the project. We tend to use the [singleton pattern](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript).

## Bower
A few bower packages are included with Kickoff by default, these can be found by viewing the [bower.json file](https://github.com/tmwagency/kickoff/blob/master/bower.json):

* [Swiftclick](https://github.com/tmwagency/swiftclick) - Developed by our own Ivan Hayes, SwiftClick is a library created to eliminate the 300ms click event delay on touch devices.
* [Trak.js](https://github.com/tmwagency/trak.js) - Developed by our own Zander Martineau, trak.js is a universal analytics event tracking API
* [Cookies](https://github.com/ScottHamper/Cookies/) - Developed by Scott Hamper, Cookies is a great Cookie manipulation library


## Shims
We use Nic Bell's brilliant, [Shimly](https://github.com/nicbell/Shimly), a Grunt plugin for creating a bespoke shims file. Read the Shimly [on Github](https://github.com/nicbell/Shimly).

## Libraries

If you need to add any 3rd party library code, we suggest placing them in the [js/libs/](https://github.com/tmwagency/kickoff/tree/master/js/libs) folder. The latest jQuery and Modernizr libraries are included by default. You may wish to create your own [custom Modernizr build](http://www.modernizr.com/download/). Other recommended libraries include:
