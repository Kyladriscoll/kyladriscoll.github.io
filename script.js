// Toggle dropdown content
function toggleDropdown(projectId) {
    const projectContent = document.getElementById(projectId);

    // Toggle the display of the content
    if (projectContent.style.display === 'none' || projectContent.style.display === '') {
        projectContent.style.display = 'block';
    } else {
        projectContent.style.display = 'none';
    }
}
