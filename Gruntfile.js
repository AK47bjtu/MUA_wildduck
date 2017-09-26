'use strict';

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        eslint: {
            all: ['lib/**/*.js', 'imap-core/**/*.js', 'test/**/*.js', 'examples/**/*.js', 'Gruntfile.js']
        },

        mochaTest: {
            all: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/**/*-test.js', 'imap-core/test/**/*-test.js']
            }
        },

        wait: {
            server: {
                options: {
                    delay: 7 * 1000
                }
            }
        },

        shell: {
            server: {
                command: 'node server.js',
                options: {
                    async: true
                }
            }
        }
    });

    // Load the plugin(s)
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-shell-spawn');
    grunt.loadNpmTasks('grunt-wait');

    // Tasks
    grunt.registerTask('default', ['eslint', 'shell:server', 'wait:server', 'mochaTest', 'shell:server:kill']);
};