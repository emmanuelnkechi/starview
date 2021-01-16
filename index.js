// $('#carouselExample').on('slide.bs.carousel', function (e) {
//     var $e = $(e.relatedTarget);
    
//     var idx = $e.index();
//     console.log("IDX :  " + idx);
    
//     var itemsPerSlide = 8;
//     var totalItems = $('.carousel-item').length;
    
//     if (idx >= totalItems-(itemsPerSlide-1)) {
//         var it = itemsPerSlide - (totalItems - idx);
//         for (var i=0; i<it; i++) {
//             // append slides to end
//             if (e.direction=="left") {
//                 $('.carousel-item').eq(i).appendTo('.carousel-inner');
//             }
//             else {
//                 $('.carousel-item').eq(0).appendTo('.carousel-inner');
//             }
//         }
//     }
// });
function showCommentBox() {
    var x = document.getElementById("commentBox");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function showCommentBox2() {
    var x = document.getElementById("commentBox2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}