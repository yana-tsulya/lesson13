/**
 * Created by Yana on 17.02.14.
 */
jQuery(function($){

    showPhoto();

    function showPhoto() {
        $('#dress').on('click', function () {
            $("#show").dialog({
                width: 250,
                height: 250,
                resizable: false,
                draggable: false,
                modal: true
            });
           // $("#show").
        });
    }
});
