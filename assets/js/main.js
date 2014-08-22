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

  function gridIt(){
    console.log("function has been hit");
    debugger;
		// initialize Masonry after all images have loaded
		imagesLoaded('.jsmasonry', function() {
		  var container = document.querySelector('.jsmasonry');
		  console.log("images have loaded");
		  var msnry = $(container).masonry({
		  // options...
		  });
		  console.log(msnry);
		});
  }

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Roots = {

    common: {
      init: function() {
        // JavaScript to be fired on all pages
        console.log("this script will run if this works");
      }
    },

    home: {
      init: function() {
        // JavaScript to be fired on the home page
        console.log("this is the home page yo");
      }
    },

    sids_bio_4: {
      init: function() {
        // JavaScript to be fired on the about us page
        console.log("this is the bio page yo");
      }
    },

    post_type_archive_photos: {
      init: function() {
        // JavaScript to be fired on the about us page
        console.log("this is the photos page yo");
        gridIt();
      }
    }
  };

         //iOS 7 workaround
  if (navigator.userAgent.match(/(iPad|iPhone);.*CPU.*OS 7_\d/i)) {
  $("body").css({
    "background": "url(/assets/img/bg.jpg) center center no-repeat",
    "background-size": "cover",
    "padding-bottom": "50px"
  });
} else {
  $.backstretch("..wp-content/themes/sidbernstein/assets/img/bg.jpg");
}

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
