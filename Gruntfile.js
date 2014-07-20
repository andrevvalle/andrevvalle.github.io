module.exports = function(grunt){
	grunt.initConfig({
		uglify:{
			my_target:{
				files:{
					'js/main.min.js' : ['js/main.js']
				}	
			}
		},
		cssmin: {
		  combine: {
		    files: {
		      'css/main.min.css': ['css/main.css'],
		      'css/animate.min.css': ['css/animate.css']
		    }
		  }
		},
		less: {
		  development: {
		    files: {
		      "css/main.css": "css/main.less"
		    }
		  }
		},
		watch: {
			gruntfile: {
                files: ['Gruntfile.js']
            },
			src: {
		      files: ['js/*.js', 'css/*.less', 'css/*.css'],
		      tasks: ['default'],
		    },
		},
		connect: {
		  'static': {
		      options: {
		          hostname: 'localhost',
		          port: 9000
		      }
		  }
		}

	})


	grunt.registerTask("default", ["uglify", "less", "cssmin", "watch"]);

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks('grunt-contrib-watch');
}