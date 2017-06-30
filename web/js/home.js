
 var idhome=document.getElementById("home");
 var idpro=document.getElementById("products");
 var iddiv1=document.getElementById("div1");
 var iddiv2=document.getElementById("div2");
function home()
{
   
    idhome.style.backgroundColor="white";
    idhome.style.color="#000";
    iddiv1.style.display="block";
    iddiv2.style.display="none";
    idpro.style.backgroundColor="#000";
    idpro.style.color="#fff";
}

function products(){
     idhome.style.backgroundColor="#000";
    idhome.style.color="#fff";
     iddiv1.style.display="none";
    iddiv2.style.display="block";
    idpro.style.backgroundColor="#fff";
    idpro.style.color="#000";
}