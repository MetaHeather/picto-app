

//gets
let canvas = document.getElementById('paint');

let colorSelection = document.querySelector('.colorSelection');

let ctx = canvas.getContext('2d');

let mouse = {x: 0, y: 0};

ctx.strokeStyle = "red";

//event listener to capture mouse movements
canvas.addEventListener('mousemove', function(e){
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);

//Drawing on canvas
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

ctx.lineWidth = '2';
//click event handler for color selection
colorSelection.addEventListener('click', function(evt){
  ctx.strokeStyle = evt.target.id;
});

//Find out what below does
canvas.addEventListener('mousedown', function(e) {
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
    canvas.addEventListener('mousemove', onPaint, false);
}, false);
 
canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);
 
function onPaint() {
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
};

function saveCanvas(){
    //This is where you will be doing the fetch
    let dataURL = canvas.toDataUrl();
    console.log(dataUrl)
    // fetch("/images", { method: "POST",  body: dataUrl })
};

function loadCanvas(strDataURI){
    ///You'll need to get the strDataURI from ejs
    let img = new Image();
    img.onload = function(){
      ctx.drawImage(img,0,0); // Or at whatever offset you like
    };
    img.src = strDataURI;    
}