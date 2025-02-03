document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('header .nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelectorAll('section p').forEach(p => {
                p.style.color = ''; 
            });
            const targetSection = document.querySelector(link.getAttribute('href'));
            const targetParagraph = targetSection.querySelector('p');
            targetParagraph.style.color = '#18bc9c';  

            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
