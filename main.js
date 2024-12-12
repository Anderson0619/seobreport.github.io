var typed = new Typed(".text", {
    strings:["Xavier", "Lourdes", "Juan", "Marjorie", "Daniel"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});

document.getElementById("currentYear").textContent = new Date().getFullYear();

// Envío de Email
document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Servicio de Mailto como envío de correo
    var mailtoLink = 'mailto:andersonmera14@gmail.com' +
                     '?subject=' + encodeURIComponent('Mensaje de contacto desde el sitio web SEOBREPORT') + 
                     '&body=' + encodeURIComponent('Usuario: ' + name + '\n Correo Electrónico: ' + email + '\n Mensaje: ' + message );

    window.location.href = mailtoLink;
});