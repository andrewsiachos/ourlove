var input = prompt("Enter your name my love: ");

if(input){
    if(input==="Malilena"){
        alert("Welcome my Love!!!");
    }else{
        alert("Sorry you entered a wrong name. Try again later");
        window.stop();
    }
}else{
    alert("You didn't give me a name.");
    window.stop();
}
