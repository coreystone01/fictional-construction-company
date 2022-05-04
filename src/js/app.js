// yourScript.js
// import { tns } from "./node_modules/tiny-slider/src/tiny-slider"

let slider = tns({
    container: ".slider",
    "slideBy": "1",
    "speed": 400,
    "nav" : false,
    autoplay : true,
    controls: false,
    autoplayButtonOutput : false,
    responsive: {
        279:    {
            items: 1,
            gutter: 10,
        },
        500:    {
            items: 2,
            gutter: 20
        }
    }
})

// $(document).ready(function () {
//     let interval = window.setInterval(rotateSlides, 3000)

//     function rotateSlides(){
//         let $firstSlide = $('.slider').find('div:first');
//         let width = $firstSlide.width();

//         $firstSlide.animate({marginLeft: -width}, 1000, function(){
//             let $lastSlide = $('.slider').find('div:last')
//             $lastSlide.after($firstSlide);
//             $firstSlide.css({marginLeft: 0})
//         })
//     }
// });

