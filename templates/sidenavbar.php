<div class="sidenav navbar navbar-default" data-spy="affix" data-offset-top="120" role="sidenav">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle navbar-inverse" data-toggle="collapse" data-target=".sidenavbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar white"></span>
        <span class="icon-bar white"></span>
        <span class="icon-bar white"></span>
      </button>
    </div>
      <div class="collapse sidenavbar-collapse" role="navigation">
      <?php
        if (has_nav_menu('side_navigation')) :
            wp_nav_menu(array('theme_location' => 'side_navigation', 'menu_class' => 'nav nav-pills nav-stacked'));
        endif;
        ?>
      </div>
</div>