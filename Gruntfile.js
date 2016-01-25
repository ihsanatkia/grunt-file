module.exports = function(grunt){

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		watch: {
			css: {	
				files: ['grunt-sass/**/*.scss'],
				tasks: ['sass', 'autoprefixer','csscomb'], 
				options : {
					livereload: true,
				},
			},
		},

		sass: {
		    dist: {                            // Target
		      options: {                       // Target options
		        style: 'expanded',
		        sourcemap: 'none',
		      },
		      files: {                         // Dictionary of files
				'html/style.css':'grunt-sass/style-theme.scss',
		      }
		    }
		},


		autoprefixer: {
            options: {
				browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie 8', 'ie 9']
			},
			style: {
				src: 'html/style.css',
				dest: 'html/style.css'
			},
		},

		csscomb: {
	        dist: {
	            options: {
	                config: '.csscomb.json'
	            },
	            files: {
	                'html/style.css': ['html/style.css'],
	            }
	        }
		},



	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-csscomb');
	grunt.registerTask('default', ['task']);
}