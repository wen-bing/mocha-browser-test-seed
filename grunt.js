/*global module:false*/
module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    mocha: {
      all: ['test/**/*.html']
    }
  });

  //load grunt-mocha task
  grunt.loadNpmTasks('grunt-mocha');
  // Default task.
  grunt.registerTask('default', 'mocha');
};