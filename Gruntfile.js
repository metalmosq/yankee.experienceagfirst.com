module.exports = function(grunt) {

	// 1. All configuration goes here 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {                              // Task 
			dist: {                            // Target 
				options: {                       // Target options 
					style: 'expanded'
				},
				files: {                         // Dictionary of files 
					'css/yankee.experienceagfirst.css': 'build/sass/main.scss',       // 'destination': 'source' 
				}
			}
		},

		watch: {
			css: {
				files: ['build/sass/**/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false,
				}
			}
		}

	});

	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['sass']);

};