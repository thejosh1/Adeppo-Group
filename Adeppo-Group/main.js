window.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname === '/index.html') {
    const body = document.body;
    const descriptionHeader = document.querySelector('.description-header');
    const descriptionText = document.querySelector('.description-text');
    const descriptionColumnText = document.getElementById('description-column-text');
    const menuCircle = document.getElementById('menu-circle');
    const menuCircle1 = document.getElementById('menu-circle1');
    const menuCircle2 = document.getElementById('menu-circle2');
    const pagMarker1 = document.getElementById('pag1').querySelector('.pag-marker');
    const pagMarker2 = document.getElementById('pag2').querySelector('.pag-marker');
    const pagMarker3 = document.getElementById('pag3').querySelector('.pag-marker');
    const mobileText = document.getElementById('description-column-text');
    const mobileButton = document.getElementById('mobile-button');
    const borderColor = document.getElementById("borderColor");
    const borderColor1 = document.getElementById("borderColor1");
    const borderColo2 = document.getElementById("borderColor2");

    // Set the background image
    body.style.backgroundImage = 'url("images/background-img.png")';

    // Set default colors
    pagMarker1.style.backgroundColor = 'transparent';
    pagMarker2.style.backgroundColor = 'transparent';
    pagMarker3.style.backgroundColor = 'transparent';

    //
    const menuCurvedLine1 = document.querySelector('.menu-curved-line');
    const menuCurvedLine2 = document.querySelector('.menu-curved-line1');
    const menuCurvedLine3 = document.querySelector('.menu-curved-line2');

    // Add transitions
    pagMarker1.style.transition = 'background-color 0.3s ease';
    pagMarker2.style.transition = 'background-color 0.3s ease';
    pagMarker3.style.transition = 'background-color 0.3s ease';

    function resetBackgroundColors() {
      const pagMarkers = [pagMarker1, pagMarker2, pagMarker3];
      pagMarkers.forEach((marker) => {
        marker.style.backgroundColor = 'transparent';
      });
    }

    function changeBackgroundAndContent(color, header, text, imageUrl, pagMarker) {
      setTimeout(() => {
        body.style.backgroundImage = `url("${imageUrl}")`;
      }, 300);
    
      body.style.transition = 'background-image 0.3s ease'; // Add transition for the background image
    
      resetBackgroundColors(); // Reset the background colors of all pagMarkers
      pagMarker.style.backgroundColor = color; // Update the background color for the relevant pagMarker
      
      descriptionHeader.textContent = header;
      descriptionText.textContent = text;
    }

    function handleClick(event, link) {
      if (window.innerWidth <= 768) {
        event.preventDefault();
        mobileText.style.display = 'flex';
        mobileButton.addEventListener('click', function() {
          window.location.href = link;
        });
      }
    }

    // Add event listeners to the menu-circle elements
    menuCircle.addEventListener('mouseover', function() {
      console.log('Mouseover - menuCircle');
      pagMarker1.style.backgroundColor = 'transparent';
      pagMarker3.style.backgroundColor = 'transparent';
      pagMarker2.style.backgroundColor = 'transparent';
      descriptionColumnText.className = 'description-column-text';
      changeBackgroundAndContent(
        '#774E26',
        'Oil and Gas',
        'Providing services such as constructing rigs, designing pipes and pipelines, carrying out technical, construction works and supplies among others.',
        'images/oil-and-gas.png',
        pagMarker1
      );
      menuCurvedLine2.style.borderTopColor = 'white';
      menuCurvedLine3.style.borderTopColor = 'white';

      // Change the border color of menu curved line 1
      menuCurvedLine1.style.borderTopColor = '#774E26';
      
      //change the border color of the circle
      borderColor.style.border = "3px solid #774E26";
      borderColor1.style.border = "none";
      borderColo2.style.border = "none";
    });

    menuCircle1.addEventListener('mouseover', function() {
      console.log('Mouseover - menuCircle1');
      descriptionColumnText.className = 'description-column-text';
      resetBackgroundColors();
      changeBackgroundAndContent(
        '#4B76E5',
        'Marine Logistics',
        'We ensure the process of planning, implementing and managing the movement of goods and information involved in the ocean carriage.',
        'images/background-img.png',
        pagMarker2
      );
      menuCurvedLine1.style.borderTopColor = 'white';
      menuCurvedLine3.style.borderTopColor = 'white';

      // Change the border color of menu curved line 1
      menuCurvedLine2.style.borderTopColor = '#4B76E5';

      //change the border color of the circle
      borderColor.style.border = "none";
      borderColor1.style.border = "3px solid #4B76E5";
      borderColo2.style.border = "none";
    });

    menuCircle2.addEventListener('mouseover', function() {
      console.log('Mouseover - menuCircle2');
        pagMarker1.style.backgroundColor = 'transparent';
        pagMarker3.style.backgroundColor = 'transparent';
        pagMarker2.style.backgroundColor = 'transparent';
        descriptionColumnText.className = 'description-column-text';
        resetBackgroundColors();
        changeBackgroundAndContent(
        '#FF6D00',
        'Renewable Energy',
        'We find ways to generate energy from (theoretically) unlimited natural resources.',
        'images/renewable-energy.png',
        pagMarker3
      );
      menuCurvedLine1.style.borderTopColor = 'white';
      menuCurvedLine2.style.borderTopColor = 'white';

      // Change the border color of menu curved line 3
      menuCurvedLine3.style.borderTopColor = '#FF6D00';

      //change the border color of the circle
      borderColor.style.border = "none";
      borderColor1.style.border = "none";
      borderColo2.style.border = "3px solid #FF6D00";
    });

    // Click event listeners for mobile devices
    menuCircle.addEventListener('click', function(event) {
      handleClick(event, 'oil-and-gas.html');
    });

    menuCircle1.addEventListener('click', function(event) {
      handleClick(event, 'logistics.html');
    });

    menuCircle2.addEventListener('click', function(event) {
      handleClick(event, 'renewable-energy.html');
    });
  }
});


