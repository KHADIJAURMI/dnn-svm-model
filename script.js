

document.addEventListener('DOMContentLoaded', (event) => {
    // Ensure the dropdown menu is toggled when the button is clicked
    const dropdownToggle = document.querySelector('[data-dropdown-toggle="dropdown-user"]');
    const dropdownMenu = document.getElementById('dropdown-user');

    dropdownToggle.addEventListener('click', () => {
        dropdownMenu.classList.toggle('hidden');
    });
});
