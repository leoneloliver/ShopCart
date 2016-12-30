var cart_sum =0;
$( ".unit" ).each(function( index ) {
	cart_sum = cart_sum+$( this ).text()*1;
});

$('.total-product').html(cart_sum+' Product(s)');