$(document).ready(function() {
  // breake line after screen resize
  $(window).on('resize', function () {
    console.log('hhhhh');
    var maxWidth = window.matchMedia("(max-width: 50em)");
    if (maxWidth.matches) {
      var linebreak = $('#linebreak');
      linebreak.html(linebreak.text().replace('ease on', 'ease on\n'));
      console.log('im working');
    } else {
      var linebreak = $('#linebreak');
      console.log("i'm also working");
      linebreak.html(linebreak.text().replace('\nease on', ' ease on'));
    }
  });
});


const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

const iconClose = document.querySelector(".icon-close");

iconClose.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? iconClose.setAttribute("aria-expanded", "false")
    : iconClose.setAttribute("aria-expanded", "true");
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.style.backgroundImage = ""; // Remove the background image
});


console.log("hey there");

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".select > .selected");

  selected.innerText = "Services";

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');

    caret.classList.toggle("caret-rotate");
    menu.classList.toggle('menu-open');
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      selected.innerText = option.innerText; 
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");

      options.forEach (option=> {
        option.classList.remove("active");
      });

      option.classList.add('active');
    })
  })

  document.addEventListener('click', event => {
    const isClickedInsideDropdown = dropdown.contains(event.target);
    if (!isClickedInsideDropdown) {
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
    }
  });
});

const checkbox = document.querySelector('.terms-and-conditions-checkbox');
const submitButton = document.getElementById('submit-button');
const errorMessage = document.querySelector('.error-message');

// submitButton.addEventListener('click', (event) => {
//   if (!checkbox.classList.contains('checked')) {
//     event.preventDefault();
//     errorMessage.style.display = 'block';
//   } else {
//     errorMessage.style.display = 'none';
//   }
// });

// checkbox.addEventListener('click', () => {
//   checkbox.classList.toggle('checked');
//   submitButton.classList.toggle('white', checkbox.classList.contains('checked'));
//   errorMessage.style.display = 'none';
// });

