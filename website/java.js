//---------------topdate-----------------------------------------------
window.onload = function() {
  const dateElement = document.getElementById("current-date");
  const today = new Date();

  // Format date nicely
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'};
  const formattedDate = today.toLocaleDateString('en-US', options);

  dateElement.textContent = formattedDate;

  // Wait a tiny moment, then animate width
  setTimeout(() => {
    dateElement.style.width = dateElement.scrollWidth + "px";
  }, 100); // small delay to allow DOM rendering
};
//--------------------------------------------------------------


function toggleMenu() 
  {
    const menu = document.getElementById("menu");
    // Toggle a class that shows/hides the menu
    menu.classList.toggle("show");
  }


function toggleSearch() 
  {
    const searchBar = document.getElementById("searchBar");
    searchBar.classList.toggle("show"); 
  }


//--------------------------------------------------------------

function toggleAskBar() 
{
    document.getElementById("askBar").classList.toggle("active");
  }