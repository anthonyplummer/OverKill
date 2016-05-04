/*global module:false*/
module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),

  /**
   * Set project object
   */

  project: {
    name: 'FlashTalker',
    website: 'https://www.github.com/plummera/OverKill/',
    assets: 'assets',
    author: 'Anthony T. Plummer',
    css: 'overkill.css',
    scss: '<%= project.assets %>/scss/css/overkill.scss',
    js: '<%= project.assets %>/js/overkill.js'
  },

  // Metadata.
  meta: {
    version: '0.1'
  },

  banner: '/*! <%= project.name %> - v<%= meta.version %> - ' +
    '<%= grunt.template.today("yyyy-mm-dd") %>\n ' +
    '* <%= project.website %>/\n' +
    '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
    '<%= project.author %>; Unlicensed for the free! */\n',

  // Task configuration.
  concat: {
    options: {
      banner: '<%= banner %>',
      stripBanners: true,
      seperator: ';'
    },

    sass: {
      src: ['<%= project.assets %>/test/scss/**/*.scss'],
      dest: '<%= project.assets %>/scss/css/overkill.scss'
    },

    js: {
      src: '<%= project.assets %>/test/js/**/*.js',
      dest: '<%= project.js %>'
    }
  },

  uglify: {
    options: {
      banner: '<%= banner %>'
    },
    dist: {
      files: {
        '<%= project.assets %>/js/<%= pkg.name %>.min.js' : ['<%= project.js %>']
      }
    }
  },

  jshint: {
    options: {
      curly: true,
      eqeqeq: true,
      immed: true,
      latedef: true,
      newcap: true,
      noarg: true,
      sub: true,
      undef: true,
      unused: true,
      boss: true,
      eqnull: true,
      browser: true,
      globals: {
        jQuery: true,
        "$": false
      }
    },
    overkill: {
      src: ['<%= project.js %>']
    }
  },

  /**
   * Sass
   */
  sass: {
    overkill: {
      options: {
        style: 'expanded',
        compass: true
      },

      files: {
        '<%= project.assets %>/css/overkill.css': '<%= project.assets %>/scss/css/overkill.scss'
      }
    }
  },

  watch: {
    options: {
      livereload: true
    },

    overkill: {
      files: ['<%= project.assets %>/test/js/**/*.js', '<%= project.assets %>/test/scss/**/*.scss'],
      tasks: ['jshint', 'concat:sass', 'sass', 'concat', 'uglify']
    }
  }
});

// These plugins provide necessary tasks.
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-livereload');
grunt.loadNpmTasks('grunt-contrib-compass');

// Default task.
grunt.registerTask('default', ['jshint', 'concat:sass', 'sass', 'concat', 'uglify']);
}
