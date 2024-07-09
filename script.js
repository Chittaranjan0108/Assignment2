function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    
    // Show the selected page
    document.getElementById(pageId).style.display = 'block';

    // Set the search input placeholder
    const searchInput = document.getElementById('search-input');
    if (pageId === 'home') {
        searchInput.placeholder = 'Search in Home';
    } else if (pageId === 'customers') {
        searchInput.placeholder = 'Search in Customers';
    }
    
    // Update the active menu item
    const menuItems = document.querySelectorAll('.menu a');
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`.menu a[onclick="showPage('${pageId}')"]`).classList.add('active');
}
