// Get the canvas element
var rinrgba;
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

// Draw four circles
context.beginPath();
context.arc(50, 40, 20, 0, 2 * Math.PI);
context.fillStyle = "red";
context.fill();

context.beginPath();
context.arc(50, 95, 20, 0, 2 * Math.PI);
context.fillStyle = "green";
context.fill();

context.beginPath();
context.arc(50, 150, 20, 0, 2 * Math.PI);
context.fillStyle = "blue";
context.fill();

context.beginPath();
context.arc(50, 205, 20, 0, 2 * Math.PI);
context.fillStyle = "orange";
context.fill();



context.beginPath();
context.moveTo(canvas.width - 10, canvas.height / 19);
context.lineTo(canvas.width - 50, canvas.height / 19);
context.lineTo(canvas.width - 50, canvas.height / 19 - 10);
context.lineTo(canvas.width - 70, canvas.height / 19 + 10);
context.lineTo(canvas.width - 50, canvas.height / 19 + 30);
context.lineTo(canvas.width - 50, canvas.height / 19 + 20);
context.lineTo(canvas.width - 10, canvas.height / 19 + 20);
context.closePath();
context.stroke();

context.beginPath();
context.moveTo(canvas.width - 10, canvas.height / 4.8);
context.lineTo(canvas.width - 50, canvas.height / 4.8);
context.lineTo(canvas.width - 50, canvas.height / 4.8 - 10);
context.lineTo(canvas.width - 70, canvas.height / 4.8 + 10);
context.lineTo(canvas.width - 50, canvas.height / 4.8 + 30);
context.lineTo(canvas.width - 50, canvas.height / 4.8 + 20);
context.lineTo(canvas.width - 10, canvas.height / 4.8 + 20);
context.closePath();
context.stroke();

context.beginPath();
context.moveTo(canvas.width - 10, canvas.height / 2.8);
context.lineTo(canvas.width - 50, canvas.height / 2.8);
context.lineTo(canvas.width - 50, canvas.height / 2.8 - 10);
context.lineTo(canvas.width - 70, canvas.height / 2.8 + 10);
context.lineTo(canvas.width - 50, canvas.height / 2.8 + 30);
context.lineTo(canvas.width - 50, canvas.height / 2.8 + 20);
context.lineTo(canvas.width - 10, canvas.height / 2.8 + 20);
context.closePath();
context.stroke();

context.beginPath();
context.moveTo(canvas.width - 10, canvas.height / 2);
context.lineTo(canvas.width - 50, canvas.height / 2);
context.lineTo(canvas.width - 50, canvas.height / 2 - 10);
context.lineTo(canvas.width - 70, canvas.height / 2 + 10);
context.lineTo(canvas.width - 50, canvas.height / 2 + 30);
context.lineTo(canvas.width - 50, canvas.height / 2 + 20);
context.lineTo(canvas.width - 10, canvas.height / 2 + 20);
context.closePath();
context.stroke();

// get reference to canvas element
var canvas = document.getElementById('myCanvas');

