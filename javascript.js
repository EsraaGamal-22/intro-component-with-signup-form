const form = document.getElementById('form-1');
const firstname=document.getElementById("firstname");
const lastname=document.getElementById("lastname");
const emailaddress=document.getElementById("emailaddress");
const password=document.getElementById("password");
function CheckInputs()
{
    if(firstname.value==="")
    {
    document.getElementById("fn-error").style.visibility="visible";
   document.getElementById("error1").style.visibility="visible"; 
   document.getElementById("error1").innerHTML += "<br/><br/>";
   document.getElementById("firstname").style.border="0.5px solid hsl(0, 54%, 66%)";
   document.getElementById("firstname").setAttribute("placeholder",'');
    }
    if(lastname.value==="")
    {
    document.getElementById("ln-error").style.visibility="visible";
   document.getElementById("error2").style.visibility="visible";
   document.getElementById("error2").innerHTML += "<br/><br/>";

   document.getElementById("lastname").style.border="0.5px solid hsl(0, 54%, 66%)";
   document.getElementById("lastname").setAttribute("placeholder",'');
    }
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(emailaddress.value)===false||emailaddress.value==="")
    {
        
     document.getElementById("em-error").style.visibility="visible";
     document.getElementById("error3").style.visibility="visible";
     document.getElementById("error3").innerHTML += "<br/><br/>";

     document.getElementById("emailaddress").style.border="0.5px solid hsl(0, 54%, 66%)";
     document.getElementById("emailaddress").setAttribute("placeholder",'email@example/com');
     document.getElementById("emailaddress").value=""; 
    emailaddress.classList.add("input-mail-style");
     
    }
    if(password.value==="")
    {
        document.getElementById("pa-error").style.visibility="visible";// 
        document.getElementById("error4").style.visibility="visible";
        document.getElementById("error4").innerHTML += "<br/><br/>";
        document.getElementById("password").style.border="0.5px solid hsl(0, 54%, 66%)";
        document.getElementById("password").setAttribute("placeholder",''); 
    }
   
}
form.addEventListener("submit", event => {
    event.preventDefault();
    CheckInputs();
  });

