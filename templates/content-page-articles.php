<div class="row">
  <div class="col-sm-10 col-sm-offset-1">
    <div class="page-header">
      <h1>
        <i class="fa fa-newspaper-o"></i>
        <?php echo roots_title(); ?>
      </h1>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-12">
  <?php
    echo do_shortcode("[wpv-view name='articles']");
  ?>
  </div>
</div>
