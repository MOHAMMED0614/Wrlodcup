function search(){
    var x = document.querySelector("input");
  
  

    if(x.style.display === 'block'){
     
      x.style.display = "none";
    
      
    }
    else{
        x.style.display = "block";
       
    
      
  
    }
    
  }
  

  const year = document.querySelector('#year');

year.innerHTML = new Date().getFullyear()

function myFunction(){
  var x = document.getElementById("myInput");
  var y = document.getElementById("hide1");
  var z = document.getElementById("hide2");
  if(x.type === 'password'){
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";

  }
  else{
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";

  }
  
}
