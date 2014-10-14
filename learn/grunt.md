---
layout: docs
navgroup: docs
navactive: docsgrunt
title: "Kickoff &#10084;'s Grunt"

next:
 - title: Kickoff's CSS
   body: Find out how Kickoff's CSS works
   link: css.html
 - title: Kickoff's Javascript
   body: Find out how Kickoff's JS works
   link: js.html
---

Grunt is used extensively in Kickoff; It is the beating heart of the framework.

We use it to compile our Sass, concatinate and then minify our JavaScript files, or to fire up a simple local server with LiveReload for some testing.

Using Grunt has other benefits besides this.  It allows any dev to pick up a project, regardless of if they've worked on it before, and get up and running in no time.  It also helps to ensure the menial tasks that can sometimes be forgotten, are already configured when you are ready to deploy your site.


<hr class="sectionSplitter">

<a name="setup"></a>

## Setting up Kickoff to use Grunt

Setting up Kickoff to use Grunt is extremely simple – just follow these simple steps:


#### Step 1 - Install Node
Download and install Node.js from [nodejs.org](http://nodejs.org/)


#### Step 2 - Install the Grunt CLI
In order to get started, you'll want to install Grunt's command line interface (CLI) globally.

Run `npm install -g grunt-cli` in your terminal or command shell. This will put the `grunt` command in your system path, allowing it to be run from any directory.

N.b. If you have any problems running the above command due to permission errors, you may need to use sudo (on OSX, *nix, BSD etc) or run your command shell as Administrator (on Windows).


#### Step 3 - Install Sass
Make sure you have Ruby v2 installed, then run `gem install sass` – or if you get a permission error, use `sudo gem install sass`.

You can also install the pre-release version of Sass using `gem install sass --pre`. This will install it globally on your machine so that Grunt has access to it.


#### Step 4 - Install LiveReload browser extension
In order to have your browser's styles refresh when a Sass file is modified, you will need to install the [LiveReload browser extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-) – there are versions for Chrome, Safari and Firefox.


#### Step 5 - Get Kickoff
Download Kickoff using any of the options on the [Get Kickoff page](get.html).


#### Step 6 - Install Node dependencies
Grunt will not work without having installed it's dependencies. Kickoff's [package.json](https://github.com/tmwagency/kickoff/blob/master/package.json) uses a few essential Grunt plugins to operate.

To install them, use your terminal to `cd` into the root of the Kickoff directory, and then run `npm install`.  This will install all of the required dependencies to a new folder called `node_modules` inside your project.


#### Grunt is now setup!

<hr class="sectionSplitter">

<a name="tasks"></a>

## Use Kickoff’s grunt tasks

Kickoff comes with a number of useful Grunt tasks already setup for you to use.  These are tasks that you can run from the command line in the root directory of your Kickoff project.

Here is a guide to the tasks that are available and what each of them does:

<hr>

#### grunt - the default task

Running `grunt` will carry out the following tasks on your code:

* Runs [Shimly](#task-shimly) to compile together a small set of JavaScript shims to use in your project.
* [Uglify](#task-uglify) – minifies and concatinates your JavaScript files into one file
* [sass:kickoff](#task-sass) - compiles Kickoff’s Sass files into native CSS
* [autoprefixer:kickoff](#task-autoprefixer) – adds vendor prefixes to your CSS

<hr>

#### grunt dev - a task for development environments
Run `grunt dev` to run uglify (to minify and concatinate javascript), sass:kickoff (to compile Sass) & autoprefixer:kickoff (to add vendor prefixes to the Sass)

<hr>

#### grunt deploy - a task for production environments
This task is the same as **grunt dev** but minifies the CSS output as well - useful for production environments. Run `grunt deploy` to initiate this task.

<hr>

#### grunt watch
The grunt watch task is incredibly powerful (it uses [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)). Run `grunt watch` to initiate this task. It is setup to watch:

* the scss for changes (and then compile them to CSS)
* the javascript for changes (& then to minify and concatinate using uglifyjs)
* any svg file that is added to the 'img/src' directory (& then run svgmin & grunticon)

<hr>

#### grunt serve
Run `grunt serve` to create a simple static server (using [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)) for previewing your work. This task will open your defaut browser and enable Livereload so that CSS changes are updated when you edit your Sass. This task runs uglify (to minify and concatinate javascript), sass:kickoff (to compile Sass), autoprefixer:kickoff (to add vendor prefixes to the Sass) & grunt watch (above) to monitor for changes.

<hr>

#### grunt icons - a task to create all icons using grunticon
Kickoff includes [grunticon](https://github.com/filamentgroup/grunticon), a tool that makes it easy to manage SVG icons while created fallbacks & CSS for browsers that might not have support for it. Run `grunt icons` to regenerate the icons. This tasks uses [svgmin](https://github.com/sindresorhus/grunt-svgmin) (to minify SVGs) & grunticon.

<hr>

#### grunt check
Run `grunt jscheck` to check javascript for errors and style problems.

<hr class="sectionSplitter">

<a name="config"></a>

## Understanding Kickoff’s Grunt config

Talk here about the config stored in the base Gruntfile

NEEDS DOCUMENTATION

<hr class="sectionSplitter">

<a name="task-appendices"></a>

## Task Index

Ordered by how Kickoff’s tasks are grouped in the `_grunt-configs` directory.

### CSS Tasks

<a name="task-sass"></a>
#### Sass

Uses [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass) to compile Kickoff’s Sass files into native CSS.

We compile Kickoff’s Sass into 2 CSS files; the first is a straight compile of the Sass into native CSS, while the second takes a width parameter and compiles a CSS file without media queries.  This second file is so that we can write our Sass mobile-first, but serve old versions of Internet Explorer CSS a more suitable width layout.  For more information on this approach, see [Jake Archibald’s excellent article on the subject](http://jakearchibald.github.io/sass-ie/).

The Sass task also has a configuration to compile CSS for the project styleguide, when running `grunt styleguide`.

<a name="task-autoprefixer"></a>
#### Autoprefixer

Kickoff uses [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) to add browser prefixes to the CSS, so that the base Sass files are kept as clean as possible.  This means that you can exclude writing browser specific prefixes, and the plugin will add it in when your CSS is compiled.

This task is run after the Sass task has converted Kickoff’s Sass into native CSS.

For more information on Autoprefixer and how it works, see it’s [Github repo and documentation](https://github.com/ai/autoprefixer).

<a name="task-csso"></a>
#### CSSO

To minify our CSS, we use CSSO via the [grunt-csso](https://github.com/t32k/grunt-csso) plugin.


### Icon tasks

The icon tasks included in Kickoff all have to be initiated separately from the default build tasks.  They are there to help with creating icons that work across devices that can be hard to manage otherwise.

<a name="task-grunticon"></a>
#### Grunticon

[Grunticon](https://github.com/filamentgroup/grunticon) is a Grunt.js task that makes it easy to manage icons and background images for all devices.

If you want to use Grunticon, take a look at [their documenation and examples](https://github.com/filamentgroup/grunticon).

Kickoff includes a basic config that makes it easy to get started with Grunticon.  Simply add SVG and PNG files to the `img/src` and run `grunt icons` from the project root directory.  This will run the icons task and give you the icons and code to include those icons in the front–end of your project.

<a name="task-svgmin"></a>
#### SVGMin

This is used as a precursor to Grunticon to ensure SVG files are optimised.  For more information on `grunt-svgmin`, [check out the documentation](https://github.com/sindresorhus/grunt-svgmin).


### JavaScript Tasks

<a name="task-uglify"></a>
#### Uglify

Uses [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) to minify and concatenate the defined JavaScript files into one file.  It also creates a JavaScript source map for use by developer tools, making debugging minified code much more straightforward.

<a name="task-shimly"></a>
#### Shimly

Using the [grunt-shimly](https://github.com/nicbell/shimly) plugin, this allows you to specifiy any JavaScript shims you would like to include in your project.

This allows you to then use native features such as Element.classList, with shim fallbacks for browsers that don’t implement it.

<a name="task-jshint"></a>
#### JSHint

Uses the [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint) plugin to validate your JavaScript files.

This task isn’t specified in the default Kickoff build tasks, but can be initiated by running `grunt checks` from the project root directory.

JSHint can take a number of options when validating your JavaScript, all of which can be managed inside a `.jshintrc` file, found in Kickoff’s root directory.


### Server tasks

Kickoff’s server tasks help create a local development environment for your development.

<a name="task-connect"></a>
#### Connect

Using [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect), Kickoff can start a static web server for you to use when developing.

<a name="task-browsersynx"></a>
#### BrowserSync
Browsersync is used in our `grunt serve` task to create a simple server to preview your static site. Not only does it live reload any style changes (without a browser plugin I might add), but it also makes your workflow faster by synchronising URLs, interactions and code changes across multiple devices.

See this video for a demo:
<div class="fluidVideo"><iframe width="640" height="480" src="//www.youtube-nocookie.com/embed/heNWfzc7ufQ" frameborder="0" allowfullscreen></iframe></div>

### Utility Tasks

<a name="task-clean"></a>
#### Clean

The clean task uses [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean) to remove files from directories specified.  This is useful when copying files from one directory to another to avoid old files remaining when they may have been deleted from the original directory.

<a name="task-clean"></a>
#### Shell

NEEDS DOCUMENTATION HERE

<a name="task-watch"></a>
### Watch Task

Kickoff’s watch task does as you may expect; it watches for changes in files you are working on and acts on any changes you make to them.

For example, if you edit a Sass file, upon saving the file the watch task will run Kickoff’s Sass and autoprefixer tasks to generate your projects CSS.  It will also live reload the CSS into your web browser so that you can see the styling changes immediately.

This task uses the [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) plugin.


<hr class="sectionSplitter">

## Next steps:

### Javascript
By default Kickoff minifies, concatinates and creates a [Source Map](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) for all javascript files included in the project.

To choose which javascript files you want to include, just edit the `jsFileList` array at the beginning of the file. Files in this array should be organised in the order that you need them to be run.

### CSS / SCSS
There are two main `.scss` files that get compiled by Grunt: `scss/kickoff.scss` and `scss/kickoff-old-ie.scss`. These are compiled to `css/kickoff.css` and `css/kickoff-old-ie.css`. If you need to add or amend this list, change the `dev` and `deploy` subtasks in the Gruntfile (around [line 30](https://github.com/tmwagency/kickoff/blob/master/Gruntfile.js#L32)).

