$('.navbar a').on('click', function(e) {
	if(this.hash != '') {
		e.preventDefault();
		const hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		},800);		
	}
});

$('img:not([class])').on('click', function() {
	$('.modal').css({'display':'block'});
	var imgsrc = $(this).attr('src');
	$('.modal-content').attr('src',imgsrc);

})
$('.close').on('click', function() {
	$('.modal').css({'display':'none'});
})
		var scene = document.getElementById('scene');
var parallax = new Parallax(scene);