$(function(){
    var image = $(".category-section").find('img').attr('src');
    $(".category-section ul li a").mouseover(function(){
        var currentImage = $(this).attr('data-image');
        // console.log(currentImage);
        $(this).parent().parent().parent().find('img').attr("src", currentImage);
        $(".category-section img").css("opacity", "1");
    });

   $(".category-section ul li a").mouseout(function(){
        $(".category-section img").css("opacity", "1");
    });
});

// search bar expanding

$(document).ready(function(){
    $('.search-icon').click(function(){
        $('.search-bar').toggleClass('active');
    })
})

// hamburger animation
const menuBtn = document.querySelector('.navigation-bar');
let menuOpen = false;
menuBtn.addEventListener('click', () =>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    } 
    else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

// mega menu navigation

$(document).ready(function(){
    $('.hamburger-menu').click(function(){
        $('.mega-menu').toggleClass('active');
    });
});