$(document).ready(function() {
  $("#open-popup").click(function(event) {
    event.preventDefault();

    // Get form data
    var formData = {
      email: $("#email").val(),
      numberOfTons: $("#number-of-tons").val(),
      pickUpCoordinate: $("#pick-up-coordinate").val()
    };

    // Simulate form submission delay
    setTimeout(function() {
      // Show pop-up
      $("body").addClass("active-popup");
      $(".page-container").addClass("active-popup");
    }, 1000); // Adjust the delay time as needed
  });

  $(".close-btn, .page-container").click(function(event) {
    if (
      $(event.target).is(".close-btn") ||
      $(event.target).is(".page-container")
    ) {
      // Hide pop-up
      $("body").removeClass("active-popup");
      $(".page-container").removeClass("active-popup");
    }
  });
});

function showContainer1(containerIndex) {
  var containers = document.querySelectorAll('.pre-footer-container, .pre-footer-container1, .pre-footer-container2');

  // Show the selected container
  var selectedContainer = document.querySelector('.pre-footer-container' + containerIndex);
  console.log("starting here");
  selectedContainer.style.display = 'block';

  // Hide other containers
  containers.forEach(function(container) {
    if (!container.classList.contains('pre-footer-container' + containerIndex)) {
      container.style.display = 'none';
    }
  });
}

function handleBigScreens() {
  function showContainer(containerIndex) {
    var containers = document.querySelectorAll('.section-pre-footer-container, .section-pre-footer-container2, .section-pre-footer-container3');

    // Show the selected container
    var selectedContainer = document.querySelector('.section-pre-footer-container' + containerIndex);
    selectedContainer.style.display = 'flex';

    // Hide other containers
    containers.forEach(function(container) {
      if (!container.classList.contains('section-pre-footer-container' + containerIndex)) {
        container.style.display = 'none';
      }
    });
  }

  // Get the elements for click events
  var realTimeContainers = document.querySelectorAll('.real-time-container');
  var customerContainers = document.querySelectorAll('.customer-container');
  var goodManagementContainers = document.querySelectorAll('.good-management-container');

  // Add click event listeners to all real-time containers
  realTimeContainers.forEach(function(container) {
    container.addEventListener('click', function() {
      showContainer(2);
    });
  });

  // Get the customer containers
  var customerContainers = document.querySelectorAll('.customer-container');

  // Add click event listeners to all customer containers
  customerContainers.forEach(function(container) {
    container.addEventListener('click', function() {
      var sectionPreFooterContainer2 = document.querySelector('.section-pre-footer-container2');
      var sectionPreFooterContainer3 = document.querySelector('.section-pre-footer-container3');

      sectionPreFooterContainer2.style.display = 'none';
      sectionPreFooterContainer3.style.display = 'none';

      var sectionPreFooterContainer = document.querySelector('.section-pre-footer-container');
      sectionPreFooterContainer.style.display = 'flex';
    });
  });

  // Add click event listeners to all good management containers
  goodManagementContainers.forEach(function(container) {
    container.addEventListener('click', function() {
      showContainer(3);
    });
  });
}

