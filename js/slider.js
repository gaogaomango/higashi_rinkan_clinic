$(function(){
	 $('#slider').sliderPro({
			width: '100%',
			slideDistance:0,
			arrows: true,
			autoHeight:true,
			buttons: false,
			fadeFullScreen:true,
			waitForLayers: true,
			thumbnailWidth: 200,
			thumbnailHeight: 100,
			thumbnailPointer: true,
			autoplay: false,
			autoScaleLayers: false,
			breakpoints: {
				500: {
					thumbnailWidth: 120,
					thumbnailHeight: 50
				}
			}
		});
});