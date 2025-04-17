
 document.addEventListener('DOMContentLoaded', function () {
     const navLinks = document.querySelectorAll('nav a');
     navLinks.forEach(link => {
         link.addEventListener('mouseover', () => {
             link.style.color = '#d2691e';
         });
         link.addEventListener('mouseout', () => {
             link.style.color = '#8b4513';
         });
     });
 });
