
function lugemine() {
    document.getElementById("vastus").innerHTML = "Tere, kallis õpilane,"+ document.getElementById("nimi").value+
    " "+document.getElementById("pnimi").value
    ;




}
//sama funktsioon koos muutujatega
function lugemine2() {
    let nimi = document.getElementById("nimi").value;
    let pnimi = document.getElementById("pnimi").value;
    let vastus = document.getElementById("vastus");
    let varv = document.getElementById("varv").value;
    let mees = document.getElementById("mees");
    let naine = document.getElementById("naine");
    let paev = document.getElementById("sunnipaev").value;
    let num = document.getElementById("num").value;






    if(mees.checked){
        vastus.innerHTML=
        "Tere hommikust, mees "+nimi+" "+pnimi+"!"+
        " Sinu sünnipaev on"  +paev;

        vastus.style.color= varv;}



        else if(naine.checked) {vastus.innerHTML=
        "Tere hommikust, naine "+nimi+" "+pnimi+"!"+
        " Sinu sünnipaev on "+paev;

            vastus.style.color= varv;}
        else {vastus.innerHTML="Palun vali sugu!"}

    if(num.value===11){vastus.innerHTML= "Sinu isikukood on" +num;}
    else {vastus.innerHTML= "Palun sisestage kehtiv isikukood";}

}



