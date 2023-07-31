//Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon
function topNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  //fucntion show/hide password
  function show(){
    let btnPwd = document.getElementById('pwd');
    let btnShow = document.getElementById('showPwd');
    if(btnPwd.type === "password"){
      btnPwd.type = "text";
      btnShow.textContent = "Esconder senha";
    }else{btnPwd.type = "password";btnShow.textContent = "Motrar senha";}
}