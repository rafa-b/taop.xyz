$(function() {


    // Data background cover
			$('*[data-cover]').each(function(){
				var coverTarget = $(this).attr('data-cover');
				var coverimage = $(this).find(coverTarget).attr('src');
				$(this).css('background-image','url('+ coverimage +')');
			});




    // Data slide
			$('*[data-slide]').on('click', function(){
				var slideTarget = $(this).attr('data-slide');
			    $('html, body').animate({
			        scrollTop: $(slideTarget).offset().top
			    }, 1000);
				return false;
			});




    // Welcome slider
            $('.welcome_slider > ul').bxSlider({
                mode: 'fade',
                auto: true,
                stopAutoOnClick: true
            });




    // Popup
            $('.team_list > li figure figcaption > a').on('click', function(){
                $(this).parent().parent().addClass('active');
                return false;
            })
            $('.team_list > li .popup .close').on('click', function(){
                $(this).parent().parent().removeClass('active');
            })




    // Quote slider
            $('.quote_slider .wrapper > ul').bxSlider({
                mode: 'fade',
                pager: false
            });




    // FAQ
            $(".faq_block dl dt").on('click', function(){
                $(this).toggleClass('active').next('dd').slideToggle();
            });

            
            
            
    // Show/hide input value
			$('input[type="text"], input[type="password"], input[type="email"]').each(function(){
				var valtxt = $(this).attr('value');
				$(this).focus(function() { if ($(this).val() == valtxt) {$(this).val('');} });
				$(this).blur(function() { if ($(this).val() == '') {$(this).val(valtxt);} });
			});
			$("textarea").focus(function() {if (this.value === this.defaultValue) {this.value = '';}}).blur(function() {if (this.value === '') {this.value = this.defaultValue;}});


}); 