function handleSmallScreens() {
  var sectionPreFooterContainerSmall = document.querySelector('.section-pre-footer-container-small');
  sectionPreFooterContainerSmall.style.display = 'block';

  function showContainer1(containerIndex) {
    var containers = document.querySelectorAll('.pre-footer-container, .pre-footer-container1, .pre-footer-container2');

    // Show the selected container
    var selectedContainer = document.querySelector('.pre-footer-container' + containerIndex);
    console.log("starting here");
    selectedContainer.style.display = 'block';

    // Hide other containers
    containers.forEach(function(container) {
      if (!container.classList.contains('pre-footer-container' + containerIndex)) {
        container.style.display = 'none';
      }
    });
  }

  // Get the elements for click events
  var realTimeContainers = document.querySelectorAll('.real-time-updates');
  var real2 = document.querySelectorAll('.about-us-list2');
  var customerContainers = document.querySelectorAll('.about-us-list1');
  var goodManagementContainers = document.querySelectorAll('.good-management');

  // Hide other containers on first load
  var containers = document.querySelectorAll('.pre-footer-container1, .pre-footer-container2');
  containers.forEach(function(container) {
    container.style.display = 'none';
  });

  // Add click event listeners to all real-time containers
  function showContainer(containerIndex) {
    var containers = document.querySelectorAll('.section-pre-footer-container, .section-pre-footer-container2, .section-pre-footer-container3');
  
    // Show the selected container
    var selectedContainer = document.querySelector('.section-pre-footer-container' + containerIndex);
    selectedContainer.style.display = 'flex';
  
    // Hide other containers
    containers.forEach(function(container) {
      if (!container.classList.contains('section-pre-footer-container' + containerIndex)) {
        container.style.display = 'none';
      }
    });
  }
  
  // Get the elements for click events
  var realTimeContainers = document.querySelectorAll('.real-time-container');
  var customerContainers = document.querySelectorAll('.customer-container');
  var goodManagementContainers = document.querySelectorAll('.good-management-container');
  
  // Add click event listeners to all real-time containers
  realTimeContainers.forEach(function(container) {
    container.addEventListener('click', function() {
      showContainer(2);
    });
  });
  
  // Get the customer containers
  var customerContainers = document.querySelectorAll('.customer-container');
  
  // Add click event listeners to all customer containers
  customerContainers.forEach(function(container) {
    container.addEventListener('click', function() {
      var sectionPreFooterContainer2 = document.querySelector('.section-pre-footer-container2');
      var sectionPreFooterContainer3 = document.querySelector('.section-pre-footer-container3');
      
      sectionPreFooterContainer2.style.display = 'none';
      sectionPreFooterContainer3.style.display = 'none';
      
      var sectionPreFooterContainer = document.querySelector('.section-pre-footer-container');
      sectionPreFooterContainer.style.display = 'flex';
    });
  });
  
  
  // Add click event listeners to all good management containers
  goodManagementContainers.forEach(function(container) {
    container.addEventListener('click', function() {
      showContainer(3);
    });
  });
}

function handleWindowResize() {
  var resizeTimeout;

  function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      if (window.innerWidth < 50 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
        handleSmallScreens();
      } else {
        handleBigScreens();
      }
    }, 200);
  }

  window.addEventListener('resize', handleResize);
}

window.addEventListener('load', function() {
  if (window.innerWidth < 50 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
    handleSmallScreens();
  } else {
    handleBigScreens();
  }
  handleWindowResize();
});

const texts = document.querySelectorAll(".indicator");

const removeActiveClass = () => {
  texts.forEach(text => {
    text.classList.remove("isActive");
  });
};

let activeIndicator = null;

const addActiveClass = (entries, observer) => {
  entries.forEach(entry => {
    const indicatorElement = entry.target.querySelector('.indicator');
    const headerElement = entry.target.querySelector('.section-list-text-header');
    
    if (entry.isIntersecting && indicatorElement && headerElement) {
      removeActiveClass();
      indicatorElement.classList.add("isActive");
      headerElement.style.color = '#293037';
      activeIndicator = indicatorElement;
      console.log(indicatorElement);
      
      // Change color of previous header back to #686868
      const previousHeaderElement = entry.target.previousElementSibling?.querySelector('.section-list-text-header');
      if (previousHeaderElement) {
        previousHeaderElement.style.color = '#686868';
      }
    }
  });
};

const options = {
  threshold: 0.8
};

const observer = new IntersectionObserver(addActiveClass, options);
const sections = document.querySelectorAll(".indicator-text");

sections.forEach(section => {
  observer.observe(section);
});

let lastScrollPosition = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down
    if (activeIndicator) {
      const activeSectionRect = activeIndicator.closest('.indicator-text').getBoundingClientRect();
      if (activeSectionRect.bottom <= 0) {
        const visibleSections = Array.from(sections).filter(section => {
          const sectionRect = section.getBoundingClientRect();
          return sectionRect.top < window.innerHeight && sectionRect.bottom >= 0;
        });
        if (visibleSections.length > 0) {
          const lastVisibleSection = visibleSections[visibleSections.length - 1];
          const newActiveIndicator = lastVisibleSection.querySelector('.indicator');
          if (newActiveIndicator) {
            removeActiveClass();
            newActiveIndicator.classList.add("isActive");
            activeIndicator = newActiveIndicator;
            console.log(newActiveIndicator);
          }
        }
      }
    }
  } else {
    // Scrolling up
    if (activeIndicator) {
      const activeSectionRect = activeIndicator.closest('.indicator-text').getBoundingClientRect();
      if (activeSectionRect.top > window.innerHeight) {
        const visibleSections = Array.from(sections).filter(section => {
          const sectionRect = section.getBoundingClientRect();
          return sectionRect.top < window.innerHeight && sectionRect.bottom >= 0;
        });
        if (visibleSections.length > 0) {
          const firstVisibleSection = visibleSections[0];
          const newActiveIndicator = firstVisibleSection.querySelector('.indicator');
          if (newActiveIndicator) {
            removeActiveClass();
            newActiveIndicator.classList.add("isActive");
            activeIndicator = newActiveIndicator;
            console.log(newActiveIndicator);
          }
        }
      }
    }
  }

  lastScrollPosition = currentScrollPosition <= 0 ? 0 : currentScrollPosition;
});