// add event listener for click event
canvas.addEventListener('click', function (e) {
    // get canvas coordinates for click event
    var rect = canvas.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    // get pixel data for clicked location
    var imageData = canvas.getContext('2d').getImageData(x, y, 1, 1);
    var pixel = imageData.data;

    // get RGBA values for pixel
    var r = pixel[0];
    var g = pixel[1];
    var b = pixel[2];
    var a = pixel[3];
    if (r == 255 && g == 0) {
        var centerX = 50;
        var centerY = 40;
        var radius = 20;
    }
    else if (r == 0 && g == 128) {
        var centerX = 50;
        var centerY = 95;
        var radius = 20;
    }
    else if (r == 0 && g == 0) {
        var centerX = 50;
        var centerY = 150;
        var radius = 20;
    }
    else {
        var centerX = 50;
        var centerY = 205;
        var radius = 20;
    }

    // create color string
    var color = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';

    // doing something with the color, such as update a UI element
    const mousePos = getMousePos(canvas, e);
    if (isInsideCircle(mousePos, centerX, centerY, radius)) {
        if (centerY == 40) {
            //alert('Clicked inside the red circle');
            let start = setInterval(() => {
                let arr = [];
                let st = animate();
                arr.push(st)
                var maximumValue = arr.reduce(function (temp1, temp2) {
                    return Math.max(temp1, temp2);
                })
                console.log(maximumValue);
                if (maximumValue < 128) {
                    clearInterval(start)
                    //context.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
                    context.beginPath();
                    context.arc(50, 40, 20, 0, 2 * Math.PI);
                    context.fillStyle = "#8c8c8c";
                    context.fill();
                }
            }, 10)
        }
        else if (centerY == 95) {
            //alert('Clicked inside the green circle');
            let start = setInterval(() => {
                let arr = [];
                let st = animate1();
                arr.push(st)
                var maximumValue = arr.reduce(function (temp1, temp2) {
                    return Math.max(temp1, temp2);
                })
                console.log(maximumValue);
                if (maximumValue < 128) {
                    clearInterval(start)
                    //context.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
                    context.beginPath();
                    context.arc(50, 95, 20, 0, 2 * Math.PI);
                    context.fillStyle = "#8c8c8c";
                    context.fill();
                }
            }, 10)
        }
        else if (centerY == 150) {
            //alert('Clicked inside the blue circle');
            let start = setInterval(() => {
                let arr = [];
                let st = animate2();
                arr.push(st)
                var maximumValue = arr.reduce(function (temp1, temp2) {
                    return Math.max(temp1, temp2);
                })
                console.log(maximumValue);
                if (maximumValue < 128) {
                    clearInterval(start)
                    //context.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
                    context.beginPath();
                    context.arc(50, 150, 20, 0, 2 * Math.PI);
                    context.fillStyle = "#8c8c8c";
                    context.fill();

                }
            }, 10)
        }
        else {
            //alert('Clicked inside the yellow circle');
            let start = setInterval(() => {
                let arr = [];
                let st = animate3();
                arr.push(st)
                var maximumValue = arr.reduce(function (temp1, temp2) {
                    return Math.max(temp1, temp2);
                })
                console.log(maximumValue);
                if (maximumValue < 128) {
                    clearInterval(start)
                    //context.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
                    context.beginPath();
                    context.arc(50, 205, 20, 0, 2 * Math.PI);
                    context.fillStyle = "#8c8c8c";
                    context.fill();
                }
            }, 10)
        }
    }

    function getMousePos(canvas, evt) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    function isInsideCircle(pos, x, y, z) {
        const distance = Math.sqrt((pos.x - x) ** 2 + (pos.y - y) ** 2);
        return distance < z;
    }

});


var f = canvas.width;
var g = canvas.height / 19;
//1st arrow
function animate() {
    //requestAnimationFrame(animate);
    //context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.moveTo(f, g);
    context.lineTo(f - 40, g);
    context.lineTo(f - 40, g - 10);
    context.lineTo(f - 60, g + 10);
    context.lineTo(f - 40, g + 30);
    context.lineTo(f - 40, g + 20);
    context.lineTo(f, g + 20);
    context.closePath();
    context.stroke();
    f -= 2; // change the x coordinate for the animation
    return f;
}
var o = canvas.width;
var p = canvas.height / 4.8;
//2nd arrow
function animate1() {
    //requestAnimationFrame(animate);
    //context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.moveTo(o, p);
    context.lineTo(o - 40, p);
    context.lineTo(o - 40, p - 10);
    context.lineTo(o - 60, p + 10);
    context.lineTo(o - 40, p + 30);
    context.lineTo(o - 40, p + 20);
    context.lineTo(o, p + 20);
    context.closePath();
    context.stroke();
    o -= 2; // change the x coordinate for the animation
    return o;
}
//3rd arrow
var t1 = canvas.width;
var t2 = canvas.height / 2.8;
//2nd arrow
function animate2() {
    //requestAnimationFrame(animate);
    //context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.moveTo(t1, t2);
    context.lineTo(t1 - 40, t2);
    context.lineTo(t1 - 40, t2 - 10);
    context.lineTo(t1 - 60, t2 + 10);
    context.lineTo(t1 - 40, t2 + 30);
    context.lineTo(t1 - 40, t2 + 20);
    context.lineTo(t1, t2 + 20);
    context.closePath();
    context.stroke();
    t1 -= 2; // change the x coordinate for the animation
    return t1;
}
//4th arrow
var t3 = canvas.width;
var t4 = canvas.height / 2;
//2nd arrow
function animate3() {
    //requestAnimationFrame(animate);
    //context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.moveTo(t3, t4);
    context.lineTo(t3 - 40, t4);
    context.lineTo(t3 - 40, t4 - 10);
    context.lineTo(t3 - 60, t4 + 10);
    context.lineTo(t3 - 40, t4 + 30);
    context.lineTo(t3 - 40, t4 + 20);
    context.lineTo(t3, t4 + 20);
    context.closePath();
    context.stroke();
    t3 -= 2; // change the x coordinate for the animation
    return t3;
}
