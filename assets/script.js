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


const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');
const banner_img = document.querySelector('.banner-img');
const banner_p = document.querySelector('#banner p');

/*Compte le nombre de slide*/

const nbslides = slides.length;

let i = 0;

/*Écoute du click sur la flèche gauche*/

arrow_left.addEventListener('click', () => {

	i--;
	if (i < 0) {
		i = slides.length - 1;
	}
	console.log(i);

	let src_image = './assets/images/slideshow/' + slides[i].image;
	console.log(src_image);
	banner_img.setAttribute("src", src_image);

	let tagLine = slides[i].tagLine;
	console.log(tagLine);
	banner_p.innerHTML = tagLine;
})

/*Écoute du click sur la flèche droite*/

arrow_right.addEventListener('click', () => {
	i++;
	if (i >= slides.length) {
		i = 0;
	}
	console.log(i);

	let src_image = './assets/images/slideshow/' + slides[i].image;
	console.log(src_image);
	banner_img.setAttribute("src", src_image);

	let tagLine = slides[i].tagLine;
	console.log(tagLine);
	banner_p.innerHTML = tagLine;
})

/*Récupère la div "dots"*/

let dots = document.querySelector('.dots');

/*Créer les bullets points*/

let compteur=0;
while (compteur<nbslides){
	compteur++;
	let dot = document.createElement("p");
	dots.appendChild(dot);
	dot.classList.add("dot");
	dot.classList.add("dot_"+[compteur]);
}

