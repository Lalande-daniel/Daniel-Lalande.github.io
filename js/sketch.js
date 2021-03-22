let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');

document.addEventListener('mousemove', moveCursor);

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.style.left=`${x}px`;
    innerCursor.style.top=`${y}px`;
    outerCursor.style.left=`${x}px`;
    outerCursor.style.top=`${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

console.log('links');

links.forEach(link =>{
    link.addEventListener('mouseover', ()=>{
        innerCursor.classList.add("grow");
    });
    link.addEventListener('mouseleave', ()=>{
        innerCursor.classList.remove("grow");
    });
    link.addEventListener('mouseover', ()=>{
        outerCursor.classList.add("disapear");
    });
    link.addEventListener('mouseleave', ()=>{
        outerCursor.classList.remove("disapear");
    });
});

window.onload = function() {
   

    
    var faces = document.getElementsByClassName("face");
    for(var i=0;i<faces.length;i++){
        var face = faces[i];

        var faceX = face.parentNode.offsetLeft;
        var faceY = face.parentNode.offsetTop;

        face.setAttribute('data-x', faceX);
        face.setAttribute('data-y', faceY);
    }




    document.onmousemove = function(e) {
        var x = e.clientX;
        var y = e.clientY;

        for(var i=0;i<faces.length;i++){
            var face = faces[i];

            var faceX = parseInt(face.getAttribute('data-x'));
            var faceY = parseInt(face.getAttribute('data-y'));

            var angle = Math.atan2(faceY - y, faceX - x);


            var a = faceX - x;
            var b = faceY - y;
            var dist = Math.sqrt( a*a + b*b )
            
            console.log(dist);
            var pt = document.getElementsByClassName("point")[0];

            var offset = Math.min(dist/8, 50);

            var ptX = Math.cos(angle - Math.PI) * offset;
            var ptY = Math.sin(angle - Math.PI) * offset;

            console.log(ptX, ptY, faceX, faceY);
            
            face.style.left=`${ptX}px`;
            face.style.top=`${ptY}px`;

        }
    }
}

function toRadians (angle) {
    return angle * (Math.PI / 180);
}


if ($(window).width() < 960) {
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("menu").style.height = "50px";
      } else {
        document.getElementById("menu").style.height = "120px";
      }
    }
 }
