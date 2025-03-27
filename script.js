// JavaScript to toggle the dropdown content
document.querySelectorAll('.project-title').forEach((title) => {
    title.addEventListener('click', function() {
        const dropdownContent = this.nextElementSibling.querySelector('.dropdown-content');
        dropdownContent.classList.toggle('show');
    });
});
