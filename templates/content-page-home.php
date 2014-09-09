<div class="row sidback">
  <div class="col-xs-5 col-xs-offset-7">
    <div class="row">
      <div class="col-xs-12 quote">
				<img url="../wp-content/themes/sidbernstein/assets/img/home-quote.png">
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 memory">
        <a type="button" class="memorybutton modal-link" data-toggle="modal" data-target="#memory-form">Click To Share A Memory</a>
      </div>
    </div>
  </div>
</div>






<div class="row">
	<div class="homebio col-md-12">
    <?php echo do_shortcode( "[wpv-view name='home-bio']"); ?>
  </div>
</div>
<div class="row">
  <div class="col-lg-12 homealbumcontainer">
    <?php echo do_shortcode( "[wpv-view name='home-music-player']"); ?>
  </div>
</div>
<div class="modal fade" id="memory-form">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <?php echo do_shortcode( "[cred_form form='Share a story about Sid']"); ?>
      </div>
      <div class="row modal-footer">
        <div class="col-sm-12">
          <button type="button" class="text-right btn btn-warning" class="close" data-dismiss="modal"><span aria-hidden="true">Submit Your Story</span></button>
        </div>
      </div>
    </div>
  </div>
</div>
