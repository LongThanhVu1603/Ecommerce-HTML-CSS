// Product Gallery

var productimg = document.getElementById("productimg");
var Small_Img = document.getElementsByClassName("small-img");

    Small_Img[0].onclick = function(){
        productimg.src = Small_Img[0].src;
    }

    Small_Img[1].onclick = function(){
        productimg.src = Small_Img[1].src;
    }

    Small_Img[2].onclick = function(){
        productimg.src = Small_Img[2].src;
    }

    Small_Img[3].onclick = function(){
        productimg.src = Small_Img[3].src;
    }

// $(document).ready(function(){
//     $("#productimg").elevateZoom({gallery:'thumb-image'}); 
// })

//pass the images to Fancybox
// $("#zoom_01").bind("click", function(e) {  
//   var ez =   $('#zoom_01').data('elevateZoom');	
// 	$.fancybox(ez.getGalleryList());
//   return false;
// });


// var remove_cart = document.getElementsByClassName("remove");
// for (var i = 0; i < remove_cart.length; i++) {
//     var button = remove_cart[i]
//     button.addEventListener("click", function () {
//     var button_remove = event.target
//     button_remove.parentElement.parentElement.remove()
// })
// }
