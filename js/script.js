

$(function() {
  // Fecha o menu colapsado ao clicar em qualquer link, exceto dropdowns
  $(document).on('click', '.navbar-collapse.in a', function() {
    if (!$(this).hasClass('dropdown-toggle')) {
      $('.navbar-collapse.in').collapse('hide');
    }
  });
});
