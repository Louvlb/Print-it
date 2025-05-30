const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Récupère la flèche gauche
const arrow_left = document.querySelector('.arrow_left');

//Récupère la flèche droite
const arrow_right = document.querySelector('.arrow_right');

//Récupère l'image du slider
const banner_img = document.querySelector('.banner-img');

//Récupère le texte du slider
const banner_p = document.querySelector('#banner p');

//Compte le nombre de slide
const nbslides = slides.length;

//Initialise i
let i = 0;

//Récupère la div "dots"
let dots = document.querySelector('.dots');

//Créer un tableau pour conserver les numéros des dot
const dotElements = [];

//Initialise le compteur
let compteur=0;

/*Création de bullet point*/
while (compteur<nbslides){
	compteur++;
	//Crée une balise p
	let dot = document.createElement("p");
	//L'ajoute dans la balise div class=dots
	dots.appendChild(dot);
	//Lui ajoute la class dot
	dot.classList.add("dot");
	
	//Ajoute le dot dans le tableau
	dotElements.push(dot);

	//Ajout l'effet sélectionner au premier dot dès le chragement de la page
	updateDots();
}

/*Création de l'effet de slider à gauche*/

arrow_left.addEventListener('click', () => {
	//Décompte de i
	i--;
	//Création de la limite de i pour défilement infini
	if (i < 0) {
		i = slides.length - 1;
	}
	console.log(i);

	//Concaténation de la src de l'image
	let src_image = './assets/images/slideshow/' + slides[i].image;
	console.log(src_image);
	//Remplacementr de la src de l'image
	banner_img.setAttribute("src", src_image);

	//Récupération du texte dans une variable
	let tagLine = slides[i].tagLine;
	console.log(tagLine);
	//Remplacement du texte
	banner_p.innerHTML = tagLine;

	// Mise à jour des bullet points
	updateDots();
})

/*Création de l'effet de slider à droite*/

arrow_right.addEventListener('click', () => {
	//Décompte de i
	i++;
	//Création de la limite de i pour défilement infini
	if (i >= slides.length) {
		i = 0;
	}
	console.log(i);

	//Concaténation de la src de l'image
	let src_image = './assets/images/slideshow/' + slides[i].image;
	console.log(src_image);
	//Remplacementr de la src de l'image
	banner_img.setAttribute("src", src_image);

	//Récupération du texte dans une variable
	let tagLine = slides[i].tagLine;
	console.log(tagLine);
	//Remplacement du texte
	banner_p.innerHTML = tagLine;

	// Mise à jour des bullet points
	updateDots();
})

/*Fonction pour ajouter l'effet sélectionner aux bullet points*/

function updateDots() {
	//Va chercher les dot dans le tableau avec leur index
	dotElements.forEach((dot, index) => {
		if (index === i) {
			//Ajoute la class=dot_selected au dot sélectionné
			dot.classList.add("dot_selected");
		} else {
			//Retire la class=dot_selected aux dot non-sélectionnés
			dot.classList.remove("dot_selected");
		}
	});
}
