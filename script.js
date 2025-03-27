// Toggle the project details on hover
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('mouseover', () => {
        const details = project.querySelector('.project-details');
        details.style.display = 'block';
    });

    project.addEventListener('mouseout', () => {
        const details = project.querySelector('.project-details');
        details.style.display = 'none';
    });
});
