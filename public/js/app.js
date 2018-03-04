$(document).ready(function(){
    window.location.hash = '/' ;
  $('form ul').empty();
  paypal.minicart.render({
    strings: {
      button: 'Pagar'
      , buttonAlt: 'Total'
      , subtotal: 'Total:'
      , empty: 'No hay productos en el carrito'
    }
  });
  
});