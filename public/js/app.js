$(document).ready(function() {
  window.location.hash = '/';
  $('form ul').empty();
  paypal.minicart.render({
    strings: {
      button: 'Pagar'
      , buttonAlt: 'Total'
      , subtotal: 'Total:'
      , empty: 'No hay productos en el carrito'
    }
  });

<<<<<<< HEAD

  $('#buscarProducto').on('click', function() {
    $('#container').empty();

    // $('.product-visible').removeClass('clicked');
=======
  $('#buscarProducto').on('click', function() {
    $('#container').empty();
>>>>>>> 8c6d0ee4d0f521bc1e24dde5c772811b200d807a
    var producto = $('#producto').val();
    if (producto != 0) {
      var request = new XMLHttpRequest();
      request.open('GET', `https://api.mercadolibre.com/sites/MLU/search?q=${producto}`);
      createQueryHash(producto);
      request.onreadystatechange = function() {
        if (this.readyState === 4) {
          request.onload = addProduct;
        }
      };
      request.send();
<<<<<<< HEAD
      // console.log(producto);
      localStorage.input = $('#producto').val();
      $('#producto').val('');
    }
  })
  function addProduct() {
    const data = JSON.parse(this.responseText);
    // console.log(data);
=======
      localStorage.input = $('#producto').val();
      $('#producto').val('');
    }
  });
  function addProduct() {
    const data = JSON.parse(this.responseText);
>>>>>>> 8c6d0ee4d0f521bc1e24dde5c772811b200d807a
    $('#product-visible').addClass('none');
    var rowTemplate = $('#producTemplate').html();
    var compiledTemplate = Handlebars.compile(rowTemplate);
    var generated = compiledTemplate(data);
    var productContainer = $('#container');
    productContainer.append(generated);
<<<<<<< HEAD

    $('.comprar').click(function() {
      var clasProduct = $(this).parent().parent().addClass('clicked');
      var padre = $(this).parent();
      var divX = '<div><span id="span-x"class="float-rigth equis">x</span></div>';
      padre.prepend(divX);
      var nameProduct = $(this).data('name');
      var inputValue = $('#producto').val();
      createQueryHash(nameProduct);
      $('.product-visible:not(.clicked)').addClass('none');
      $('.carrito').removeClass('none-click');
      $(this).addClass('none-click');

      // createQueryHashProduct(inputValue,nameProduct)

      $('#span-x').click(function() {
        var searchInput = localStorage.input;
        $(this).parent().parent().parent().removeClass('clicked');
        $(this).removeAttr('id');
        $('.product-visible').removeClass('none');
        createQueryHash(searchInput);
        $('.carrito').addClass('none-click');
        $('.comprar').removeClass('none-click');

      });
    })

    $('.carrito').click(function(event) {
      event.stopPropagation();
      paypal.minicart.cart.add({
        // Cuenta paypal para recibir el dinero
        business: 'qualia95@hotmail.com',
        item_name: $(this).data('name'),
        amount: $(this).attr('precio'),
        currency_code: 'PEN',
      });
    });

  }
  function createQueryHash(filters) {
    if (!$.isEmptyObject(filters)) {
      window.location.hash = '/#id=' + filters;
    }
    else {
      window.location.hash = '#';
    }
=======

    $('.comprar').click(function() {
      var clasProduct = $(this).parent().parent().addClass('clicked');
      var padre = $(this).parent();
      var divX = '<div><span id="span-x"class="float-rigth equis">x</span></div>';
      padre.prepend(divX);
      var nameProduct = $(this).data('name');
      var inputValue = $('#producto').val();
      createQueryHash(nameProduct);

      // $('.product-visible').addClass('none-click');
      $('.product-visible:not(.clicked)').addClass('none');
      $('.carrito').removeClass('none-click');
      $(this).addClass('none-click');

      // createQueryHashProduct(inputValue,nameProduct)

      $('#span-x').click(function() {
        var searchInput = localStorage.input;
        $(this).parent().parent().parent().removeClass('clicked');
        $(this).removeAttr('id');
        $('.product-visible').removeClass('none');
        createQueryHash(searchInput);
        $('.carrito').addClass('none-click');
        $('.comprar').removeClass('none-click');
      });
    });

    $('.carrito').click(function(event) {
      event.stopPropagation();
      paypal.minicart.cart.add({
        business: 'qualia95@hotmail.com',
        item_name: $(this).data('name'),
        amount: $(this).attr('precio'),
        currency_code: 'PEN',
      });
    });
  }
  function createQueryHash(filters) {
    if (!$.isEmptyObject(filters)) {
      window.location.hash = '/#id=' + filters ;
    } else {
      window.location.hash = '#';
    }
>>>>>>> 8c6d0ee4d0f521bc1e24dde5c772811b200d807a
  }
  // function createQueryHashProduct(filters, myProduct){
  //
  //     // Here we check if filters isn't empty.
  //     if(!$.isEmptyObject(myProduct)){
  //         // Stringify the object via JSON.stringify and write it after the '#filter' keyword.
  //         window.location.hash = '/#id=/' + filters + '/' + myProduct;
  //     }
  //     else{
  //         // If it's empty change the hash to '#' (the homepage).
  //         window.location.hash = '#';
  //     }
  //
  //
  // }
});
