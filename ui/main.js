var button  = document.getElementById('counter') ;
var counter=0;

button.onclick = function(){
    counter=counter+1;
    console.log(counter);
    var span= document.getElementById('count');
    //console.log(counter);
    span.innerHtml=counter.toString();
};