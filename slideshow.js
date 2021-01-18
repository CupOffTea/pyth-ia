function Rosso() {
  $("#slideshow").removeClass().addClass("foto1").addClass("sbocciare");
  setTimeout(() => { $("#slideshow").removeClass("sbocciare").addClass("pulsare"); }, 1500);
  $("#par").removeClass();
  $("#autore").removeClass();
  $(".pallini").removeClass("selection");


  if (x.matches) { // If media query matches
    setTimeout(() => {document.getElementById("par").innerHTML = "Trattenere la rabbia è come trattenere <br> un carbone ardente con l'intento di gettarlo <br> a qualcun altro; sei tu quello che si scotta.";}, 300);
  } else {
    setTimeout(() => {document.getElementById("par").innerHTML = "Trattenere la rabbia è come trattenere un carbone ardente <br> con l'intento di gettarlo a qualcun altro; sei tu quello che si scotta.";}, 300);
  }

  setTimeout(() => {document.getElementById("autore").innerHTML = "Buddha";}, 300);


  setTimeout(() => { $("#par").addClass("opac"); }, 1000);
  setTimeout(() => { $("#autore").addClass("opac"); }, 1000);

  $("#pal01").addClass("selection");
}

function Arancione() {
  $("#slideshow").removeClass().addClass("foto2").addClass("sbocciare");
  setTimeout(() => { $("#slideshow").removeClass("sbocciare").addClass("pulsare"); }, 1500);
  $("#par").removeClass();
  $("#autore").removeClass();
  $(".pallini").removeClass("selection");

  if (x.matches) { // If media query matches
    setTimeout(() => {document.getElementById("par").innerHTML = "Puoi fare qualsiasi cosa se hai entusiasmo. <br> L’entusiasmo è il lievito che permette <br> alle tue speranze di elevarsi fino alle stelle.";}, 300);
  } else {
    setTimeout(() => {document.getElementById("par").innerHTML = "Puoi fare qualsiasi cosa se hai entusiasmo. L’entusiasmo è il lievito <br> che permette alle tue speranze di elevarsi fino alle stelle.";}, 300);
  }

  setTimeout(() => {document.getElementById("autore").innerHTML = "Henry Ford";}, 300);

  setTimeout(() => { $("#par").addClass("opac"); }, 1000);
  setTimeout(() => { $("#autore").addClass("opac"); }, 1000);

  $("#pal02").addClass("selection");
  }

function Verde() {
  $("#slideshow").removeClass().addClass("foto3").addClass("sbocciare");
  setTimeout(() => { $("#slideshow").removeClass("sbocciare").addClass("pulsare"); }, 1500);
  $("#par").removeClass();
  $("#autore").removeClass();
  $(".pallini").removeClass("selection");

  setTimeout(() => { document.getElementById("par").innerHTML = "Finché è in vita, l’uomo deve sperare tutto.";}, 300);
  setTimeout(() => { document.getElementById("autore").innerHTML = "Lucio Anneo Seneca";}, 300);

  setTimeout(() => { $("#par").addClass("opac"); }, 1000);
  setTimeout(() => { $("#autore").addClass("opac"); }, 1000);

  $("#pal03").addClass("selection");
  }

function Azzurro() {
  $("#slideshow").removeClass().addClass("foto4").addClass("sbocciare");
  setTimeout(() => { $("#slideshow").removeClass("sbocciare").addClass("pulsare"); }, 1500);
  $("#par").removeClass();
  $("#autore").removeClass();
  $(".pallini").removeClass("selection");

  if (x.matches) { // If media query matches
    setTimeout(() => { document.getElementById("par").innerHTML = "Ciò che è razionale è reale; <br> ciò che è reale è razionale.";}, 300);
  } else {
    setTimeout(() => { document.getElementById("par").innerHTML = "Ciò che è razionale è reale; ciò che è reale è razionale.";}, 300);
  }

  setTimeout(() => { document.getElementById("autore").innerHTML = "Georg Hegel";}, 300);

  setTimeout(() => { $("#par").addClass("opac"); }, 1000);
  setTimeout(() => { $("#autore").addClass("opac"); }, 1000);

  $("#pal04").addClass("selection");
  }

