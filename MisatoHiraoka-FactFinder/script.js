//fact changer 

//fact 1
document.querySelector('#menu').a.addEventListener("click",fact1);
function fact1() {
	document.querySelector('section').innerHTML = "Ketchup was sold as medicine in the 1830s.<br><img src ='images/ketchup.png' alt='ketchup'>"; 
}

//fact 2
document.querySelector('#menu').b.addEventListener("click",fact2);
function fact2() {
	document.querySelector('section').innerHTML = "Before the 1800s, people had a 'first' and 'second sleep.' They would sleep 3-4 hours, wake up for 2-3 hours to do some type of activity, then go back to sleep until morning. <br><img src ='images/sleep.jpg' alt='sleeping kid'>"; 
}

//fact 3
document.querySelector('#menu').c.addEventListener("click",fact3);
function fact3() {
	document.querySelector('section').innerHTML = "The common phrase– “Red sky in the morning” is a “sailor’s” or “shepherd’s” warning – is true. It is believed that a red sunset indicates that the air is clear, and the weather in the west will be pleasant in the morning. However, a fiery red sunrise is a bad omen, meaning good weather conditions have already gone, and a storm may be coming to the east. <br> <img src ='images/sunrise.jpg' alt='red sky'>";	
}
//fact4
document.querySelector('#menu').d.addEventListener("click",fact4);
function fact4() {
	document.querySelector('section').innerHTML = "Studying is technically a combination of study and dying? <br> <img src ='images/studying.png' alt='studying and stressing'>"; 
}

//fact 5
document.querySelector('#menu').e.addEventListener("click",fact5);
function fact5() {
	document.querySelector('section').innerHTML = "For 20 years, a cat served as mayor of an Alaskan town. <br> <img src ='images/cat.jpg' alt='cat'>"; 
}

//theme changer
//theme #1
document.querySelector('#theme').one.addEventListener("click",theme1);
function theme1() {
	var button = document.getElementsByTagName('input');
	document.querySelector('body').style.backgroundColor = "#A5A58D" 
	document.querySelector('section').style.color = "#CB997E"
	document.querySelector('section').style.backgroundColor = "#FFE8D6"
	document.querySelector('section').style.borderColor="#B7B7A4"
	for(var i = 0; i < button.length; i++) {
		button[i].style.color = "#CB997E";
		button[i].style.backgroundColor = "#FFE8D6";
		button[i].style.borderColor = "#B7B7A4"; 
	}	
}

//theme #2
document.querySelector('#theme').two.addEventListener("click",theme2);
function theme2() {
	var button = document.getElementsByTagName('input');
	document.querySelector('body').style.backgroundColor = "#ADE8FF"  
	document.querySelector('section').style.color = "#2081C3"
	document.querySelector('section').style.backgroundColor = "#E0F5F6"
	document.querySelector('section').style.borderColor="#78D5D7"
	for(var i = 0; i < button.length; i++) {
		button[i].style.color = "#2081C3";
		button[i].style.backgroundColor = "#E0F5F6";
		button[i].style.borderColor = "#78D5D7"; 
	}
	
}

//theme #3
document.querySelector('#theme').three.addEventListener("click",theme3);
function theme3() { 
	var button = document.getElementsByTagName('input');
	document.querySelector('body').style.backgroundColor = "#FAE3D0" 
	document.querySelector('section').style.color = "#FD9A43"
	document.querySelector('section').style.backgroundColor = "#F8EDEB"
	document.querySelector('section').style.borderColor= "#FFB5A7"
	for(var i = 0; i < button.length; i++) {
		button[i].style.color = "#FFB5A7";
		button[i].style.backgroundColor = "#F8EDEB";
		button[i].style.borderColor = "#FFB5A7"
	}
}

/*button just an example 
var menubuttons; 
menubuttons = document.querySelector('#menu').getElementsByTagName('input');
for(var i = 0; i < menubuttonslength; i++) {
	mybuttons[i].style.backgroundColor = "#B2876C"
	*/ 
