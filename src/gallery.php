<div id="main">
	<p id="orig"></p>
	<h1>T-Shirts Show Case</h1>

	<hr />

	<div id="gallery">
    
<?php

/* Configuration Start */

$thumb_directory = '../gallery/img/thumbs';
$orig_directory = '../gallery/img/original';

$stage_width=600;	// How big is the area the images are scattered on
$stage_height=400;

/* Configuration end */

$allowed_types=array('jpg','jpeg','gif','png');
$file_parts=array();
$ext='';
$title='';
$i=0;

/* Opening the thumbnail directory and looping through all the thumbs: */

$dir_handle = @opendir($thumb_directory) or die("There is an error with your image directory!");

$i=1;
while ($file = readdir($dir_handle)) 
{
	/* Skipping the system files: */
	if($file=='.' || $file == '..') continue;
	
	$file_parts = explode('.',$file);
	$ext = strtolower(array_pop($file_parts));

	/* Using the file name (withouth the extension) as a image title: */
	$title = implode('.',$file_parts);
	$title = htmlspecialchars($title);

	/* If the file extension is allowed: */	
	if(in_array($ext,$allowed_types))
	{
		/* Generating random values for the position and rotation: */
		$left=rand(0,$stage_width);
		$top=rand(0,400);
		$rot = rand(-40,40);
		
		if($top>$stage_height-130 && $left > $stage_width-230)
		{
			/* Prevent the images from hiding the drop box */
			$top-=120+130;
			$left-=230;
		}
		
		/* Outputting each image: */
		
		echo '
		<div id="pic-'.($i++).'" class="pic" style="top:'.$top.'px;left:'.$left.'px;
		background:url(gallery/img/thumbs/'.$file.') no-repeat 50% 50%; 
		-moz-transform:rotate('.$rot.'deg); -webkit-transform:rotate('.$rot.'deg);">
		<a class="fancybox" rel="fncbx" href="gallery/img/original/'.$file.'" target="_blank">'.$title.'</a>
		</div>';
	}
}

/* Closing the directory */
closedir($dir_handle);

?>
    <!--div class="drop-box">
    </div-->
    
	</div>
    
	<div class="clear"></div>

<!-- This is later converted to the modal window with the url of the image: -->

<!--div id="modal" title="Share this picture">
	<form action="">
	<fieldset>
		<label for="url">URL of the image</label>
		<input type="text" name="url" id="url" class="text ui-widget-content ui-corner-all" onfocus="this.select()" />
	</fieldset>
	</form>

</div-->