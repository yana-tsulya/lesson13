/**
 * Created by Yana on 17.02.14.
 */
jQuery(document).ready(
  function($){
      $('body').append('<div class="modal"><button class="close">close</button><button class="left"></button><img src="" /><button class="right"></button></div>');

      var popup = $('.modal');
      var ancore = $('.pictures>li a');
      var closeButton = $('.close');
      var leftButton = $('.modal .left');
      var rightButton = $('.modal .right');
      var popupImage = popup.find('img');

      var imagesSrcArray = ['images/dress.png', 'images/rings.png', 'images/hall.png', 'images/hairstyles.png'];
      var arrayLength = imagesSrcArray.length;

      ancore.click(
          function(){
              event.preventDefault();

              var clickImageSrc=$(this).find('img').attr('src');


              if (clickImageSrc !== popupImage.attr('src')){
                  popupImage.attr('src', clickImageSrc);
              };
              if (!popup.hasClass('active')){
                  popup.addClass('active');
              };
          });

      leftButton.click (
          function(){
              for (var i = 0; i < arrayLength; i++) {
                  if (imagesSrcArray[i] == popupImage.attr('src')) {
                      if(i === 0) {
                          popupImage.attr('src', imagesSrcArray[arrayLength-1]);
                          break;
                      }
                      else {
                          popupImage.attr('src', imagesSrcArray[i-1]);
                      };
                  };
              };
          }
      );

      rightButton.click (
          function(){
              for (var i = 0; i < arrayLength; i++) {
                  if (imagesSrcArray[i] == popupImage.attr('src')) {
                      if(i === arrayLength-1) {
                          popupImage.attr('src', imagesSrcArray[0]);
                      }
                      else {
                          popupImage.attr('src', imagesSrcArray[i+1]);
                          break;
                      };
                  };
              };
          }
      );

      closeButton.click (
          function(){
              popup.removeClass('active')
          }
      );

  });
