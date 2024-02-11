// Update year in footer tag
const updateYear = new Date().getFullYear();
const copyrightElement = document.getElementById("copyright");

copyrightElement.innerHTML = "© " + updateYear + " Kanan N. All rights reserved.";

// Get the navPanel and searchContainer elements
var navPanel = document.querySelector('#navPanel');
var searchContainer = document.querySelector('.search-container');

// Save the original navPanel HTML
var originalNavPanelHTML = navPanel.innerHTML;

// Function to setup the search bar
function setupSearchBar() {
    // Create a new search bar element
    var searchBar = document.createElement('input');
    searchBar.type = 'text';
    searchBar.placeholder = 'Search Products';
    searchBar.classList.add('search-bar');  // Add a class for styling if needed

    // Create a close button
    var closeButton = document.createElement('button');
    closeButton.classList.add('close-button');  // Add a class for styling if needed

    // Create an SVG element for the 'x'
    var closeIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    closeIcon.setAttribute('viewBox', '0 0 40 40');
    closeIcon.classList.add('close-icon');  // Add a class for styling if needed

    // Create the 'x' path
    var closePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    closePath.setAttribute('d', 'M 10,10 L 30,30 M 30,10 L 10,30');
    closePath.setAttribute('stroke', '#000');
    closePath.setAttribute('stroke-width', '2');

    // Add the 'x' path to the SVG
    closeIcon.appendChild(closePath);

    // Add the SVG to the close button
    closeButton.appendChild(closeIcon);

    // Replace the navPanel contents with the search bar and close button
    navPanel.innerHTML = '';
    navPanel.appendChild(searchBar);
    navPanel.appendChild(closeButton);

    // Add an event listener to the close button to restore the original navPanel contents when clicked
    closeButton.addEventListener('click', function() {
        navPanel.innerHTML = originalNavPanelHTML;
        setupSearchIcon();  // Setup the search icon event listener again
    });
}

// Function to setup the search icon
function setupSearchIcon() {
    searchContainer = document.querySelector('.search-container');  // Get the searchContainer element again in case it was replaced
    searchContainer.addEventListener('click', setupSearchBar);
}

// Setup the search icon event listener initially
setupSearchIcon();
