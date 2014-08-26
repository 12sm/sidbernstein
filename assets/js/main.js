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

  function gridIt(){
    var container = document.querySelector('.jsmasonry');
    $(container).masonry({
    });
  }

  function gridImg(){
    imagesLoaded('.jsmasonry', function() {
      gridIt();
    });
  }
  
  function gridVid(){
    gridIt();
    $(".item").fitVids();
  }

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Roots = {

    common: {
      init: function() {
        console.log("this script will run if this works");
        $('.modal-link').bind('touchstart', function(e) {
          $(this).toggleClass('hover_effect'); 
        });
      }
    },

    home: {
      init: function() {
        console.log("this is the home page");
      }
    },

    sids_bio_4: {
      init: function() {
        console.log("this is the bio page");
      }
    },

    post_type_archive_photos: {
      init: function() {
        console.log("this is the photos page");
        gridImg();
      }
    },

    post_type_archive_videos: {
      init: function() {
        console.log("this is the videos page");
        gridVid();
        $('.modal').on('show.bs.modal', function(){
          mode = $(this).find("iframe");
          src = mode.attr('src');
        });
        $('.modal').on('hide.bs.modal', function(){
          mode.attr('src', '');
          mode.attr('src', src);
        });
      }
    }
    
    post_type_archive_memories: {
      init: function() {
        console.log("this is the memories page");
        gridVid();
        $('.modal').on('show.bs.modal', function(){
          mode = $(this).find("iframe");
          src = mode.attr('src');
        });
        $('.modal').on('hide.bs.modal', function(){
          mode.attr('src', '');
          mode.attr('src', src);
        });
      }
    }
  };

             //iOS 7 workaround
  if (navigator.userAgent.match(/(iPad|iPhone);.*CPU.*OS 7_\d/i)) {
    $("body").css({
      "background": "url(/assets/img/bg.jpg) center center no-repeat",
      "background-size": "cover",
      "padding-bottom": "50px"
    }
  } else {
    $.backstretch("http://stage.sidbernstein.com/wp-content/themes/sidbernstein/assets/img/bg.jpg");
  });

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
