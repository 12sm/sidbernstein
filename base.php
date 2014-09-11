<?php get_template_part('templates/head'); ?>
<body <?php body_class(); ?>>
  <div class="grade">
              
              <div class="<?php echo roots_sidenavbar_class(); ?>">
                  <section class="side-nav-wrapper">
                      <?php get_template_part('templates/sidenavbar'); ?>
                  </section>
              </div><!-- /.sidenavbar -->


    <div class="wrap container-fluid mainarea" role="document">
      <div class="content row">
        <main class="main <?php echo roots_main_class(); ?>" role="main">
          <?php include roots_template_path(); ?>
        </main><!-- /.main -->
        <?php if (roots_display_sidebar()) : ?>
          <aside class="sidebar <?php echo roots_sidebar_class(); ?>" role="complementary">
            <?php include roots_sidebar_path(); ?>
          </aside><!-- /.sidebar -->
        <?php endif; ?>
      </div><!-- /.content -->
    </div><!-- /.wrap -->

    <?php get_template_part('templates/footer'); ?>
  </div>
</body>
</html>
