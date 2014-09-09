<div class="sidback">
	<div class="row">
		<div class="col-sm-6">
			<div class="row">
			</div>	
		</div>
		<div class="col-sm-6">
			<div class="row">
				<div class="quote">
				</div>
				<div class="memory">
	   		 		<a type="button" class="memorybutton modal-link" data-toggle="modal" data-target="#memory-form">Click To Share A Memory</a>
				</div>
				</div>
			</div>
		</div>
	</div>			
<div class="col-md-12 homebio">
	<div class="row">	
		<?php
	 		 echo do_shortcode("[wpv-view name='home-bio']");
		?>
	</div>
</div>
 <div class="col-lg-12 homealbumcontainer">
  	<div class="row"> 
		<?php
	 		 echo do_shortcode("[wpv-view name='home-music-player']");
		?>
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
                <?php
                echo do_shortcode("[cred_form form='Share a story about Sid']");
                ?>
            </div>
            <div class="row modal-footer">
                <div class="col-sm-12">
                	<button type="button" class="button" class="close" data-dismiss="modal"><span aria-hidden="true">Share your Memory</span></button>
               	</div>
		</div>
	</div>
</div>
		


