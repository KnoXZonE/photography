$(function(){
    var image = $(".category-section").find('img').attr('src');
    $(".category-section ul li a").mouseover(function(){
        var currentImage = $(this).attr('data-image');
        // console.log(currentImage);
        $(this).parent().parent().parent().find('img').attr("src", currentImage);
        // $(".category-section img").css("opacity", "1");
    });

    // $(".category-section ul li a").mouseout(function(){
    //     $(".category-section img").css("opacity", "0.5");
    // });
});