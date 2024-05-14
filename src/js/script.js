// Implement light/dark mode switch with replacing images
const darkModeToggle = document.querySelector('#darkModeToggle');
const bothModeIcons = document.querySelector('#bothModeIcons');

// Check if dark mode was enabled in a previous session
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    bothModeIcons.src = './src/media/icons/moon.svg';
} else {
    bothModeIcons.src = './src/media/icons/sunny.svg';
}

// Display the image once the correct source has been set
bothModeIcons.style.display = 'inline-block';

darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    // Save the dark mode setting in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        bothModeIcons.src = './src/media/icons/moon.svg';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        bothModeIcons.src = './src/media/icons/sunny.svg';
    }
});

// Update year in footer tag
const updateYear = new Date().getFullYear();
const copyrightElement = document.getElementById("copyright");

copyrightElement.innerHTML = "© " + updateYear + " kanansnote. All rights reserved.";

// Get the navBar and searchContainer elements
const navBar = document.querySelector('#navBar');

// Save the original navBar HTML
const originalnavBarHTML = navBar.innerHTML;

// Function to setup the search bar
function setupSearchBar() {
    // Create a new search bar element
    const searchBar = document.createElement('input');
    searchBar.type = 'text';
    searchBar.placeholder = 'Search Products';
    searchBar.classList.add('search-bar');  // Add a class for styling if needed

    // Create a close button
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');  // Add a class for styling if needed

    // Create an SVG element for the 'x'
    const closeIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    closeIcon.setAttribute('viewBox', '0 0 40 40');
    closeIcon.style.cursor = 'pointer';
    closeIcon.classList.add('close-icon');  // Add a class for styling if needed

    // Create the 'x' path
    const closePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    closePath.setAttribute('d', 'M 10,10 L 30,30 M 30,10 L 10,30');
    closePath.setAttribute('stroke', '#000');
    closePath.setAttribute('stroke-width', '2');

    // Add the 'x' path to the SVG
    closeIcon.appendChild(closePath);

    // Add the SVG to the close button
    closeButton.appendChild(closeIcon);

    // Replace the navBar contents with the search bar and close button
    navBar.innerHTML = '';
    navBar.appendChild(searchBar);
    navBar.appendChild(closeButton);

    // Add an event listener to the close button to restore the original navBar contents when clicked
    closeButton.addEventListener('click', function() {
        navBar.innerHTML = originalnavBarHTML;
        setupSearchIcon();  // Setup the search icon event listener again
    });
}

// Function to setup the search icon
function setupSearchIcon() {
    const searchContainer = document.querySelector('.search-container');
    searchContainer.addEventListener('click', setupSearchBar);
}

// Setup the search icon event listener initially
setupSearchIcon();

// Initiating video carousel in the Home page
const videoSwiper = new Swiper('.videoCarousel', {
    slidesPerView: 1, // Show only one video at a time
    spaceBetween: 0, // No spacing between slides
    loop: true, // Enable continuous looping
    autoplay: {
      delay: 6000, // Delay between transitions (in milliseconds)
      disableOnInteraction: true, // Stop autoplay on user interaction
    }
});

// Implementing swiper.js to .ProductsContainer
const cardSwiper = new Swiper('.ProductsContainer', {
    slidesPerView: '4', // Adjust this value to control how many slides are visible at a time
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Get the navigation items
const pageLinks = document.querySelectorAll('.pageLinks');

// Get the current URL
const currentUrl = window.location.href;

// Loop through the navigation items
for (let i = 0; i < pageLinks.length; i++) {
    // Get the href of the navigation item
    let navItemUrl = pageLinks[i].href;

    // If the navigation item URL matches the current URL, add the 'active' class
    if (navItemUrl === currentUrl) {
        pageLinks[i].classList.add('active');
    }
}

// Get the userDropdown element
const userDropdown = document.querySelector('#userDropdown');

// Create a new div element for the dropdown menu
const dropdownMenu = document.createElement('div');
dropdownMenu.style.display = 'none';  // Set the initial display style to 'none'

// Add some options to the dropdown menu
let options = ['Sign In', 'Create Account', 'Orders', 'My Account'];  // Add more options as needed
for (let i = 0; i < options.length; i++) {
    let option = document.createElement('a');
    option.href = options[i].toLowerCase().replace(' ', '') + '.html';
    option.textContent = options[i];
    dropdownMenu.appendChild(option);

    // Add a divider after 'Create Account'
    if (options[i] === 'Create Account') {
        let divider = document.createElement('hr');
        dropdownMenu.appendChild(divider);
    }
}

// Add the dropdown menu to the userDropdown element
userDropdown.appendChild(dropdownMenu);

// Add an event listener to the userDropdown element to show and hide the dropdown menu when clicked
userDropdown.addEventListener('click', function() {
    if (dropdownMenu.style.display === 'none') {
        dropdownMenu.style.display = 'block';
    } else {
        dropdownMenu.style.display = 'none';
    }
});

// Add an event listener to the document to hide the dropdown menu when clicked
document.addEventListener('click', function() {
    dropdownMenu.style.display = 'none';
});

// Create burger menu
const burgerMenu = document.querySelector(".burger-menu");

window.onload = function() {
    if (window.innerWidth <= 790) {
        navBar.style.display = 'none';
    }
};

burgerMenu.addEventListener("click", () => {
    if (window.innerWidth < 790) {
        navBar.style.display = navBar.style.display === "none" ? "flex" : "none";
        navBar.style.justifyContent = 'center';
    }

    for (let i = 0; i < pageLinks.length; i++) {
        pageLinks[i].classList.remove("active");
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 790) {
        navBar.style.display = 'flex';
    } else {
        navBar.style.display = 'none';
    }
});

// Actions on contact submit form
let dropLine = document.getElementById('dropLine');
let contactSubmitForm = document.querySelector('.contactSubmitForm');

contactSubmitForm.style.display = 'none';

dropLine.addEventListener('click', function() {
    event.stopPropagation();  // Prevent the document's click event from being triggered
    if (contactSubmitForm.style.display === 'none') {
        contactSubmitForm.style.display = 'block';

    }
});

// Make headline id element disappear when scrolling down
window.onscroll = function() {
  const scrollPosition = window.scrollY;

  // Determine desired scroll threshold (e.g., 50px):
  const threshold = 0;

  if (scrollPosition > threshold) {
    headline.style.display = 'none'; // Adjust top position as needed
  } else {
    headline.style.display = 'block';
  }
};
