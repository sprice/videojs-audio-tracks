'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    copy: {
      main: {
        files: [
          {
            expand: true,
            flatten: true,
            src: [
              'node_modules/video.js/dist/video-js.min.css',
              'node_modules/videojs-audio-tracks/dist/videojs-audio-tracks.min.css',
            ],
            dest: 'css/'
          },

          {
            expand: true,
            flatten: true,
            src: [
              'node_modules/video.js/dist/video.min.js',
              'node_modules/video.js/dist/video.min.js.map',
              'node_modules/videojs-audio-tracks/dist/videojs-audio-tracks.min.js'
            ],
            dest: 'js/'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy']);
};