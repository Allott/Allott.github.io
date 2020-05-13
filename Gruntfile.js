module.exports = function(grunt) {


    grunt.initConfig({
        concat: {
            js: {
                src : ['js/1.js','js/2.js'],
                dest: 'build/main.js',
            },
            css: {
                src : ['css/1.css','css/2.css'],
                dest: 'build/styles.css',
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
          },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('hello', function() {
        console.log('hello world')
    });
};