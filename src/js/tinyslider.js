// tiny slider
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
