$(document).ready(function(){
	
	// Agrego la clase Active
	$('.category_list .category_item[category="all"]').addClass('ct_item-activo');

	// Filtrando Productos --
	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// Agrego la clase Active al enlace seleccionado
		$('.category_item').removeClass('ct_item-activo');
		$(this).addClass('ct_item-activo');
		
		// Ocultando Productos --
		$('.product-item').hide();

		// Mostrando Productos --		
		$('.product-item[category="'+catProduct+'"]').show();

	});

	// Mostrando todos los Productos --
	$('.category_item[category="all"]').click(function(){
		$('.product-item').show();
	});

});