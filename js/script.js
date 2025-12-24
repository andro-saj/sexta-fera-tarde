$(function () { 
  // 1. Fecha o menu ao perder o foco (Blur)
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  // 2. Solução para fechar ao clicar em qualquer lugar da página (Mobile)
  $(document).click(function (event) {
    var clickTarget = $(event.target);
    var _opened = $("#collapsable-nav").hasClass("in"); // No BS3, 'in' indica que está aberto
    
    if (_opened === true && !clickTarget.hasClass("navbar-toggle")) {
      $("#navbarToggle").click();
    }
  });
  
  // 3. Garante o foco para o blur funcionar no Safari/Firefox
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});