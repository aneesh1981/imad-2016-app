var button  = document.getElementById('counter') ;
console.log(button);
var counter=0;
button.onclick = function(){
    counter=counter+1;
    var span= document.getElementById('count');
    console.log(counter);
    span.innerHtml=counter.toString();
};