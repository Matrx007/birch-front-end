let menuHidden = true;

function revealMenu() {
  document.querySelector(".side-bar.mobile").style.display = "flex";
  
  document.querySelector(".open-menu.mobile").style.transform = "rotate(45deg)";
}

function hideMenu() {
  document.querySelector(".side-bar.mobile").style.display = "none";
  
  document.querySelector(".open-menu.mobile").style.transform = "rotate(0deg)";
}

function toggleMenu() {
  if(menuHidden) revealMenu();
  else hideMenu();
  
  menuHidden = !menuHidden;
}

window.onresize = function() {
  if(window.innerWidth > 640) {
    // Hide mobile menus    
    document.querySelector("nav.mobile").style.display = "none";
    document.querySelector(".side-bar.mobile").style.display = "none";
    document.querySelector(".open-menu.mobile").style.display = "none";
    
    // Show desktop menus
    document.querySelector("nav.desktop").style.display = "flex";
  } else {
    // Show mobile menus    
    document.querySelector("nav.mobile").style.display = "flex";
    document.querySelector(".side-bar.mobile").style.display = "flex";
    document.querySelector(".open-menu.mobile").style.display = "initial";
    
    // Hide desktop menus
    document.querySelector("nav.desktop").style.display = "none";
  }
  
  if(menuHidden) hideMenu();
  else revealMenu();
  
  console.log("Menu visibility toggeled");
}

window.onresize();