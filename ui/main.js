console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML='New Value';
console.log(element);
// Moving madi

var move = document.getElementById('madi');
var marginLeft=0;
var moveRight = function()
{
 marginLeft=marginLeft+10;
move.style.marginLeft=marginLeft+'px';
};
move.onclick= function(){
    var interval = setInterval(moveRight,20);
    //move.style.marginLeft='100px';
};