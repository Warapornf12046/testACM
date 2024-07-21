 
// $(document).ready(function(){
//     $('.hamburger').on("click", function(){
//         $(".nav-grid").toggleClass("open")
//     })
// })



// function myFunction(x) {
//     x.classList.toggle("change");
//   }



$(document).ready(function(){
    $('.hamburger').on("click", function(){
        $(".nav-grid").toggleClass("open");
        $(this).toggleClass("change");
    });
});

function myFunction(x) {
    x.classList.toggle("change");
}