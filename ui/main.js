console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML='New Value';
console.log(element);
// Moving madi

var move = document.getElementById('madi');
move.onclick= function(){
    move.style.marginLeft='100px';
};