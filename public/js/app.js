$(document).ready(function () {
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

  $('#buscarProducto').on('click', function () {
    $('#container').empty();
    var producto = $('#producto').val();
    if (producto != 0) {
      var request = new XMLHttpRequest();
      request.open('GET', `https://api.mercadolibre.com/sites/MLU/search?q=${producto}`);
      createQueryHash(producto);
      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          request.onload = addProduct;
        }
      };
      request.send();
      localStorage.input = $('#producto').val();
      $('#producto').val('');
    }
  })

  function addProduct() {
    const data = JSON.parse(this.responseText);
    $('#product-visible').addClass('none');
    var rowTemplate = $('#producTemplate').html();
    var compiledTemplate = Handlebars.compile(rowTemplate);
    var generated = compiledTemplate(data);
    var productContainer = $('#container');
    productContainer.append(generated);

    $('.comprar').click(function () {
      var clasProduct = $(this).parent().parent().addClass('clicked');
      var padre = $(this).parent();
      var divX = '<div><span id="span-x"class="float-rigth equis">x</span></div>';
      padre.prepend(divX);
      var nameProduct = $(this).data('name');
      var inputValue = $('#producto').val();
      createQueryHash(nameProduct);
    })
  }
});