---
layout: docs
navgroup: docs
navactive: docsyo
title: Kickoff Yeoman Generator

next:
 - title: Get Kickoff
   body: Find out the other ways to get Kickoff here
   link: get.html
 - title: Sublime Text snippets
   body: Use Sublime? These handy snippets will make life with Kickoff even easier.
   link: sublime.html
---

We have created a Yeoman generator for Kickoff to make setting up new projects even faster. It will ask a few questions and them build a version of Kickoff for your needs.

###The generator asks for:
* The project's name
* The names of the project's developers
* The javascript namespace you would like to use (default is `KO`)
* If you'd like to use [Statix](/kickoff/statix/)
* Which javascript libraries to install. jQuery v1x/2x, Trak.js, Swiftclick & Cookies are the options
* If you'd like to use Browserify

[![NPM](https://nodei.co/npm/generator-kickoff.png?downloads=true&stars=true)](https://nodei.co/npm/generator-kickoff/)

[![NPM version](https://badge.fury.io/js/generator-kickoff.png)](http://badge.fury.io/js/generator-kickoff)

## Install the generator
To install generator-kickoff from npm, run:

```sh
npm install -g generator-kickoff
```

Finally, initiate the generator:

```sh
yo kickoff
```

The repo and more information can be found at [github.com/tmwagency/generator-kickoff](https://github.com/tmwagency/generator-kickoff)
