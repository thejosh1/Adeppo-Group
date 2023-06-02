// Get the menu-circle elements
const menuCircle = document.getElementById('menu-circle');
const menuCircle1 = document.getElementById('menu-circle1');
const menuCircle2 = document.getElementById('menu-circle2');

// Get the pag-marker elements
const pagMarker1 = document.getElementById('pag1').querySelector('.pag-marker');
const pagMarker2 = document.getElementById('pag2').querySelector('.pag-marker');
const pagMarker3 = document.getElementById('pag3').querySelector('.pag-marker');

//the description elements
const descriptionHeader = document.querySelector('.description-header');
const descriptionText = document.querySelector('.description-text');

// Get the description text elements
const descriptionColumnText = document.getElementById('description-column-text');

const body = document.body;
const overlay = document.getElementById('overlay');

// Add event listeners to the menu-circle elements
menuCircle.addEventListener('mouseover', () => {
  descriptionColumnText.className = 'description-column-text';
});

menuCircle1.addEventListener('mouseover', () => {
  descriptionColumnText.className = 'description-column-text';
});

menuCircle2.addEventListener('mouseover', () => {
  descriptionColumnText.className = 'description-column-text';
});

// Set default colors
pagMarker1.style.backgroundColor = 'transparent';
pagMarker2.style.backgroundColor = 'transparent';
pagMarker3.style.backgroundColor = 'transparent';

// Add transitions
pagMarker1.style.transition = 'background-color 0.3s ease';
pagMarker2.style.transition = 'background-color 0.3s ease';
pagMarker3.style.transition = 'background-color 0.3s ease';

// Add event listeners to the menu-circle elements
menuCircle.addEventListener('mouseover', () => {
  // Reset background color of other circles
  pagMarker2.style.backgroundColor = 'transparent';
  pagMarker3.style.backgroundColor = 'transparent';

  //change the background
  overlay.style.backgroundColor = 'white';
  overlay.style.opacity = '1';
  body.style.backgroundImage = 'url("images/oil-and-gas.png")';
  setTimeout(() => {
    overlay.style.opacity = '0';
  }, 300);

  // Update the clicked circle
  pagMarker1.style.backgroundColor = 'brown';
  descriptionHeader.textContent = 'Oil and Gas';
  descriptionText.textContent = 'Providing services such as constructing rigs, designing pipes and pipelines, carrying out technical, construction works and supplies among others.';
});

menuCircle1.addEventListener('mouseover', () => {
  // Reset background color of other circles
  pagMarker1.style.backgroundColor = 'transparent';
  pagMarker3.style.backgroundColor = 'transparent';
  pagMarker2.style.backgroundColor = 'transparent';

  //change the background color
  overlay.style.backgroundColor = 'white';
  overlay.style.opacity = '1';
  body.style.backgroundImage = 'url("images/background-img.png")';
  setTimeout(() => {
    overlay.style.opacity = '0';
  }, 300);

  // Update the clicked circle
  pagMarker2.style.backgroundColor = 'blue';
  descriptionHeader.textContent = 'Marine Logistics';
  descriptionText.textContent = 'We ensure the process of planning, implementing and managing the movement of goods and information involved in the ocean carriage.';
});

menuCircle2.addEventListener('mouseover', () => {
  // Reset background color of other circles
  pagMarker1.style.backgroundColor = 'transparent';
  pagMarker2.style.backgroundColor = 'transparent';
  pagMarker3.style.backgroundColor = 'transparent';

  //change the background image
  overlay.style.backgroundColor = 'white';
  overlay.style.opacity = '1';
  body.style.backgroundImage = 'url("images/renewable-energy.png")';
  setTimeout(() => {
    overlay.style.opacity = '0';
  }, 300);

  // Update the clicked circle
  pagMarker3.style.backgroundColor = 'red';
  descriptionHeader.textContent = 'Renewable Energy';
  descriptionText.textContent = 'We find ways to generate energy from (theoretically) unlimited natural resources.';
});

console.log("hey there");