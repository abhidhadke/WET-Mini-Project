const rive = require("@rive-app/canvas");


const r = new rive.Rive({
src: "rive/cat-button.riv",
canvas: document.getElementById("rive_canvas"),
autoplay: true,
onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
},
});