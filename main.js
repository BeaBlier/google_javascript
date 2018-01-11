//alert('Hey le site xxxvidsxxx est trop bien. Viens dessus stp please');

setTimeout(function(){
  alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please"); }, 10000);



// let monBouton = document.querySelector('button');
//
// <button type="button"
// onclick="document.getElementById('maintohide').style.display='none'">AFFICHER LES ELEMENTS CENTRAUX!
// </button>
// let monBouton = document.querySelector('button');
// monBouton.onclick = function() {
//   définirNomUtilisateur();
// }


function toggle(maintohide) {
  document.getElementById("ola").style.display = "none";
  if (maintohide.style.visibility==="hidden")
  { maintohide.style.visibility = "visible";
  maintohide.style.height = "auto";
  }
  else {
    maintohide.style.visibility = "visible";
    maintohide.style.height = "800";
  }
}
