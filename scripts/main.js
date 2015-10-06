(function(){
  'use strict';

  $(document).ready(function(){
    $('body').prepend(JST['application']()).prepend(JST['header']());
    $('.header-wrapper .container').append(JST['top-navigation']());

    $('li.top-drop-down ').mouseenter(
        function(){
          $(this).find('ul.drop-down').slideDown();
        }
    );
    $('li.top-drop-down').mouseleave(
        function(){
          $(this).find('ul.drop-down').slideUp();
        }
    );

  });
})();

