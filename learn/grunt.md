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
Grunt is used extensively in Kickoff. It is the beating heart of the framework, we use it to compile our Sass, concatinate and then minify our JavaScript files, or to fire up a simple local server with LiveReload for some testing. Using Grunt has other benefits besides this; it allows any dev to pick up a project, regardless of if they've worked on it before, and get up and running in no time at all.

## Setting up Kickoff to use Grunt is extremely simple, follow these simple steps

#### Step 1 - Install Node
Download and install Node.js from [nodejs.org](http://nodejs.org/)

#### Step 2 - Install the Grunt CLI
In order to get started, you'll want to install Grunt's command line interface (CLI) globally. You may need to use sudo (for OSX, *nix, BSD etc) or run your command shell as Administrator (for Windows) to do this.

Run `npm install -g grunt-cli`. This will put the grunt command in your system path, allowing it to be run from any directory.

#### Step 3 - Install Sass
Make sure you have Ruby v2 installed, then run `gem install sass` (or possibly `sudo gem install sass`) - you can also install the pre-release version of Sass using `gem install sass --pre`. This will install it globally on your machine so Grunt has access to it.

#### Step 4 - Install LiveReload browser extension
In order to have your browser's styles refresh when a Sass file is modified you will need to install the [LiveReload browser extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-) (there are versions for Chrome, Safari and Firefox).

### Step 5 - Get Kickoff
Download Kickoff using any of the options on the [Get Kickoff page](get.html).

#### Step 6 - Install Node dependencies
Grunt will not work without having installed it's dependencies. Kickoff's [package.json](https://github.com/tmwagency/kickoff/blob/master/package.json) uses a few essential Grunt plugins to operate. To install them, `cd` into the project directory, then run `npm install` which will add a new folder called `node_modules` with all the dependencies.

#### Grunt is now setup!

## Use Grunt
Kickoff comes with many useful Grunt tasks. See below for an explanation for each of them.

#### grunt - default task
Run `grunt` to run [uglify](https://github.com/gruntjs/grunt-contrib-uglify) (to minify and concatinate javascript), sass:kickoff (to compile Sass) & autoprefixer:kickoff (to add vendor prefixes to the Sass)

#### grunt dev - a task for development environments
Run `grunt dev` to run uglify (to minify and concatinate javascript), sass:kickoff (to compile Sass) & autoprefixer:kickoff (to add vendor prefixes to the Sass)

#### grunt deploy - a task for production environments
This task is the same as **grunt dev** but minifies the CSS output as well - useful for production environments. Run `grunt deploy` to initiate this task.

#### grunt watch
The grunt watch task is incredibly powerful (it uses [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)). Run `grunt watch` to initiate this task. It is setup to watch:

* the scss for changes (and then compile them to CSS)
* the javascript for changes (& then to minify and concatinate using uglifyjs)
* any svg file that is added to the 'img/src' directory (& then run svgmin & grunticon)

#### grunt serve
Run `grunt serve` to create a simple static server (using [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)) for previewing your work. This task will open your defaut browser and enable Livereload so that CSS changes are updated when you edit your Sass. This task runs uglify (to minify and concatinate javascript), sass:kickoff (to compile Sass), autoprefixer:kickoff (to add vendor prefixes to the Sass) & grunt watch (above) to monitor for changes.

#### grunt icons - a task to create all icons using grunticon
Kickoff includes [grunticon](https://github.com/filamentgroup/grunticon), a tool that makes it easy to manage SVG icons while created fallbacks & CSS for browsers that might not have support for it. Run `grunt icons` to regenerate the icons. This tasks uses [svgmin](https://github.com/sindresorhus/grunt-svgmin) (to minify SVGs) & grunticon.

#### grunt jscheck
Run `grunt jscheck` to check javascript for errors and style problems.

## Next steps:
### Javascript
By default Kickoff minifies, concatinates and creates a [Source Map](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) for all javascript files included in the project.

To choose which javascript files you want to include, just edit the `jsFileList` array at the beginning of the file. Files in this array should be organised in the order that you need them to be run.

### CSS / SCSS
There are two main `.scss` files that get compiled by Grunt: `scss/kickoff.scss` and `scss/kickoff-old-ie.scss`. These are compiled to `css/kickoff.css` and `css/kickoff-old-ie.css`. If you need to add or amend this list, change the `dev` and `deploy` subtasks in the Gruntfile (around [line 30](https://github.com/tmwagency/kickoff/blob/master/Gruntfile.js#L32)).

