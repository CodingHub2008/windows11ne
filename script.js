function clickLogo(){
   console.log("clicked");
    if(document.getElementsByClassName("startmenu")[0].style.marginTop == "30px"){
        document.getElementsByClassName("startmenu")[0].style.marginTop = "-576px"
    }else{
        document.getElementsByClassName("startmenu")[0].style.marginTop = "30px"
    }
}

// var user = prompt('Please enter your name')
// document.getElementById("username").innerHTML = "Your name: " + user;