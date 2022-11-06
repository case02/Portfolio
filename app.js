// Define Vars
const sections = document.getElementsByTagName('section');
const buttons = document.getElementsByTagName('button');


function onClickHandle(event) {
	console.log(event);
	const sectionsClassName = event.target.innerText.toLowerCase().replaceAll(' ', '-');

	loop over all the sections
	for (let i = 0; i < sections.length; i++) {
		// check if the sections we're currently looping over has an id that matches the clicked button's text
		if (sectionsClassName === sections[i].className) {
			// if the sections's id matches the clicked button's text, make that sections visible.
			sections[i].scrollTo()
		} 
	}
}

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', onClickHandle);
}
