/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 *
 * Google CDN, Latest jQuery
 * To use the default WordPress version of jQuery, go to lib/config.php and
 * remove or comment out: add_theme_support('jquery-cdn');
 * ======================================================================== */

(function($) {

  var src;
  var mode;
  var container;

  function gridIt(){
    container = document.querySelector('.jsmasonry');
    $(container).masonry();
  }

  function gridImg(){
    imagesLoaded('.jsmasonry', function(){
      gridIt();
    });
  }

  function gridVid(){
    imagesLoaded('.jsmasonry', function(){
      gridIt();
      $(".item").fitVids();
    });
  }

  function gridMem(){
    gridImg();
    $(".item").fitVids();
  }

  function stopVid(){
    $('.modal').on('show.bs.modal', function(){
      mode = $(this).find("iframe");
      src = mode.attr('src');
    });
    $('.modal').on('hide.bs.modal', function(){
      mode.attr('src', '');
      mode.attr('src', src);
    })
  }

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Roots = {

    common: {
      init: function() {
        $('.modal-link').bind('touchstart', function(e) {
          $(this).toggleClass('hover_effect');
        });

        soundManager.setup({
          // disable or enable debug output
          debugMode: true,
          // use HTML5 audio for MP3/MP4, if available
          preferFlash: false,
          useFlashBlock: true,
          // path to directory containing SM2 SWF
          url: ' ',
          // optional: enable MPEG-4/AAC support (requires flash 9)
          flashVersion: 9
        });

        soundManager.onready(function() {
        // soundManager.createSound() etc. may now be called
          inlinePlayer = new InlinePlayer();
        });

        //iOS 7 workaround
        if (navigator.userAgent.match(/(iPad|iPhone);.*CPU.*OS 7_\d/i)) {
          $("body").css({
            "background": "url(../assets/img/bg.jpg) center center no-repeat",
            "background-size": "cover",
            "padding-bottom": "50px"
          });
        } else {
          $.backstretch("http://stage.sidbernstein.com/wp-content/themes/sidbernstein/assets/img/bg.jpg");
        };
      }
    },

    home: {
      init: function() {
      }
    },

    post_type_archive_bio: {
      init: function() {
      }
    },

    post_type_archive_photos: {
      init: function() {
        gridImg();
      }
    },

    post_type_archive_videos: {
      init: function() {
        gridVid();
        stopVid();
      }
    },

    post_type_archive_memories: {
      init: function() {
        gridMem();
        stopVid();
      }
    },

    blog: {
      init: function() {
        gridMem();
        stopVid();
      }
    }
  };


  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var namespace = Roots;
      funcname = (funcname === undefined) ? 'init' : funcname;
      if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      UTIL.fire('common');
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
      });
    }
  };

  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
