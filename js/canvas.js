function draw(){
	ctx = document.getElementById("canvas").getContext("2d");

	ctx.fillStyle = "green";
	ctx.fillRect(0, 0, 640, 480);
}

window.addEventListener("load", draw, false);