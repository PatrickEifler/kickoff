module.exports.tasks = {

	/**
	* Watch
	* https://github.com/gruntjs/grunt-contrib-watch
	* Watches your scss, js etc for changes and compiles them
	*/
	watch: {
		scss: {
			files: ['scss/**/*.scss', '!scss/styleguide.scss'],
			tasks: [
				'sass:kickoff',
				'autoprefixer:kickoff'
			]
		},

		styleguide_scss: {
			files: ['scss/styleguide.scss'],
			tasks: [
				'sass:styleguide',
				'autoprefixer:styleguide'
			]
		},

		js: {
			files: [
				'<%=config.js.fileList%>',
				'Gruntfile.js'
			],
			tasks: ['browserify:dev']
		},

		livereload: {
			options: { livereload: true },
			files: [
				'css/*.css'
			]
		},

		grunticon : {
			files: ['img/src/*.svg', 'img/src/*.png'],
			tasks: [
				'clean:icons',
				'svgmin',
				'grunticon'
			]
		}
	}
}