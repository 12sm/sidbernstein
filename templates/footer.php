<footer class="content-info affix" role="contentinfo">
  <div class="row">
    <div class="col-md-12">
      <div class="row sidebar-footer">
        <?php dynamic_sidebar( 'sidebar-footer'); ?>
      </div>
      <div class="row footer-nav">
        <?php if (has_nav_menu( 'footer_navigation')) : wp_nav_menu(array( 'theme_location'=>'footer_navigation', 'menu_class' => '')); endif; ?>
      </div>

      <div id="social" class="row social-nav">
        <?php if (has_nav_menu( 'social_navigation')) : wp_nav_menu(array( 'theme_location'=>'social_navigation', 'menu_class' => '')); endif; ?>
      </div>
      <div class="credits">
        <?php echo date( 'Y'); ?>
        <?php bloginfo( 'name'); ?>| <a href="http://12southmusic.com/" target="_blank">Built by <striong>12SM</strong></a>
      </div>
    </div>
  </div>
  <div class="modal fade" id="memory-form">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-title">
          <h1>Share A Memory</h1>
        </div>
        <div class="modal-subtitle">
          <p>To add a memory to Sid's Legacy Page, fill out the form below:</p>
        </div>
        <div class="modal-body">
          [cred_form form="Share a story about Sid"]
        </div>
        <div class="row modal-footer">
          <div class="col-sm-12">
            <button type="button" class="button" class="close" data-dismiss="modal"><span aria-hidden="true">Share your Memory</span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

<?php wp_footer(); ?>

<!-- Begin 12SM Network Analytics <!-->
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-27814560-1']);
  _gaq.push(['_setDomainName', '12southmusic.com']);
  _gaq.push(['_setAllowLinker', true]);
  _gaq.push(['_trackPageview']);
  (function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
  })();
</script>
<!-- End 12SM Network Analytics <!-->