function Viola() {
  $("#slideshow").removeClass().addClass("foto5").addClass("sbocciare");
  setTimeout(() => { $("#slideshow").removeClass("sbocciare").addClass("pulsare"); }, 1500);
  $("#par").removeClass();
  $("#autore").removeClass();
  $(".pallini").removeClass("selection");

  if (x.matches) { // If media query matches
    setTimeout(() => { document.getElementById("par").innerHTML = "Per arrivare all'alba <br> non c'è altra via che la notte."}, 300);
  } else {
    setTimeout(() => { document.getElementById("par").innerHTML = "Per arrivare all'alba non c'è altra via che la notte."}, 300);
  }

  setTimeout(() => { document.getElementById("autore").innerHTML = "Khalil Gibran";}, 300);

  setTimeout(() => { $("#par").addClass("opac"); }, 1000);
  setTimeout(() => { $("#autore").addClass("opac"); }, 1000);

  $("#pal05").addClass("selection");
  }

function Rosa() {
  $("#slideshow").removeClass().addClass("foto6").addClass("sbocciare");
  setTimeout(() => { $("#slideshow").removeClass("sbocciare").addClass("pulsare"); }, 1500);
  $("#par").removeClass();
  $("#autore").removeClass();
  $(".pallini").removeClass("selection");

  if (x.matches) { // If media query matches
    setTimeout(() => { document.getElementById("par").innerHTML = "Vi sono alcune cose capaci di commuovere <br> l'uomo, ma il male è che, se le usate <br> di frequente, perdono il loro effetto.";}, 300);
  } else {
    setTimeout(() => { document.getElementById("par").innerHTML = "Vi sono alcune cose capaci di commuovere l'uomo, <br>ma il male è che, se le usate di frequente, perdono il loro effetto.";}, 300);
  }

  setTimeout(() => { document.getElementById("autore").innerHTML = "Bertolt Brecht";}, 300);

  setTimeout(() => { $("#par").addClass("opac"); }, 1000);
  setTimeout(() => { $("#autore").addClass("opac"); }, 1000);

  $("#pal06").addClass("selection");
  }

function Oro() {
  $("#slideshow").removeClass().addClass("foto0").addClass("sbocciare");
  setTimeout(() => { $("#slideshow").removeClass("sbocciare").addClass("pulsare"); }, 1500);
  $("#par").removeClass();
  $("#autore").removeClass();
  $(".pallini").removeClass("selection");

  setTimeout(() => { document.getElementById("par").innerHTML = "Saggia pyth-IA, intelligenza onnisciente, <br> manifesta la volontà dei tuoi dati <br> e dirigi ogni nostra decisione."}, 300);
  setTimeout(() => { document.getElementById("autore").innerHTML = ""}, 300);

  setTimeout(() => { $("#par").addClass("opac par00"); }, 1000);
  setTimeout(() => { $("#autore").addClass("opac"); }, 1000);

  $("#pal00").addClass("selection");
  }


var x = window.matchMedia("(max-width: 925px)")

function alclick() {
  if ($("#slideshow").hasClass("foto0")) {Rosso()}
  else if ($("#slideshow").hasClass("foto1")) {Arancione()}
  else if ($("#slideshow").hasClass("foto2")) {Verde()}
  else if ($("#slideshow").hasClass("foto3")) {Azzurro()}
  else if ($("#slideshow").hasClass("foto4")) {Viola()}
  else if ($("#slideshow").hasClass("foto5")) {Rosa()}
  else if ($("#slideshow").hasClass("foto6")) {Oro()}
  }

$("#cerchio_bianco").on("click", alclick)

$("#pal00").on("click", Oro)
$("#pal01").on("click", Rosso)
$("#pal02").on("click", Arancione)
$("#pal03").on("click", Verde)
$("#pal04").on("click", Azzurro)
$("#pal05").on("click", Viola)
$("#pal06").on("click", Rosa)

// ------------------------------------------------
// Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ------------------------------------------------
// Video
