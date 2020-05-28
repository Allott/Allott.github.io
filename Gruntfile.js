module.exports = function(grunt) {


    grunt.initConfig({
        concat: {
            js: {
                src : ['js/front.js','js/model/diceModel.js','js/model/poolModel.js','js/collections/poolCollection.js','js/view/poolsView.js','js/view/poolView.js','js/end.js'],
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
                    namespace: false,
                    wrapped: true,
                    //partialsUseNamespace: true,
                    //amd: true,
                    //commonjs: true,
                },
                files: {
                    'templates2.js' : 'templates/**/*.handlebars'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    grunt.registerTask('default', ['concat']); //ahndle bars currently broke, manual for now

    grunt.registerTask('hello', function() {
        console.log('hello world')
    });
};