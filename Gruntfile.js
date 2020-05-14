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
            },
            html: {
                src : ['html/main.html'],
                dest: 'index.html',
            },
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
            html: {
              files: 'html/**/*.html',
              tasks: ['concat:html'],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat','watch']);

    grunt.registerTask('hello', function() {
        console.log('hello world')
    });
};