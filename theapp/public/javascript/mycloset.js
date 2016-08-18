$(function() {
					// THE MENU
					var $menu = $('#ldd_menu');


					//  for each list element,
					//  we show the submenu when hovering and
					//  expand the span element (title) to 510px

					$menu.children('li').each(function(){
						var $this = $(this);
						var $span = $this.children('span');
						$span.data('width',$span.width());
						$this.bind('mouseenter', function(){
						$menu.find('.ldd_submenu').stop(true,true).hide();
						$span.stop().animate({'width':'200px'},500,function(){
						$this.find('.ldd_submenu').slideDown(200);
							});
					}).bind('mouseleave',function(){
						$this.find('.ldd_submenu').stop(true,true).hide();
						$span.stop().animate({'width':$span.data('width')+'px'},500);

							// make template
							render = _.template($('#product-template').html());
							console.log('mouseleave');

							$.get('/retailers', function(product) {
									console.log(product)
									if(product.error){
										console.log(product.error)
									} else {
										console.log(product);
										product.forEach(function(products) {
											$('.product-item').html("")
											$('.product-item').append(render(products))
										});
									}
							});
						});

$('.cbox1').click(function(event){
	// Checks to see if the box is checked.
	// IF yes THEN add the retailer ID to the DB under user.retailers
	if($(event.target).is(':checked')) {
		var $label = $(event.target).next('label').text();
		var $retailer_id = $(event.target).next('label').attr("data-id");
		console.log($label)
		console.log($retailer_id);
			$.ajax({
				url: '/retailers',
				type: "put",
				dataType: "json",
				data: {
					retailer: $retailer_id
				}
			});
		}
		else {
			// IF no THEN remove the retailer ID from the DB under user.retailers
			var $label = $(event.target).next('label').text();
			var $retailer_id = $(event.target).next('label').attr("data-id");
			console.log($label)
			console.log($retailer_id);
				$.ajax({
					url: '/retailers',
					type: "delete",
					dataType: "json",
					data: {
						retailer: $retailer_id
					}
				});
		}
});

});
});
