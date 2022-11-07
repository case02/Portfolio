// // Define Vars
const body = document.querySelector('body');
const theContact = document.getElementById('the_contact');
const theWorks = document.getElementById('the_works');
const theAbout = document.getElementById('the_about');
const theIndex = document.getElementById('the_index');
const button = document.getElementsByClassName('about-button');
const workDivs = document.getElementsByClassName('works')

//mouse over event for works divs
for(let i = 0; i< workDivs.length; i++) {
    
workDivs[i].addEventListener('mouseover', (event) => {
    workDivs[i].style.width = '600px'
    workDivs[i].style.height = '300px';
});

workDivs[i].addEventListener('mouseout', (event) => {
    workDivs[i].style.width = '550px'
    workDivs[i].style.height = '250px';
});
}
