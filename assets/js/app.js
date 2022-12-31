let cl=console.log;

//DOM DECLARATION
const email =  document.getElementById("email");
//CALLBACK FUNCTION
const usefocus = (eve) => {
    eve.target.style.border = "2px solid orange";
 }
 const useblur = (eve) => {
     //cl(eve.target.value); //cl(eve.target)  // cl(eve.target.value.length)
    let represent =eve.target.value;
    cl(typeof represent)
     eve.target.style.border  = "2px solid pink";
    if(represent.includes("@")===true && 
    represent.includes(".")===true&& 
    (represent.indexOf("@")>2)&&
    (represent.indexOf(".")-represent.indexOf("@")>3)&&
    (represent.indexOf("com")===(represent.length-3))
    ){
     eve.target.nextElementSibling.classList.add("d-none");
 }else{
     eve.target.nextElementSibling.classList.remove("d-none");
     eve.target.nextElementSibling.style.fontWeight = 900 ;
     eve.target.nextElementSibling.style.color = "red" ;
     eve.target.style.backgroundColor = "yellow" ;
 }
}
//EVENT HANDLER
email.addEventListener("focus",usefocus);
email.addEventListener("blur",useblur);

