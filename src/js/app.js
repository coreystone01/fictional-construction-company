import { tns } from "tiny-slider";

let slider = tns({
    "items": 3,
    "slideBy": 1,
    "controls": false,
    "autoplay": true,
    "responsive": {
        "280": {
        "items": 1,
        "controls": true,
        "edgePadding": 30
        },
        "500": {
        "items": 4
        }
    },
    "container": "#responsive",
    "swipeAngle": false,
    "speed": 400
})