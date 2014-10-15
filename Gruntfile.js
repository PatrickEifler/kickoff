module.exports = function (grunt) {

	'use strict';

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	var options = {
		pkg: require('./package'), // <%=pkg.name%>

		/**
		 * Config - Edit this section
		 * ==========================
		 * Choose javascript dist filename
		 * Choose javascript dist location
		 * Choose javascript files to be uglified
		 */
		config : {
			src: "_grunt-configs/*.js",

			css : {
				distDir : 'css',     // <%=config.css.distDir%>
				srcFile : 'kickoff', // <%=config.css.srcFile%>
				scssDir : 'scss'     // <%=config.css.scssDir%>
			},

			js : {
				distDir  : 'js/dist/', // <%=config.js.distDir%>
				distFile : 'app.min.js', // <%=config.js.distFile%>
				srcFile : 'js/script.js', // <%=config.js.srcFile%>
			},

			testing: {
				visual : {
					sizes: [ '600', '1000', '1200' ], // <%=config.testing.visual.sizes%>

					// <%=config.testing.visual.urls%>
					urls : [
						'http://localhost:3000',
						'http://localhost:3000/_docs/',
						'http://localhost:3000/_docs/styleguide.html'
					]
				}
			}
		}
	};


	// Load grunt configurations automatically
	var configs = require('load-grunt-configs')(grunt, options);

	// Define the configuration for all the tasks
	grunt.initConfig(configs);


	/* ==========================================================================
		Available tasks:
* grunt            : run jshint, browserify and sass:kickoff
* grunt start      : run this before starting development
* grunt watch      : run sass:kickoff, browserify and livereload
* grunt dev        : run browserify, sass:kickoff & autoprefixer:dist
* grunt deploy     : run jshint, browserify, sass:kickoff and csso
* grunt jquery     : build custom version of jquery
* grunt styleguide : watch js & scss, run a local server for editing the styleguide
* grunt serve      : watch js & scss and run a local server
* grunt icons      : generate the icons. uses svgmin and grunticon
* grunt jscheck    : run jshint & jscs
* grunt travis     : used by travis ci only
		 ========================================================================== */

	/**
	* GRUNT * Default task
	* run browserify, sass:kickoff and autoprefixer
	*/
	grunt.registerTask('default', [
		'shimly',
		'newer:browserify:prod',
		'newer:sass:kickoff',
		'autoprefixer:kickoff',
		'browserSync:serve',
		'watch'
	]);

	/**
	* GRUNT START * Run this to
	* run jquery builder, browserify, sass and autoprefixer
	*/
	grunt.registerTask('start', [
		'shell:bowerinstall',
		'shimly',
		'browserify:prod',
		'sass:kickoff',
		'sass:styleguide',
		'autoprefixer:kickoff',
		'autoprefixer:styleguide',
		'connect:start',
		'watch'
	]);


	/**
	 * GRUNT DEV * A task for development
	 * run browserify, sass:kickoff & autoprefixer:dist
	 */
	grunt.registerTask('dev', [
		'shimly',
		'browserify:dev',
		'sass:kickoff',
		'autoprefixer:kickoff'
	]);


	/**
	* GRUNT DEPLOY * A task for your production environment
	* run browserify, sass:kickoff, autoprefixer:dist and csso
	*/
	grunt.registerTask('deploy', [
		'shimly',
		'newer:browserify:prod',
		'newer:sass:kickoff',
		'newer:autoprefixer:kickoff',
		'newer:csso'
	]);


	/**
	 * GRUNT STYLEGUIDE * A task for the styleguide
	 * run browserify, sass:kickoff, sass:styleguide, autoprefixer:dist, autoprefixer:styleguide, connect:styleguide & watch
	 */
	grunt.registerTask('styleguide', [
		'shimly',
		'browserify:prod',
		'sass:kickoff',
		'sass:styleguide',
		'autoprefixer:kickoff',
		'autoprefixer:styleguide',
		'connect:styleguide',
		'watch'
	]);


	/**
	 * GRUNT SERVE * A task for for a static server with a watch
	 * run connect and watch
	 */
	grunt.registerTask('serve', [
		'shimly',
		'browserify:prod',
		'sass:kickoff',
		'autoprefixer:kickoff',
		'browserSync:serve',
		'watch'
	]);


	/**
	 * GRUNT ICONS * A task to create all icons using grunticon
	 * run clean, svgmin and grunticon
	 */
	grunt.registerTask('icons', [
		'clean:icons',
		'svgmin',
		'grunticon'
	]);


	/**
	 * GRUNT CHECKS * Check code for errors
	 * run jshint
	 */
	grunt.registerTask('checks', [
		'jshint:project'
	]);


	/**
	 * Travis CI to test build
	 */
	grunt.registerTask('travis', [
		'jshint:project',
		'uglify',
		'sass:kickoff'
	]);


	/**
	 * GRUNT DOFILESEXIST * Check for the existence of specific files and fail if not found
	 */
	grunt.registerMultiTask('dofilesexist', function () {

		var filePaths = this.data;
		var numFailedFiles = 0;

		if (Array.isArray(filePaths)) {

			filePaths.forEach(function(path) {

				if (!grunt.file.exists(path))
				{
					grunt.log.warn("Source file: '" + path + "' not found.");
					numFailedFiles++;
				}
			});

			if (numFailedFiles > 0) grunt.fail.warn("Please add the missing files.");
		}
	});


	/**
	 * TODO:
	 * Need task to update all grunt dependencies
	 * Need task to download all bower dependencies
	 */

};
