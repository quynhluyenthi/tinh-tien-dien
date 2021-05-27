function cal(){
    let electronic=+document.getElementById("electronic_number").value;
    money=4000*electronic;
    document.getElementById("result").innerHTML=money+"VND";
}