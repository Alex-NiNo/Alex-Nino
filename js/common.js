$(function() {

	// Custom JS

	// Расхлоп для мобильных устроиств
	$(".contact-but").click(function() {
		$(this).next().slideToggle();
	});
		$(".resp").click(function() {
		$(this).next().slideToggle();
	});

	// Popup
	$(".pop-up").magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.magnificPopup.close();
			}, 1000);
		});
		return false;
	});

	// Owl-carousel
	$('.reviews').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		autoHeight: true
		});
});
