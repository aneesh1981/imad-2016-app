var button  = document.getElementById('counter') ;
//var counter=0;

button.onclick = function(){
    //makerequest
    var request =new XMLHttpRequest();
    
    //capture request
    request.onreadystatechange = function(){
        if(request.readyState===XMLHttpRequest.Done)
        {//some action
            if (request.status===200){
                var counter = request.responseText;
                 var span= document.getElementById('count');
                span.innerHTML=counter.toString();
                }
        }
        
    };
    
    //counter=counter+1;
   // console.log(counter);
   request.open('GET','http://aneesh1981.imad.hasura.io/counter',true);
   request.send(null);
   
};