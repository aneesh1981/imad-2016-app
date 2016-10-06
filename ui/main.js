var button  = document.getElementById('counter') ;
var counter=0;

button.onclick = function(){
    counter=counter+1;
    console.log(counter);
    var span= document.getElementById('count');
    
    span.innerHtml=counter.toString();
    console.log(span);
};