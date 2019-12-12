function connexion() {
  // on récupère les valeurs
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "floran" && password == "floran") {
    alert("Vous êtes connecté en tant que " + username);
    window.location = "jeu.html"; // rediriger vers cette page
    return true;
  } else {
    document // on affiche un message d'erreur
      .querySelector(".login__error")
      .classList.remove("login__error--hide");
  }
}

// Lorsque l'on rentre quelque chose dans la zone de txt
document.querySelector(".form__password").addEventListener("input", e => {
  const { value } = document.querySelector(".form__password input");
  console.log(value);
  // affichage des conditions du mot de passe
  document
    .querySelector(".conditionMdpTitle")
    .classList.remove("conditionMdpTitle--hide");
  document
    .querySelector(".conditionMdp")
    .classList.remove("conditionMdp--hide");

  // condition sur le nbr caractère
  if (value.length > 8) {
    document.getElementById("caractere").style.color = "green";
  }

  // condition sur une lettre
  for (var i = 0; i < value.length; i++) {
    if (97 <= value[i].charCodeAt(0) && value[i].charCodeAt(0) <= 122) {
      document.getElementById("letter").style.color = "green";
    }
  }

  // condition sur la majuscule
  for (var i = 0; i < value.length; i++) {
    if (65 <= value[i].charCodeAt(0) && value[i].charCodeAt(0) <= 90) {
      document.getElementById("maj").style.color = "green";
    }
  }

  // condition sur le chiffre
  for (var i = 0; i < value.length; i++) {
    console.log(value[i].charCodeAt(0));
    if (48 <= value[i].charCodeAt(0) && value[i].charCodeAt(0) <= 57) {
      document.getElementById("nbr").style.color = "green";
    }
  }

  // condition caractère alpha numérique
  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  for (var i = 0; i < value.length; i++) {
    if (format.test(value[i])) {
      document.getElementById("caracAlpha").style.color = "green";
    }
  }
});
