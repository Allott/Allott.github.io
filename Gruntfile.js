module.exports = function(grunt) {


    grunt.initConfig({
        concat: {
            js: {
                src : ['js/handlebars.js','js/2.js'],
                dest: 'main.js',
            },
            css: {
                src : ['css/1.css','css/2.css'],
                dest: 'style.css',
            }
        },
        watch: {
            js: {
              files: 'js/**/*.js',
              tasks: ['concat:js'],
            },
            css: {
                files: 'css/**/*.css',
                tasks: ['concat:css'],
            },
            templates: {
                files: 'templates/**/*.handlebars',
                tasks: ['handlebars'],
            }
        },
        handlebars: {
            compile : {
                options: {

                },
                files: {
                    'templates.js' : 'templates/**/*.handlebars'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    grunt.registerTask('default', ['concat', 'handlebars']);

    grunt.registerTask('hello', function() {
        console.log('hello world')
    });
};