window.addEventListener('load', function() {
  if (window.innerWidth < 50 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
    handleSmallScreens();
  } else {
    handleBigScreens();
  }
  handleWindowResize();
});

const smalltexts = document.querySelectorAll(".indicator1");

const smallremoveActiveClass = () => {
  smalltexts.forEach(text => {
    text.classList.remove("isactive");
  });
};

let smallactiveIndicator = null;

const smalladdActiveClass = (entries, observer) => {
  entries.forEach(entry => {
    const smallindicatorElement = entry.target.querySelector('.indicator1');
    const headerElement = entry.target.querySelector('.section-list-text-header1');
    
    if (entry.isIntersecting && smallindicatorElement && headerElement) {
      smallremoveActiveClass();
      smallindicatorElement.classList.add("isactive");
      headerElement.style.color = '#293037';
      smallactiveIndicator = smallindicatorElement;
      console.log(smallindicatorElement.target);
      
      // Change color of previous header back to #686868
      const previousHeaderElement = entry.target.previousElementSibling?.querySelector('.section-list-text-header1');
      if (previousHeaderElement) {
        previousHeaderElement.style.color = '#686868';
      }
    }
  });
};

const smalloptions = {
  threshold: 0.5
};

const smallobserver = new IntersectionObserver(smalladdActiveClass, smalloptions);
const smallsections = document.querySelectorAll(".indicator-text1");

smallsections.forEach(section => {
  smallobserver.observe(section);
});

let smalllastScrollPosition = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > smalllastScrollPosition) {
    // Scrolling down
    if (smallactiveIndicator) {
      const activeSectionRect = smallactiveIndicator.closest('.indicator-text1').getBoundingClientRect();
      if (activeSectionRect.bottom <= 0) {
        const visibleSections = Array.from(smallsections).filter(section => {
          const sectionRect = section.getBoundingClientRect();
          return sectionRect.top < window.innerHeight && sectionRect.bottom >= 0;
        });
        if (visibleSections.length > 0) {
          const lastVisibleSection = visibleSections[visibleSections.length - 1];
          const newActiveIndicator = lastVisibleSection.querySelector('.indicator1');
          if (newActiveIndicator) {
            smallremoveActiveClass();
            newActiveIndicator.classList.add("isactive");
            smallactiveIndicator = newActiveIndicator;
            console.log(newActiveIndicator);
          }
        }
      }
    }
  } else {
    // Scrolling up
    if (smallactiveIndicator) {
      const activeSectionRect = smallactiveIndicator.closest('.indicator-text1').getBoundingClientRect();
      if (activeSectionRect.top > window.innerHeight) {
        const visibleSections = Array.from(smallsections).filter(section => {
          const sectionRect = section.getBoundingClientRect();
          return sectionRect.top < window.innerHeight && sectionRect.bottom >= 0;
        });
        if (visibleSections.length > 0) {
          const firstVisibleSection = visibleSections[0];
          const newActiveIndicator = firstVisibleSection.querySelector('.indicator1');
          if (newActiveIndicator) {
            smallremoveActiveClass();
            newActiveIndicator.classList.add("isactive");
            smallactiveIndicator = newActiveIndicator;
            console.log(newActiveIndicator);
          }
        }
      }
    }
  }

  smalllastScrollPosition = currentScrollPosition <= 0 ? 0 : currentScrollPosition;
});
