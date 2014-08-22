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
    var container = document.getElementsByClassName('.js-masonry')[0];
		var msnry;
		// initialize Masonry after all images have loaded
		imagesLoaded(container, function() {
		  debugger;
		  console.log("images have loaded");
		  msnry = new Masonry(container, {
		  // options...
		  	columnWidth: 150,
		    itemSelector: '.item',
		    gutter: 5
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
