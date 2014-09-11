<?php get_template_part('templates/head'); ?>
<body <?php body_class(); ?>>
  <div class="modal fade" id="memory-form">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <?php echo do_shortcode( "[cred_form form='Share a story about Sid']"); ?>
        </div>
        <div class="modal-footer">
          <button type="button" class="text-right btn btn-warning" class="close" data-dismiss="modal"><span aria-hidden="true"><i class='fa fa-times-circle'></i></span></button>
        </div>
      </div>
    </div>
  </div>
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
