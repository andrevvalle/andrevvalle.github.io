module.exports = function(grunt){
	grunt.initConfig({
		less: {
		  development: {
		    files: {
		      "css/main.css": "css/main.less"
		    }
		  }
		},
		cssmin: {
		  combine: {
		    files: {
		      'css/main.min.css': ['css/main.css']
		    }
		  }
		},
		jshint: {
	    	all: ['Gruntfile.js', 'js/main.js']
	  	},
	  	uglify:{
			my_target:{
				files:{
					'js/main.min.js' : ['js/main.js']
				}	
			}
		},
		connect :  { 
	      server : {
	        options : {
	          hostname : 'localhost',
	          port: 9000,
	          keepalive: true,
	          open: true,
	        }
	      }
	    },
		watch: {
			gruntfile: {
                files: ['Gruntfile.js']
            },
            less: {
            	files: ['css/*.less'],
            	tasks: ['less']
            },
            cssmin: {
            	files: ['css/main.css'],
            	tasks: ['cssmin'],
            	options: {
            		livereload: true
            	}
            },
            jshint: {
            	files: ['js/main.js'],
            	tasks: ['jshint']
            },
            uglify: {
            	files: ['js/main.js'],
            	tasks: ['uglify'],
            	options: {
            		livereload: true
            	}
            },
            html: {
            	files: ['*.html'],
            	options: {
            		livereload: true
            	}
            }
		}
	});
	
	grunt.registerTask("watch", ["watch"]);
	grunt.registerTask('server', ['connect:server']);

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
};