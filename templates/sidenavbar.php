<div class="sidenav navbar navbar-inverse" data-offset-top="" role="sidenav">
  <div class="navbar-header">
    <button type="button" class="navbar-toggle navbar" data-toggle="collapse" data-target=".navbar-collapse">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
  </div>
  <div class="collapse navbar-collapse" role="navigation">
    <div class="navlogo">
      <a href="<?php echo home_url(); ?>/">
        <img src="/wp-content/themes/sidbernstein/assets/img/logo.jpg">
      </a>
    </div>
    <?php if (has_nav_menu( 'side_navigation')) : wp_nav_menu(array( 'theme_location'=>'side_navigation', 'menu_class' => 'nav nav-pills nav-stacked')); endif; ?>
    <div class="row socials">
      <div class="col-xs-6 social face">
        <a href="https://www.facebook.com/SidBernsteinMusic" target="_new"><i class="fa fa-facebook-square"></i></a>
      </div>
      <div class="col-xs-6 social tube">
        <a href="http://www.youtube.com/user/SidBernPresents" target="_new"><i class="fa fa-youtube"></i></a>
      </div>
    </div>
    <div class="row sidemems">
      <div class="col-xs-12">
        <h4 class="sidemem"><a data-target="#memory-form" data-toggle="modal">CLICK HERE TO<br>SHARE A MEMORY</a></h4>
      </div>
    </div>
  </div>
</div>
