<!-- <div class="row sidback">
  <div class="memright col-xs-6 col-xs-offset-5">
    <div class="row">
      <div class="col-xs-12 quote">
        <img src="../wp-content/themes/sidbernstein/assets/img/home-quote.png">
      </div>
    </div>
    <div class="row membutt">
      <div class="col-xs-12">
        <button type="button" class="memorybutton modal-link" data-toggle="modal" data-target="#memory-form">Click To Share A Memory</button>
      </div>
    </div>
  </div>
</div> -->



<?php while (have_posts()) : the_post(); ?>
  <?php the_content(); ?>
  <?php wp_link_pages(array('before' => '<nav class="pagination">', 'after' => '</nav>')); ?>
<?php endwhile; ?>
<div class="row sidhomebio">
  <div class="homebio col-xs-12">
    <?php echo do_shortcode( "[wpv-view name='home-bio']"); ?>
  </div>
</div>
<div class="row sidhomestore">
  <div class="col-xs-10 col-xs-offset-1 homestore">
    <?php echo do_shortcode( "[wpv-view name='home-store']"); ?>
  </div>
</div>
<div class="row sidhomealbum">
  <div class="col-xs-10 col-xs-offset-1 homealbum">
    <?php echo do_shortcode( "[wpv-view name='home-music-player']"); ?>
  </div>
</div>
