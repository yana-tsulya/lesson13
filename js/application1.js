/**
 * Created by Yana on 25.02.14.
 */
jQuery(document).ready(function($){

    $('body').append('<div class="modal">' +
        '<button class="close">close</button>' +
        '<button class="left">left</button>' +
        '<img src="" />' +
        '<button class="right">right</button></div>');

    var popup = $('.modal');
    var img = $('.pictures>li a img');
    var ancor = $('.pictures>li a');
    var preImg, nextImg, currentImg;

    ancor.click(function(event){

        event.preventDefault();

        var parentPrev = $(this).parent().prev();
        var parentNext = $(this).parent().next();

        currentImg = $(this).find('img');

        if (parentPrev.length > 0) {
            preImg = parentPrev.find('img');
        } else {
            preImg = img.last();
        }

        if (parentNext.length > 0) {
            nextImg = parentNext.find('img');
        } else {
            nextImg = img.first();
        }

        if (popup.find('img').attr('src') !== currentImg.attr('src')) {
            popup.find('img').attr('src', currentImg.attr('src'));
        }


        if (!popup.hasClass('active')){
            popup.addClass('active');
        }
    });

    $('.modal .left').click(function(){
        popup.find('img').attr('src', preImg.attr('src'));
        nextImg = currentImg;
        currentImg = preImg;
        preImg = currentImg.parent().parent().prev().find('img');
        if (preImg.length === 0) {
            preImg = img.last();
        }
    });

    $('.modal .right').click(function(){
        popup.find('img').attr('src', nextImg.attr('src'));
        preImg = currentImg;
        currentImg = nextImg;
        nextImg = currentImg.parent().parent().next().find('img');
        if (nextImg.length === 0) {
            nextImg = img.first();
        }

    });

    $('.close').click(function(){
        popup.removeClass('active');
    });

});