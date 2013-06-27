jQuery(document).ready(function(){
	//This js is for faq item toggle
	jQuery('.faq-detail').css('display', 'none');
	jQuery('.faq-heading').prepend('<span class="faq-plus-icon"> </span>');
	jQuery('.faq-heading').click(function() {
		var faq_detail = jQuery(this).next('.faq-detail');
		faq_detail.addClass('visible');
		faq_detail.slideToggle('',function(){
			var faq_icon = jQuery(this).prev().find('span');
			faq_icon.removeClass('faq-plus-icon').addClass('faq-minus-icon');
			if(!jQuery(this).is(':visible')){
				jQuery(this).removeClass('visible');
				faq_icon.addClass('faq-plus-icon').removeClass('faq-minus-icon');
			}
		});
	});

	//This js is for faq category toggle
	jQuery('.faq-category-detail').css('display', 'none');
	jQuery('.faq-category-heading').prepend('<span class="faq-category-plus-icon"> </span>');
	jQuery('.faq-category-heading').click(function() {
		var faq_detail = jQuery(this).next('.faq-category-detail');
		faq_detail.addClass('visible');
		faq_detail.slideToggle('',function(){
			var faq_icon = jQuery(this).prev().find('span');
			faq_icon.removeClass('faq-category-plus-icon').addClass('faq-category-minus-icon');
			if(!jQuery(this).is(':visible')){
				jQuery(this).removeClass('visible');
				faq_icon.addClass('faq-category-plus-icon').removeClass('faq-category-minus-icon');
			}
		});
	});
});