// paypal.minicart.render({
//   strings: {
//     button: 'Pagar'
//     , buttonAlt: 'Total'
//     , subtotal: 'Total:'
//     , empty: 'No hay productos en el carrito'
//   }
// });
//
// $('.carrito').click(function(event) {
//       event.stopPropagation();
//       paypal.minicart.cart.add({
//         // Cuenta paypal para recibir el dinero
//         business: 'sistemasnik20@gmail.com',
//         item_name: $(this).attr('titulo'),
//         amount: $(this).attr('precio'),
//         currency_code: 'PEN',
//       });
//     });
