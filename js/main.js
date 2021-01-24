$(function () {

  $('.header__burger').click(function () {
    $(".header__burger").toggleClass('show-burger');
    $(".nav-menu__list").slideToggle();
  });

});