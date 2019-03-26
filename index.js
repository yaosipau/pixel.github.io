$('.navbar a').on('click', function(e) {
	if(this.hash != '') {
		e.preventDefault();
		const hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		},800);		
	}
});

// var modal = document.getElementById('mymodal');
// var img = document.getElementById('myimg');
// var modalImg = document.getElementById('img01');
// var captionText = document.getElementById('caption');

// img.onclick = function() {
// 	modal.style.display = "block";
// 	modalImg.src = this.src;
// }
$('img').on('click', function() {
	$('.modal').css({'display':'block'});
	var imgsrc = $(this).attr('src');
	$('.modal-content').attr('src',imgsrc);

})
$('.close').on('click', function() {
	$('.modal').css({'display':'none'});
})
// var span = document.getElementsByClassName('close')[0];
// span.onclick = function() {
// 	modal.style.display='none';
// }